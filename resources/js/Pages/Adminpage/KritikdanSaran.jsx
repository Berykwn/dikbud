import Heading from '@/Components/Fragments/Partials/Header';
import Sidebar from '@/Components/Fragments/Partials/Sidebar';
import { useState } from 'react';
import { Head } from "@inertiajs/react"


const KritikdanSaran = (props) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen">
            <Head title={props.title} />
            <div className={`w-72 flex-shrink-0 ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
                <Sidebar pages={props.pages}/>
            </div>
            <div className="flex flex-col w-full">
                <Heading handleSidebarToggle={handleSidebarToggle} auth={props.auth.user} title={props.title} pages={props.pages} />
                <div className="flex flex-wrap bg-blue-400 px-4 pt-8 pb-6">
                </div>
                <div className="flex-grow bg-gray-100 px-8 pt-4 pb-16">
                    
                </div>

                <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                    <div>
                        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default KritikdanSaran;
