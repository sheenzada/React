import { Link } from "lucide-react";

export default function Navbar () {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex justify-around">
                <li><Link to="/" className="text-white">About</Link></li>
                <li><Link to="/projectss" className="text-white">Projects</Link></li>
                <li><Link to="/contact" className="text-white">Contact</Link></li>
            </ul>
        </nav>
    );
}