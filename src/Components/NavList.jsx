import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <nav className="w-96 mx-auto border-2 px-8 py-3 h-max mt-10 flex items-center justify-between">
      <Link to={"/topics"}> Topics </Link>
      <Link to={"/programs"}> Programs</Link>
      <Link to={"/assignments"}> Assignments </Link>
    </nav>
  );
};

export default NavList;
