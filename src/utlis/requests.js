import { baseUrl } from '../services/api';

export const getPlants = async (requestValues) => {
  const { sun, water, pet } = requestValues;

  const url = `${baseUrl}?sun=${sun}&water=${water}&pets=${pet}`;

  try {
    const response = await fetch(url);
    const data = await Promise.resolve(response.json());

    console.log('data: ', data);

    if (Array.isArray(data)) {
      dispatchEvent(new CustomEvent('new_plants_list', {
        detail: data,
      }));
    } else {
      throw new Error(data.error);
    }

  } catch (error) {
    dispatchEvent(new CustomEvent('new_plants_list', {
      detail: [],
    }));
    console.log('request_error: ', error);
  }
};