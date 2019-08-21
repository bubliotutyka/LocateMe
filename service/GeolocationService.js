import Axios from 'axios';

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
}

// Export
export default GeolocationService;