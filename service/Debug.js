import * as SecureStore from 'expo-secure-store';

// Local import
import GeolocationService from './GeolocationService';

const getRandomPos = () => {
  const minusLat = Math.random();
  const minusLng = Math.random();
  let randLat = Math.random() * 180;
  let randLng = Math.random() * 180;

  if (randLat < 0.5) minusLat = minusLat * -1;
  if (randLng < 0.5) minusLng = minusLng * -1;

  return {
    lat: randLat,
    lng: randLng,
  }
}

const getRandomPhoneNum = () => {
  let phoneNumber = "+336"
  const change = Math.random();

  if (change < 0.5) phoneNumber = "+337";

  while (phoneNumber.length < 12) {
    phoneNumber += Math.floor(Math.random() * 10);
  }

  return phoneNumber;
}

export const randomiseUser = async () => {
  const users = await GeolocationService.getAll();

  for (let i = 0; i < users.length; i++) {
    const  {lat, lng} = getRandomPos();

    await GeolocationService.update({
      id: users[i]._id,
      lat,
      lng,
    });
  }

  console.log('====================================');
  console.log('Randomize done');
  console.log('====================================');
}

export const generateUser = async (quantity) => {
  const usersBefore = await GeolocationService.getAll();

  for (let i = 0; i < quantity; i++) {
    const  {lat, lng} = getRandomPos();
    const phoneNumber = getRandomPhoneNum();
    
    await GeolocationService.login({
      phoneNumber,
      lat,
      lng,
    });
  }

  const usersAfter = await GeolocationService.getAll();

  console.log('====================================');
  console.log(`${usersAfter.length - usersBefore.length} users created`);
  console.log(`${usersAfter.length} in total`);
  console.log('====================================');
}

export const clearUser = async () => {
  const users = await GeolocationService.getAll();

  for (let i = 0; i < users.length; i++) {
    const eToken = await SecureStore.getItemAsync('eToken');

    if (users._id !== eToken)
      GeolocationService.logout(users[i]._id);
  }
}