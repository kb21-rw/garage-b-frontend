import Hero from "@/components/Hero";
import IconCard from "@/components/IconCardBlock";
import IconSlider from "@/components/ImageSliderBlock";
import TextBlock from "@/components/TextBlock";
import { Block } from "@/types/HomePage";

const ComponentParser = ({ blocks }: { blocks: Block[] }) => {
  return (
    <>
      {blocks?.map((item: Block & { id?: number }, index: number) => {
        const key = `${item.id + item.__component}-${index}`;
        switch (item.__component) {
          case "blocks.hero-section":
            return <Hero key={key} {...item} />;
          case "blocks.text-block-section":
            return <TextBlock key={key} {...item} />;
          case "blocks.image-slider-section":
            return <IconSlider key={key} {...item} />;
          case "blocks.icon-card-block":
            return <IconCard key={key} {...item} />;

          default:
            return null;
        }
      })}
    </>
  );
};

export default ComponentParser;
