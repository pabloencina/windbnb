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
  return  locations;
}

export function getStaysByLocation(location) {}
