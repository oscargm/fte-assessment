import { CONFIGURATIONS_URL } from './constants';
import { Configuration } from '../model';

export const getConfigurations = (): Promise<Configuration[]> => {
  return fetch(CONFIGURATIONS_URL)
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        return response.json();
      } else {
        throw new Error(`${response.status} : ${response.statusText}`);
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};
