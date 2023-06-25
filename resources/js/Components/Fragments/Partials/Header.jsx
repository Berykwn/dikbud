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
        </section>
    );
};

export default Header;
