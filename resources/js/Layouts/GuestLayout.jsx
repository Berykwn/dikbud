import ApplicationLogo from "@/Components/Elements/Logo/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-off-white-gray">
            <div className="inline-flex mt-2 mr-6">
                <img
                    src="http://127.0.0.1:8000/img/wonderful.png"
                    alt="Description of the image"
                    className="h-16 object-cover"
                />
                <Link href="/">
                    <ApplicationLogo className="w-18 h-16 fill-current text-gray-500" />
                </Link>
            </div>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
