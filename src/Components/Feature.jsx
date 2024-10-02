import { features } from "../data/data"
const Feature = () => {
  return (
    <section className="w-full mt-16  py-14">
        <h4 className="text-xl text-mainColor  text-center "> FEATURE </h4>
        <h2 className="text-5xl text-center mt-8 tracking-wider "> Easily build <span className="text-mainColor "> your code </span></h2>
          <div  className=" xl:w-[1080px] w-full xl:px-0 px-8 mx-auto grid grid-cols-1  place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center mt-10 ">
            {
               features.map((ele , index) => (
                <article key={index}>
                        <div className="flex items-center justify-start gap-4 py-4 ">
                            {ele.icon}
                            <p className="text-xl "> {ele.text} </p>
                        </div>
                        <p className="px-4 py-1 text-gray-500">{ele.description} </p>
                </article>
               ))
            }
          </div>
    </section>
  )
}

export default Feature