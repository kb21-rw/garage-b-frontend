import Image from "next/image";
import { footer } from "../../../public/data/data";

const Footer = () => {
  return (
    <div className="container flex flex-col justify-center items-center text-secondary">
      <div className="flex justify-start md:justify-center items-center gap-x-18 gap-y-11 py-18 flex-wrap">
        <h1 className="text-2xl lg:text-3xl font-semibold">Find us on :</h1>
        <div className="flex flex-col gap-11">
          <div className="flex gap-10 items-center justify-start">
            {footer.map((el) => {
              return (
                <Image
                  key={el.id}
                  src={el.logo}
                  alt={el.logo + "image"}
                  width={40}
                  height={40}
                  objectFit="contain"
                  className="cursor-pointer"
                />
              );
            })}
          </div>
          <p className="text-lg font-extralight lg:text-2.1xl">
            Or reach out to{" "}
            <a
              href="mailto:contact@the-gym.rw"
              target="_blank"
              className="hover:text-primary"
            >
              contact@the-gym.rw
            </a>
          </p>
        </div>
      </div>

      <hr className="border-1 border-primary w-full" />
      <p className="py-4 text-lg font-extralight">
        <span>&copy;</span> 2025 <strong className="font-bold">The Gym,</strong>{" "}
        All rights reserved!
      </p>
    </div>
  );
};

export default Footer;
