import { Link } from "@inertiajs/react";
import ApplicationLogo from "../../Elements/Logo/ApplicationLogo";
import { useState } from "react";
import Icon from "@/Components/Elements/Icon/Icon";

const SidebarHeader = () => {
    return (
        <div className="flex mt-6 px-4 justify-center">
            <img
                src="http://127.0.0.1:8000/img/tutwuri.png"
                alt="Wonderfull Indonesia"
                className="h-14 object-cover mr-2 mt-3 lg:mt-2 md:mt-2"
            />
            <ApplicationLogo className="w-12 h-14 fill-current text-slate-50 mt-3 lg:mt-2 md:mt-2" />
            <Link className="link link-hover normal-case text-md ml-3 mt-3">
                Dikbud Kab. Lahat <br /> Bidang Kebudayaan
            </Link>
        </div>
    );
};

const Menu = ({ title, iconName, items, isOpen, toggleMenu, activePage }) => {
    const isActive = activePage === title;

    return (
        <li className="relative my-1">
            <button
                onClick={toggleMenu}
                className={`text-slate-600 py-4 px-4 block w-full text-left transition-all duration-300 transform hover:translate-x-1 tracking-wide ${
                    isActive
                        ? "bg-gray-100 text-slate-600  hover:bg-gray-200 border-l-8 border-dodger-blue tracking-wide"
                        : ""
                }`}
            >
                <span className="flex items-center">
                    <span
                        className={`mr-2 ${
                            isActive ? "" : "text-dodger-blue/60"
                        }`}
                    >
                        <Icon name={iconName} />
                    </span>
                    {title}
                </span>
                <span className="float-right">
                    <svg
                        className={`fill-current text-gray-400 w-4 h-4 -mt-5 transform ${
                            isOpen ? "rotate-180" : "rotate-0"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path fillRule="evenodd" d="M6 8l4 4 4-4H6z" />
                    </svg>
                </span>
            </button>
            {isOpen && (
                <ul className="transition-all duration-300 bg-gray-200/80">
                    {items.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={route(item.link)}
                                className="text-slate-600 py-2 px-4 block"
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

const Sidebar = ({ pages }) => {
    const [menuState, setMenuState] = useState({
        berita: false,
        settings: false,
    });

    const toggleMenu = (menuKey) => {
        setMenuState((prevState) => ({
            ...prevState,
            [menuKey]: !prevState[menuKey],
        }));
    };

    const menuData = [
        {
            key: "berita",
            title: "Berita",
            iconName: "berita",
            items: [
                { title: "Table Berita", link: "dashboard.berita" },
                { title: "Gallery Berita", link: "dashboard.galleryberita" },
            ],
        },
        {
            key: "budaya",
            title: "Museum Budaya",
            iconName: "museum",
            items: [
                { title: "Table Budaya", link: "dashboard.budaya" },
                { title: "Gallery Budaya", link: "dashboard.gallery.budaya" },
                { title: "Video Budaya", link: "dashboard.galleryberita" },
            ],
        },
    ];

    const baseClassName =
        "text-slate-600 px-4 py-4 flex items-center tracking-wide";
    const activeClassName =
        "bg-gray-100/80 hover:bg-gray-200 border-l-8 border-dodger-blue";
    const inactiveClassName =
        "relative transition-all duration-300 transform hover:translate-x-1";

    return (
        <div className="fixed inset-y-0 left-0 w-80 shadow-lg flex flex-col">
            <SidebarHeader />
            <nav className="md:w-full flex-grow py-3 mt-8">
                <ul className="md:flex md:flex-col">
                    <Link href={route("dashboard")}>
                        <li
                            className={`${baseClassName} ${
                                pages === "Dashboard"
                                    ? activeClassName
                                    : inactiveClassName
                            }`}
                        >
                            <span
                                className={`mr-2 -mt-1 ${
                                    pages === "Dashboard"
                                        ? ""
                                        : "text-dodger-blue/60"
                                }`}
                            >
                                <Icon name={"home"} />
                            </span>
                            Dashboard
                        </li>
                    </Link>
                    <Link href={route("dashboard.carousel")}>
                        <li
                            className={`${baseClassName} ${
                                pages === "Carousel"
                                    ? activeClassName
                                    : inactiveClassName
                            }`}
                        >
                            <span
                                className={`mr-2 -mt-1 ${
                                    pages === "Dashboard"
                                        ? ""
                                        : "text-dodger-blue/60"
                                }`}
                            >
                                <Icon name={"gallery"} />
                            </span>
                            Banner
                        </li>
                    </Link>
                    {/* Render menu items dynamically */}
                    {menuData.map((menu) => (
                        <Menu
                            key={menu.key}
                            title={menu.title}
                            iconName={menu.iconName}
                            items={menu.items}
                            isOpen={menuState[menu.key]}
                            toggleMenu={() => toggleMenu(menu.key)}
                            activePage={pages}
                        />
                    ))}
                    <li
                        className={`${baseClassName} ${
                            pages === "Events"
                                ? activeClassName
                                : inactiveClassName
                        }`}
                    >
                        <span
                            className={`mr-2 -mt-1 ${
                                pages === "Events" ? "" : "text-dodger-blue/60"
                            }`}
                        >
                            <Icon name={"events"} />
                        </span>
                        <Link href={route("dashboard.events")}>Events</Link>
                    </li>
                    <li
                        className={`${baseClassName} ${
                            pages === "Pegawai"
                                ? activeClassName
                                : inactiveClassName
                        }`}
                    >
                        <span
                            className={`mr-2 -mt-1 ${
                                pages === "Pegawai" ? "" : "text-dodger-blue/60"
                            }`}
                        >
                            <Icon name={"team"} />
                        </span>
                        <Link href={route("dashboard.pegawai")}>Pegawai</Link>
                    </li>
                    <li
                        className={`${baseClassName} ${
                            pages === "Profile"
                                ? activeClassName
                                : inactiveClassName
                        }`}
                    >
                        <span
                            className={`mr-2 -mt-1 ${
                                pages === "Profile" ? "" : "text-dodger-blue/60"
                            }`}
                        >
                            <Icon name={"auth"} />
                        </span>
                        <Link href={route("profile.edit")}>Profile</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex-grow" />
            <Link
                href={route("logout")}
                method="POST"
                className="flex items-center justify-center mt-4 mb-4 mx-4 px-2 py-2 bg-gray-200 hover:bg-slate-300 rounded-md tracking-wide"
            >
                <div className="mr-2">
                    <Icon name={"logout"} />
                </div>
                Logout
            </Link>
        </div>
    );
};

export default Sidebar;
