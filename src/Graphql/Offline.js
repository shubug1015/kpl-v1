import { GET_LAPTOPS } from "./Queries";

export const saveLaptops = cache => {
  const { laptops } = cache.readQuery({ query: GET_LAPTOPS });
  const jsonLaptops = JSON.stringify(laptops);
  try {
    localStorage.setItem("laptops", jsonLaptops);
  } catch (error) {
    console.log(error);
  }
};

export const restoreLaptops = () => {
  const laptops = localStorage.getItem("laptops");
  if (laptops) {
    try {
      const parsedLaptops = JSON.parse(laptops);
      return parsedLaptops;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  return [];
};
