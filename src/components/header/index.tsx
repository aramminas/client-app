import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex gap-x-3 bg-gray-200 px-2 py-1">
      <span className="text-2xl text-blue-700">My App</span>
      <nav className="flex justify-center items-center w-3/4">
        <ul className="flex gap-x-2">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
    </header>
  );
};
