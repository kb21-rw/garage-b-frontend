import ScrollToTop from "@/components/ui/ScrollToTop";
import getHomePage from "./api/homePage";
import ComponentParser from "./cms/componentParser";
import { HomepageData } from "@/types/HomePage";
import SiteLoadError from "@/error/SiteLoadError";
import NoHomepageData from "@/components/ui/NoHomepageData";

export default async function Home() {
  try {
    const { data: homepage }: { data: HomepageData } = await getHomePage();

    if (!homepage || homepage.blocks.length === 0) {
      return <NoHomepageData />;
    }
    return (
      <div className="min-h-screen container relative">
        <ComponentParser blocks={homepage.blocks} />
        <ScrollToTop />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <SiteLoadError />;
  }
}
