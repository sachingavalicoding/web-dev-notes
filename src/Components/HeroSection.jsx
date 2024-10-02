import Button from "./Button";
import video1 from "/video1.mp4"
import video2 from "/video2.mp4"
const HeroSection = () => {
  return (
    <main className="w-full min-h-screen pt-16 flex flex-col  ">
      <div className="container mx-auto px-8 py-8  mt-16 flex flex-col items-center ">
        <h1 className="text-5xl lg:text-7xl text-center font-regular tracking-wide">
          VirtualR build tools{" "}
          <span className="text-mainColor">
            for <br /> developers
          </span>
        </h1>
        <p className="text-slate-600 my-8 text-center w-full lg:w-1/2 mx-auto">
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your
          imagination into immersive reality!
        </p>
        <div className="flex gap-8 items-center flex-wrap justify-center ">
         <Button text={"Start for free "} classname={"border-transparent bg-mainColor"} />
          <Button text={" Documentation"} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 place-content-center w-full lg:px-16 md:px-14 sm:px-10 px-6 py-6 md:grid-cols-2  mt-16">
            <video className="border-mainColor border-2 " src={video1} autoPlay loop muted></video>
            <video className="border-mainColor border-2 " src={video2} autoPlay loop muted ></video>
      </div>
    </main>
  );
};

export default HeroSection;
