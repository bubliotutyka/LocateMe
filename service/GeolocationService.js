import Axios from 'axios';
// import * as Location from 'expo-location';
// import * as Permissions from 'expo-permissions';

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
    // return new Promise((resolve, reject) => {
    //   navigator.geolocation.getCurrentPosition(async (pos) => {
    //     const {latitude, longitude} = pos.coords;
    //     resolve({
    //       lat: latitude,
    //       lng: longitude,
    //     })
    //   }, (error) => {
    //     resolve(error);
    //   }, {
    //     enableHighAccuracy: false,
    //     timeout: 5000,
    //     maximumAge: 0
    //   });
    // });

    return new Promise((resolve, reject) => {
      resolve('test')
    });
  }
}

// Export
export default GeolocationService;