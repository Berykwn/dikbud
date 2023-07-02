import Icon from "@/Components/Elements/Icon/Icon";
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
                    <div className="container mx-auto pb-8 px-4 lg:px-10 gap-6 flex flex-col lg:flex-row lg:justify-center">
                        <div className="lg:w-1/3">
                            <div className="flex items-start">
                                <div className="w-28 h-28 mr-4 mt-3">
                                    <img
                                        src="http://127.0.0.1:8000/img/tutwuri.png"
                                        alt="Description of the image"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="w-20 h-28 mr-4 mt-4">
                                    <ApplicationLogo />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">
                                        Dinas Pendidikan dan Kebudayaan
                                        Kabupaten Lahat
                                    </h3>
                                    <p className="text-slate-300">
                                        Pasar Lama, Kabupaten Lahat,
                                        <br />
                                        Sumatera Selatan 31412
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h3 className="font-semibold text-xl text-white mb-3 lg:mb-5">
                                Navigasi
                            </h3>
                            <ul className="text-slate-300">
                                <li>
                                    <a
                                        href="/"
                                        className="inline-block text-base text-slate-300 hover:text-white"
                                    >
                                        Event
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="inline-block text-base text-slate-300 hover:text-white"
                                    >
                                        Berita
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="inline-block text-base text-slate-300 hover:text-white"
                                    >
                                        Museum Budaya
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="inline-block text-base text-slate-300 hover:text-white"
                                    >
                                        Daftar Pegawai
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="inline-block text-base text-slate-300 hover:text-white"
                                    >
                                        Kontak
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="text-lg font-bold text-white">Hubungi Kami:</h3>
                            <Icon name="kontak" />
                        </div>
                    </div>
                    <div className="w-full px-4 lg:px-10 pt-10 border-t border-gray-500">
                        <div className="flex items-center justify-center">
                            <p className="text-white">
                                &copy; 2023 Dinas Pendidikan dan Kebudayaan
                                Kabupaten Lahat. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            );
        default:
            return null;
    }
};

export default Footer;
