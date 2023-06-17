import { Link } from "@inertiajs/react";
import Icon from "../../Elements/Icon/Icon";
import ApplicationLogo from "@/Components/Elements/Logo/ApplicationLogo";

const NavbarLogo = () => {
    return (
        <div className="inline-flex mt-2 ml-2">
            <img
                src="http://127.0.0.1:8000/img/wonderful.png"
                alt="Description of the image"
                className="h-14 object-cover"
            />
            <ApplicationLogo className="w-8 h-10 fill-current text-slate-50 mt-3 lg:mt-2 md:mt-2" />
            <Link className="link link-hover normal-case text-slate-700 text-lg ml-3 font-[Gabriola]">
                Kebudayaan <br /> Kabupaten Lahat
            </Link>
        </div>
    );
};

const NavbarDropdownMenu = ({ pages }) => {
    return (
        <div className="dropdown">
            <label
                tabIndex={0}
                className="btn btn-ghost lg:hidden text-slate-500"
            >
                <Icon name={"menu"} />
            </label>
            <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li>
                    <Link
                        href={route("home")}
                        className={pages === "Home" ? "text-slate-500" : ""}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href={route("event")}
                        className={pages === "Event" ? "text-slate-500" : ""}
                    >
                        Event
                    </Link>
                </li>
                <li>
                    <Link
                        href={route("berita")}
                        className={
                            pages === "Berita" && pages === "Detail Berita"
                                ? "text-slate-500"
                                : ""
                        }
                    >
                        Berita
                    </Link>
                </li>
                <li>
                    <Link
                        href={route("budaya")}
                        className={pages === "Museum" ? "text-slate-500" : ""}
                    >
                        Museum
                    </Link>
                </li>
                <li>
                    <a href="#kritikdansaran">Kritik & Saran</a>
                </li>
            </ul>
        </div>
    );
};

const NavbarMenu = ({ pages }) => {
    return (
        <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-slate-50">
                <li
                    className={`text-slate-700 ${
                        pages === "Home"
                            ? "border-b-4 border-deep-teal hover:border-0"
                            : ""
                    }`}
                >
                    <Link href="/">Home</Link>
                </li>
                <li
                    className={`text-slate-700 ${
                        pages === "Event"
                            ? "border-b-4 border-deep-teal hover:border-0"
                            : ""
                    }`}
                >
                    <Link href={route("event")}>Event</Link>
                </li>
                <li
                    className={`text-slate-700 ${
                        pages === "Berita"
                            ? "border-b-4 border-deep-teal hover:border-0"
                            : ""
                    }`}
                >
                    <Link href={route("berita")}>Berita</Link>
                </li>
                <li 
                    className={`text-slate-700 ${
                        pages === "Museum"
                            ? "border-b-4 border-deep-teal hover:border-0"
                            : ""
                    }`}
                >
                    <Link href={route("budaya")}>Museum Budaya</Link>
                </li>
                <li>
                    <a className="text-slate-700" href="/#kritikdansaran">
                        Struktur Oraganisasi
                    </a>
                </li>
                <li>
                    <a className="text-slate-700" href="/#kritikdansaran">
                        Kontak
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default function Navbar({ pages }) {
    return (
        <div className="sticky top-0 z-10">
            <div className="navbar bottom-8 bg-off-white-gray">
                <div className="navbar-start">
                    <NavbarDropdownMenu pages={pages} />
                    <NavbarLogo />
                </div>
                <NavbarMenu pages={pages} />
            </div>
        </div>
    );
}
