import { checklistItems } from "../data/data";
import { FaRegCircleCheck } from "react-icons/fa6";
import codeimg from "/code.jpg"
const About = () => {
  return (
    <section className="w-full py-8 mt-10">
      <h2 className="text-6xl text-center mt-8 tracking-wider ">
        {" "}
        Accelerate your{" "}
        <span className="text-mainColor "> coding workflow.</span>
      </h2>
      <div className="xl:w-[1080px] container grid grid-cols-1 lg:grid-cols-2 place-items-center mt-14 py-8 mx-auto  ">
        <img src={codeimg} alt="" />
        <ul className="flex flex-col px-4 gap-4">
            {
              checklistItems.map((ele, index ) => (
                <li key={index}> 
                 <div className="flex items-center gap-8 py-4">
                    <FaRegCircleCheck className="text-green-500 text-2xl " />
                    <p className="text-xl" > {ele.title} </p>
                 </div>
                 <p className="ml-14 text-gray-400">{ele.description} </p>
                 </li>
              ) )
            }
        </ul>
      </div>
    </section>
  );
};

export default About;
