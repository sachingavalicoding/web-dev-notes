import { FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

import Card from "../Components/Card";
const Home = () => {
  return (
    <div className="container  flex min-h-screen mx-auto">
    <main className=" mt-20 max-w-96 mx-auto flex items-center flex-wrap gap-10 justify-center h-max px-6 py-8">
     <Card content = {<FaHtml5/> } link = "/html"  />
     <Card content = {<FaCss3Alt/> } link= "/css" />
     <Card content = {<FaJava/> } link="/java" />
     <Card content = {<FaReact/> } link="/react" />
    </main>
    </div>
  )
}

export default Home