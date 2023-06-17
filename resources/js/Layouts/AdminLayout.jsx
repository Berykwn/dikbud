import { Fragment, useState } from "react";
import { Head } from "@inertiajs/react";
import Sidebar from "@/Components/Fragments/Partials/Sidebar";
import Heading from "@/Components/Fragments/Partials/Header";
import SuccessAlert from "@/Components/Elements/Alert/SuccessAlert";
import Footer from "@/Components/Fragments/Partials/Footer";

const AdminLayout = (props) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Fragment>
            <Head title={props.title} />
            <div className="flex flex-col min-h-screen">
                <div className="flex flex-grow">
                    <div
                        className={`w-80 flex-shrink-0 ${
                            isSidebarOpen ? "block" : "hidden"
                        } lg:block`}
                    >
                        <Sidebar pages={props.pages} />
                    </div>
                    <div className="flex flex-col w-full bg-slate-50">
                        <Heading
                            handleSidebarToggle={handleSidebarToggle}
                            auth={props.auth}
                            title={props.title}
                            pages={props.pages}
                        />
                        {props.message ? (
                            <div className="flex flex-wrap px-8 py-2 lg:w-2/3 md:w-2/3">
                                <SuccessAlert
                                    message={props.message}
                                    variant={" rounded-md"} 
                                />
                            </div>
                        ) : (
                            <></>
                        )}
                        <div className="flex-grow flex flex-col">
                            <main className="flex-grow">{props.children}</main>
                            <Footer name={"adminpage"} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default AdminLayout;
