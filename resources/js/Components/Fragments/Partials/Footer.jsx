const Footer = ({ name }) => {
    switch (name) {
        case "adminpage":
            return (
                <footer className="footer footer-center p-4 bg-slate-200 text-base-content">
                    <p className="">
                        &copy; 2023 - Dinas Pendidikan dan Kebudayaan Kabupaten
                        Lahat
                    </p>
                </footer>
            );
        case "homepage":
            return (
                <footer className="bg-midnight-blue pt-24 pb-12">
                    <div className="container">
                        <div className="flex flex-wrap items-center justify-center">
                            <div className="w-full px-16 mb-12 text-white font-medium md:w-1/3">
                                <h3 className="text-2xl font-bold">
                                    Alamat Kantor
                                </h3>
                                <p className="mt-2">
                                    Dinas Pendidikan dan Kebudayaan Kabupaten
                                    Lahat
                                </p>
                                <p>Pasar Lama, Lahat, Kabupaten Lahat,</p>
                                <p>South Sumatra 31412</p>
                            </div>
                            <div className="w-full px-16 mb-12 md:w-1/3">
                                <h3 className="font-semibold text-xl text-white mb-5">
                                    Menu
                                </h3>
                                <ul className="text-white">
                                    <li>
                                        <a
                                            href="/"
                                            className="inline-block text-base text-white"
                                        >
                                            Berita
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="inline-block text-base text-white"
                                        >
                                            Event
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="inline-block text-base text-white"
                                        >
                                            Museum
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/"
                                            className="inline-block text-base text-white"
                                        >
                                            Kritik&Saran
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full px-16 pt-10 border-t border-gray-500">
                            <div className="flex items-center justify-center">
                                <p className="text-white">
                                    &copy; 2023 Dinas Pendidikan dan Kebudayaan
                                    Kabupaten Lahat. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            );
        default:
            return null;
    }
};

export default Footer;
