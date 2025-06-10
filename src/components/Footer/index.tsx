import type { Footer } from "../../types/SiteConfig";
import RichText from "../ui/RichText";
import Media from "./Media";

const Footer = ({ email, copyright, socialmedia }: Footer) => {
  return (
    <div className="container flex flex-col justify-center items-center text-secondary">
      <div className="flex justify-start md:justify-center items-center gap-x-18 gap-y-11 py-18 flex-wrap">
        <h1 className="text-2xl lg:text-3xl font-semibold">Find us on :</h1>
        <div className="flex flex-col gap-11">
          <div className="flex gap-10 items-center justify-start">
            {socialmedia.map((el) => (
              <Media key={el.id} {...el} />
            ))}
          </div>
          {email && (
            <p className="text-lg font-extralight lg:text-2.1xl">
              Or reach out to{" "}
              <a
                href={`mailto:${email}`}
                target="_blank"
                className="hover:text-primary"
              >
                {email}
              </a>
            </p>
          )}
        </div>
      </div>

      <hr className="border-1 border-primary w-full" />
      {copyright && (
        <div className="py-4 text-lg font-extralight">
          <RichText content={copyright} />
        </div>
      )}
    </div>
  );
};

export default Footer;
