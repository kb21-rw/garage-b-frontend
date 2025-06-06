import { fetchData } from "@/utils/api";
import { notFound } from "next/navigation";

export const getHomePage = async () => {
  try {
    return await fetchData("home-page");
  } catch (error) {
    console.error("Error fetching home page:", error);
    notFound();
  }
};

export default getHomePage;
