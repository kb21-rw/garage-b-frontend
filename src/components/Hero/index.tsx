import Image from "next/image";

const Homepage = () => {
  return (
    <>
      <div className="relative h-[40vh] w-full border-b-1dark:border-primary border-gray-900">
        <Image
          src="/image/hero.png"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white text-center px-4 w-full md:w-4/5 lg:w-1/2 xl:w-2/5">
            We build and co-create digital ventures
          </h1>
        </div>
      </div>
      <hr className="border-1 dark:border-primary border-gray-900 w-full" />
    </>
  );
};

export default Homepage;
