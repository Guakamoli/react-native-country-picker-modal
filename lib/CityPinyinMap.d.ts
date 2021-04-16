import { Country } from './types';
declare const CityMap: Map<string, string>;
declare const getCityPinyin: (country: Country) => string;
export { getCityPinyin };
export default CityMap;
