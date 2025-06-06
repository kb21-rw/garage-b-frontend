import { fetchData } from "@/utils/api";
import { notFound } from "next/navigation";

export const getSiteConfig = async () => {
  try {
    return await fetchData("site-config");
  } catch (error) {
    console.error("Error fetching site config:", error);
    return notFound();
  }
};

export default getSiteConfig;
