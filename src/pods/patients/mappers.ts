import { Patient as ApiPatient } from './api';
import { Patient as VMPatient, Gender } from './model';

export const mapPatientsToDomain = (input: ApiPatient[]): VMPatient[] =>
  input.map((patient) => ({
    id: patient.id,
    complete_name: `${patient.first_name} ${patient.last_name}`,
    email: patient.email,
    gender: getPatientGender(patient.gender),
    location: `${patient.city} ${patient.country}`,
    next_visit: new Date(patient.next_visit).toLocaleString(),
  }));

const getPatientGender = (input: string): Gender => {
  switch (input) {
    case Gender.MALE:
      return Gender.MALE;
    case Gender.FEMALE:
      return Gender.FEMALE;
    default:
      return Gender.UNKNOWN;
  }
};
