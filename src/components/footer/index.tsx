import Image from "next/image";

const Footer = () => {
  return (
    <div className="container flex flex-col justify-center items-center text-secondary">
      <hr className="border-1 border-primary w-full" />
      <div className="flex justify-center items-center gap-18 py-18">
        <h1 className="text-2xl font-bold">Find us on :</h1>
        <div className="flex flex-col gap-11">
          <div className="flex gap-4">
            {[1, 2, 3, 4, 5].map((el) => {
              return (
                <Image
                  key={el}
                  src="image/menu.svg"
                  alt="image"
                  width={40}
                  height={40}
                  className="cursor-pointer"
                />
              );
            })}
          </div>
          <p className="text-2xl">
            Or reach out to
            <a
              href="contact@the-gym.rw"
              target="_blank"
              className="hover:text-primary"
            >
              contact@the-gym.rw
            </a>
          </p>
        </div>
      </div>

      <hr className="border-1 border-primary w-full" />
      <p className="py-4">
        <span>&copy;</span> 2025 <strong>TheGym,</strong> All rights reserved!
      </p>
    </div>
  );
};

export default Footer;
