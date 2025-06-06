import ScrollToTop from "@/components/ui/ScrollToTop";
import { notFound } from "next/navigation";
import getHomePage from "./api/homePage";
import ComponentParser from "./cms/componentParser";
import { HomepageData } from "@/types/HomePage";

export default async function Home() {
  try {
    const { data: homepage }: { data: HomepageData } = await getHomePage();
    if (!homepage) {
      return notFound();
    }
    return (
      <div className="min-h-screen container relative">
        <ComponentParser blocks={homepage.blocks} />
        <ScrollToTop />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    notFound();
  }
}
