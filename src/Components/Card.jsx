import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const Card = ({content , link}) => {
  return (
   <Link to={link}>
    <article className="border-2 bg-red-600 rounded-2xl p-10 text-2xl text-white">
     {content}
    </article>
   </Link>
  )
}

export default Card