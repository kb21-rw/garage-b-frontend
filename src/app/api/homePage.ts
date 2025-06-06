import { fetchData } from "@/utils/api";

export const getHomePage = async () => {
  return await fetchData("home-page");
};

export default getHomePage;
