import Homepage from "@/components/Hero";
import TextBlock from "@/components/TextBlock";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { iconCard, textblock } from "../../public/data/data";
import IconCard from "@/components/IconCard";
import IconSlider from "@/components/IconSlider";
import { notFound } from "next/navigation";
import getHomePage from "./api/homePage";

export default async function Home() {
  try {
    const homepage = await getHomePage();
    if (!homepage || homepage.length === 0) {
      return notFound();
    }
    return (
      <div className="min-h-screen container relative">
        <Homepage />
        {textblock.map((el, index) => (
          <TextBlock key={el.title + index} {...el} />
        ))}
        <IconSlider />
        <IconCard {...iconCard} />
        <ScrollToTop />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    notFound();
  }
}
