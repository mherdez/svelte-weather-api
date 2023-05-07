
import { getWeather } from './getWeather'
import { writable } from 'svelte/store';

const createCity = () => {

  const {subscribe, set, update } = writable({})


  return {
    subscribe,
    setCity: async (city) => {
      set(await getWeather(city))
    },
  }
}

export const city = createCity();