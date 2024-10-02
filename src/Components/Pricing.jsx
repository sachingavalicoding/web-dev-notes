import { pricingOptions } from "../data/data";
import { FaRegCircleCheck } from "react-icons/fa6";
import Button from "./Button";
const Pricing = () => {
  return (
    <section className="mt-8 py-8 w-full ">
      <h2 className="text-6xl text-center mt-8 tracking-wider "> Pricing </h2>
      <ul className=" max-w-[1080px] gap-8 mt-10 mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {
            pricingOptions.map((ele , index) => {
                return <li key={index} className="flex border-[1px] border-slate-600 flex-col gap-10 px-4 py-4 ">
                    <h2 className="text-3xl text-slate-100"> {ele.title} </h2>
                    <p className="text-5xl text-slate-300">{ele.price} </p>
                    <ul className="flex flex-col gap-6 mt-4 px-4">
                        {
                            ele.features.map((ele , index ) => (
                                <li className="flex items-center gap-4" key={index}> <FaRegCircleCheck  className="text-slate-50  "/> {ele} </li>
                            ))
                        }
                    </ul>

                    <Button  text = { " Subscribe "} classname={"bg-mainColor"}/>
                </li>
            })
        }
      </ul>
    </section>
  );
};

export default Pricing;
