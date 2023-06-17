import Icon from "@/Components/Elements/Icon/Icon";
import { Link } from "@inertiajs/react";

export default function ({ menuName, activePage }) {
    switch (menuName) {
        case "dashboard":
            return (
                <>
                    <div className="flex px-6 pt-8">
                        <span>
                            <Icon name={"dashboard"} />
                        </span>
                        <h6 className="md:min-w-full text-slate-600 text-sm  font-bold block pt-1 pb-4 ml-2 no-underline">
                            Dashboard
                        </h6>
                    </div>
                    <ul className="menu text-base-content">
                        {/* <hr className="border-t-1 border-gray-300" /> */}
                        <li>
                            <Link
                                href={route("dashboard")}
                                className={
                                    activePage == "Dashboard"
                                        ? "text-white bg-deep-teal hover:bg-bluish-gray/80 px-6 py-2"
                                        : "px-6 py-2 text-black"
                                }
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <a className="px-6 py-2 block" href="#">
                                Berita
                            </a>
                        </li>
                        <li>
                            <Link
                                href={route("dashboard.events")}
                                className={
                                    activePage == "Events"
                                        ? "text-white bg-deep-teal hover:bg-steel-blue/80 px-6 py-2"
                                        : "px-6 py-2"
                                }
                            >
                                Events
                            </Link>
                        </li>
                        <li>
                            <a className="px-6 py-2 block" href="#">
                                Museum
                            </a>
                        </li>
                    </ul>
                </>
            );
        case "gallery":
            return (
                <>
                    <div className=" flex px-6 pt-4">
                        <span>
                            <Icon name={"gallery"} />
                        </span>
                        <h6 className="md:min-w-full text-slate-600 text-sm font-bold block pt-1 pb-4 ml-2 no-underline">
                            Gallery
                        </h6>
                    </div>
                    <ul className="menu px-4  text-base-content">
                        <hr className="border-t-1 border-gray-300 mb-1" />
                        <li>
                            <a className="px-4 py-2 block" href="#">
                                Gallery Museum
                            </a>
                        </li>
                        <li>
                            <a className="px-4 py-2 block" href="#">
                                Gallery Berita
                            </a>
                        </li>
                    </ul>
                </>
            );
        case "auth":
            return (
                <>
                    <div className="flex px-6 pt-6">
                        <span>
                            <Icon name={"auth"} />
                        </span>
                        <h6 className="md:min-w-full text-slate-600 text-sm font-bold block pt-1 pb-4 ml-2 no-underline">
                            Authentication
                        </h6>
                    </div>
                    <ul className="menu px-4 pt-0  text-base-content">
                        <hr className="border-t-1 border-gray-300 mb-1" />
                        <li>
                            <Link
                                href={route("profile.edit")}
                                className={
                                    activePage == "Profile"
                                        ? "text-white bg-steel-blue hover:bg-steel-blue/80 px-4 py-2"
                                        : "px-4 py-2"
                                }
                            >
                                Edit Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="px-4 py-2 "
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log out
                            </Link>
                        </li>
                    </ul>
                </>
            );
        default:
            return null;
    }
}
