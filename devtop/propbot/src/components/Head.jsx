import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaHome } from "react-icons/fa";
import logo from "../assets/logo-h.png"

export default function Head() {

    return (
        <header className="w-full flex items-center justify-between px-4 md:px-8 py-3 shadow-sm">

            <Link
                to="/home"
                className="flex items-center gap-2 border border-blue-400 text-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-50 transition"
            >
                <FaArrowLeft /> Back to Homepage
            </Link>

            <div className="flex items-center gap-2 text-lg font-semibold">
              <img src={logo} alt="" className="h-5 w-5"/>
                <span>PropBot</span>
            </div>

            <Link
                to="/about"
                className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-800 transition"
            >
                About Us <FaArrowRight />
            </Link>
        </header>
    );
}
