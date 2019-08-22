import Axios from 'axios';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

// Local Import
import proxy from './proxy';

// Class
class GeolocationService {
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

  static all = () => {
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
        this.setState({
          errorMessage: 'Permission to access location was denied',
        });
      }
      Location.Accuracy.BestForNavigation;
      const location = await Location.getCurrentPositionAsync({});
      resolve(location.coords);
    });
  }
}

// Export
export default GeolocationService;