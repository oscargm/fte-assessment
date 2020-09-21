import { PATIENTS_URL } from './constants';
import { NumberOfRecords } from '../model';
import { Patient } from './model';

export const getPatients = (
  recordsToShow: NumberOfRecords
): Promise<Patient[]> => {
  return fetch(`${PATIENTS_URL}?_limit=${recordsToShow}`)
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
