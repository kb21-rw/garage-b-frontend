import Homepage from "@/components/Hero";
import TextBlock from "@/components/TextBlock";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { iconCard, textblock } from "../../public/data/data";
import IconCard from "@/components/IconCard";

export default function Home() {
  return (
    <div className="min-h-screen container relative">
      <Homepage />
      {textblock.map((el, index) => (
        <TextBlock key={el.title + index} {...el} />
      ))}
      <IconCard {...iconCard} />
      <ScrollToTop />
    </div>
  );
}
