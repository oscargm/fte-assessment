export interface Patient {
  id: number;
  complete_name: string;
  email: string;
  gender: Gender;
  location: string;
  next_visit: string;
}

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  UNKNOWN = 'Unknown',
}

export enum NumberOfRecords {
  TEN = 10,
  FIVETEEN = 15,
  TWENTY_FIVE = 25,
  FIFTY = 50,
  HUNDRED = 100,
}
