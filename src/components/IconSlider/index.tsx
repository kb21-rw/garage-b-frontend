"use client";

import { iconList } from "../../../public/image";
import Card from "./card";
import Marquee from "react-fast-marquee";

const IconSlider = () => {
  const list = [...Object.values(iconList)];
  return (
    <div className="flex flex-col gap-14 mt-16">
      <h1 className="text-2xl lg:text-3xl font-medium">Our Partners</h1>
      <div className="overflow-hidden w-full py-4">
        {list.length > 5 ? (
          <Marquee pauseOnHover loop={0}>
            {list.map((icon, idx) => (
              <Card key={idx} icon={icon} alt={`icon-${idx}`} />
            ))}
          </Marquee>
        ) : (
          <div className="flex justify-start flex-wrap gap-8">
            {list.map((icon, idx) => (
              <Card key={idx} icon={icon} alt={`icon-${idx}`} />
            ))}
          </div>
        )}
      </div>
      <hr className="w-1/3 md:w-1/6 lg:w-1/12 border-1 border-primary border-dashed" />
    </div>
  );
};

export default IconSlider;
