import { dataArray } from "./data";

export function getAllStays() {
  return dataArray;
}

export function getAllLocations() {
  const locations = [];
  dataArray.forEach((element) => {
    if (!locations.find((elem) => elem.city === element.city)) {
      locations.push({
        city: element.city,
        country: element.country,
      });
    }
  });
  return locations;
}

/**
 * Devuelve un array de Stays filtrados por ubicación.
 * @param {{city: string, country: string}} location la ubicación a filtrar.
 * @returns {Array<{
 * id: string,
 * city: string,
 * country: string,
 * superHost: boolean,
 * title: string,
 * rating: float,
 * maxGuests: integer,
 * type: string,
 * beds: integer,
 * photo: string}>} el array de Stays filtrado.
 */
export function getStaysByLocation(location) {
  const staysByLocation = dataArray.filter((stay) => stay.city === location.city);
  return staysByLocation
}
