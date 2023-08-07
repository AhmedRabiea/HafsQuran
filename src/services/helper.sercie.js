import api from "./api";

const getPositions = async () => {
  const positionsResult = await api.get("/helper/positions");

  return positionsResult.data.data.positions;
};

const getCountries = async () => {
  const result = await api.get("/helper/countries");

  return result.data.data.countries;
};

const helperService = {
  getPositions: getPositions,
  getCountries: getCountries,
};

export default helperService;
