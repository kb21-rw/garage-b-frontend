import { fetchData } from "@/utils/api";

export const getSiteConfig = async () => {
  return await fetchData("site-config");
};

export default getSiteConfig;
