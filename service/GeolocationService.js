import Axios from 'axios';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as SecureStore from 'expo-secure-store';
import * as Geolib from 'geolib';

// Local Import
import proxy from './proxy';

// Class
class GeolocationService {
  static distance = 0;

  static getDistance = () => {
    return this.distance;
  }

  static setDistance = (value) => {
    this.distance = value;
  }

  static login = ({phoneNumber, lat, lng}) => {
    return new Promise((resolve, reject) => {
      Axios.post(`${proxy}/login`, {
        phoneNumber,
        lat,
        lng,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve(error);
      });
    });
  }

  static getAll = () => {
    return new Promise((resolve, reject) => {
      Axios.get(`${proxy}/all`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve(error);
      });
    });
  }

  static update = ({id, lat, lng}) => {
    return new Promise((resolve, reject) => {
      Axios.put(`${proxy}/update/${id}`, {
        lat,
        lng,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve(error);
      });
    });
  }

  static logout = (id) => {
    return new Promise((resolve, reject) => {
      Axios.get(`${proxy}/logout/${id}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        resolve(error);
      });
    });
  }

  static getPos = () => {
    return new Promise(async (resolve, reject) => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);

      if (status !== 'granted') {
        resolve({error: 'Permission to access location was denied !'})
      } else {
        Location.Accuracy.BestForNavigation;
        const location = await Location.getCurrentPositionAsync({
          // accuracy: Location.Accuracy.BestForNavigation,
        });
        resolve(location.coords);
      }
    });
  }

  static getUsersInArea = () => {
    return new Promise(async (resolve, reject) => {
      const eToken = await SecureStore.getItemAsync('eToken');
      const distance = this.getDistance();
      const users = await GeolocationService.getAll();
      const me = users.filter((user) => user._id === eToken)[0];
      const inArea = [];
      
      if (distance !== 0) {
        for (let i = 0; i < users.length; i++) {
          const isIn = await Geolib.isPointWithinRadius({
            latitude: users[i].lat,
            longitude: users[i].lng,
          }, {
            latitude: me.lat,
            longitude: me.lng,
          }, distance);
          
          if (isIn && users[i]._id !== eToken) {
            users[i].checked = false;
            inArea.push(users[i]);
          }
        }
        resolve(inArea);
      } else {
        resolve(users);
      }
    });
  }
}

// Export
export default GeolocationService;