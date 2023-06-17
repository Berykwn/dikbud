import Icon from "@/Components/Elements/Icon/Icon";
import { Link } from "@inertiajs/react";

const Header = ({ handleSidebarToggle, auth }) => {
    return (
        <section className="top-0 right-0 left-0 z-10 flex lg:justify-between px-4 py-2">
            <div className="flex-none">
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-square btn-ghost drawer-button lg:hidden"
                    onClick={handleSidebarToggle}
                >
                    <Icon name={"sidebar-icon"} />
                </label>
            </div>
            <div className="flex-1 flex-grow ml-auto px-3 lg:py-3 py-2">
                <span className="normal-case text-2xl font-bold font-[]">
                    Hallo! {auth.name}
                </span>
            </div>
            {/* <div className="flex-none px-2 py-3">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="cursor-pointer">
                        <h2 className="text-md mr-2 text-neutral-700">
                            
                        </h2>
                    </label>
                    <ul
                        tabIndex={0}
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-neutral-700"
                    >
                        <li>
                            <a href="#" method="post" as="button">
                                Profil Pengguna
                            </a>
                        </li>
                        <li>
                            <a href="#" method="post" as="button">
                                Dasboard
                            </a>
                        </li>
                        <li>
                            <Link
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div> */}
        </section>
    );
};

export default Header;
