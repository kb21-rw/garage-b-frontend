import Homepage from "@/components/Hero";
import TextBlock from "@/components/TextBlock";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { iconCard, textblock } from "../../public/data/data";
import IconCard from "@/components/IconCard";
import IconSlider from "@/components/IconSlider";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Homepage />
      <div className="container">
        {textblock.map((el, index) => (
          <TextBlock key={el.title + index} {...el} />
        ))}
        <IconSlider />
        <IconCard {...iconCard} />
        <ScrollToTop />
      </div>
    </div>
  );
}
