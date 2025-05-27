"use client";

import { iconList } from "../../../public/image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const IconSlider = () => {
  const list = [...Object.values(iconList)];
  const iconContent = list.map((icon, idx) => (
    <div
      key={idx}
      className="relative p-6 mx-6 h-32 w-48 border-2 border-primary"
    >
      <Image
        src={icon}
        alt={`icon-${idx}`}
        fill
        className="object-contain"
        loading="eager"
      />
    </div>
  ));
  return (
    <div className="flex flex-col gap-14 mt-16">
      <h1 className="text-2xl lg:text-3xl font-medium">Parteners</h1>
      <div className="overflow-hidden w-full py-4">
        {list.length > 5 ? (
          <Marquee pauseOnHover loop={0}>
            {iconContent}
          </Marquee>
        ) : (
          <div className="flex justify-start flex-wrap gap-8">
            {iconContent}
          </div>
        )}
      </div>
      <hr className="w-1/3 md:w-1/6 lg:w-1/12 border-1 border-primary border-dashed" />
    </div>
  );
};

export default IconSlider;
