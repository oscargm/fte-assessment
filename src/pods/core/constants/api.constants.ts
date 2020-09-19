const BASE_URL =
  process.env.BASE_URL ?? Boolean(process.env.NODE_ENV === 'development')
    ? 'http://localhost:3000'
    : 'http://localhost:4000';

export const CONFIGURATIONS_URL =
  process.env.CONFIGURATIONS_URL ?? `${BASE_URL}/configurations`;
