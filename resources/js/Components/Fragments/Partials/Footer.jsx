import ApplicationLogo from "@/Components/Elements/Logo/ApplicationLogo";

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
                        <div className="w-full px-28 py-6 text-white font-medium">
                            <div className="flex">
                                <div className="w-24 h-32 mr-4 mt-5">
                                    <img
                                        src="http://127.0.0.1:8000/img/tutwuri.png"
                                        alt="Description of the image"
                                    />
                                </div>
                                <div className="w-20 h-28 mr-4 mt-5">
                                    <ApplicationLogo />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">
                                        Dinas Pendidikan dan Kebudayaan
                                        Kabupaten Lahat
                                    </h3>
                                    <p>
                                        Pasar Lama, Kabupaten Lahat,
                                        <br />
                                        Sumatera Selatan 31412
                                    </p>
                                </div>
                                <div className="w-full px-16 mb-12">
                                    <h3 className="font-semibold text-xl text-white mb-5">
                                        Navigasi
                                    </h3>
                                    <ul className="text-white">
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
                                                Berita
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                className="inline-block text-base text-white"
                                            >
                                                Museum Budaya
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                className="inline-block text-base text-white"
                                            >
                                                Daftar Pegawai
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                className="inline-block text-base text-white"
                                            >
                                                Kontak
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-16 pt-10 border-t border-gray-500">
                        <div className="flex items-center justify-center">
                            <p className="text-white">
                                &copy; 2023 Dinas Pendidikan dan Kebudayaan
                                Kabupaten Lahat. All rights reserved.
                            </p>
                            <div className="ml-4">
                                <a
                                    href="/privacy-policy"
                                    className="text-white hover:text-gray-300 transition-colors duration-300"
                                >
                                    Privacy Policy
                                </a>
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
