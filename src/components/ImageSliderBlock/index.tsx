"use client";

import { ImageSliderSectionBlock } from "@/types/HomePage";
import Card from "./card";
import Marquee from "react-fast-marquee";
import RichText from "../ui/RichText";

interface ResponsiveSliderProps {
  images: ImageSliderSectionBlock["images"];
  threshold: number;
}

const ResponsiveSlider: React.FC<ResponsiveSliderProps> = ({
  images,
  threshold,
}) => {
  const shouldMarquee = images.length > threshold;

  return (
    <>
      {shouldMarquee ? (
        <Marquee pauseOnHover loop={0}>
          {images.map((icon, idx) => (
            <Card key={idx} {...icon} />
          ))}
        </Marquee>
      ) : (
        <div className="flex justify-start flex-wrap gap-8">
          {images.map((icon, idx) => (
            <Card key={idx} {...icon} />
          ))}
        </div>
      )}
    </>
  );
};

const ImageSlider = ({ header, images }: ImageSliderSectionBlock) => {
  return (
    <div className="flex flex-col gap-14 mt-16">
      <h1 className="text-2xl lg:text-3xl font-medium">{header.title}</h1>
      {header.description && (
        <div className="text-lg lg:text-2.1xl text-secondary font-extralight leading-7.5 tracking-1.5">
          <RichText content={header.description} />
        </div>
      )}
      <div className="overflow-hidden w-full py-4">
        <div className="block md:hidden">
          <ResponsiveSlider images={images} threshold={1} />
        </div>

        <div className="hidden md:block lg:hidden">
          <ResponsiveSlider images={images} threshold={3} />
        </div>

        <div className="hidden lg:block">
          <ResponsiveSlider images={images} threshold={5} />
        </div>
      </div>
      <hr className="w-1/3 md:w-1/6 lg:w-1/12 border-1 border-primary border-dashed" />
    </div>
  );
};

export default ImageSlider;
