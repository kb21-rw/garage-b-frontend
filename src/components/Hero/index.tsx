import Image from "next/image";

const Homepage = () => {
  return (
    <div className="relative h-[40vh] w-full border-b-2 border-primary">
      <Image
        src="/image/hero.png"
        alt="Hero"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-normal text-white text-center px-4 w-full md:w-4/5 lg:w-2/5">
          We build and co-create digital ventures
        </h1>
      </div>
    </div>
  );
};

export default Homepage;
