import { fetchData } from "@/utils/api";

export const getSiteConfig = async () => {
  try {
    return await fetchData("site-config");
  } catch (error) {
    console.error("Error fetching site config:", error);
    throw error;
  }
};

export default getSiteConfig;
