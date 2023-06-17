import { Link } from "@inertiajs/react";
import { useState } from "react";
import AlertNotFound from "../../Elements/Alert/AlertNotFounddd";
import FormSearch from "../Form/FormSearch";
import DescriptionPage from "../Partials/DescriptionPage";

const ListHeader = () => {
    const data = {
        title: "Kebudayaan Kabupaten Lahat.",
        desc: "Jangan lewatkan kesempatan untuk melihat koleksi yang menakjubkan di Museum Daerah Kabupaten Lahat dan merasakan kekayaan sejarah kita!",
    };
    return (
        <DescriptionPage key="event-list" title={data.title} desc={data.desc} />
    );
};

export default function ListMuseum({ museums, allMuseums, pages }) {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    const handleSearchInputChange = (museum) => {
        const value = museum.target.value;
        setSearchKeyword(value);
        setIsSearching(value !== "");
    };

    const filteredMuseums = isSearching
        ? allMuseums.filter((museum) => {
              const { nama, deskripsi } = museum;
              const normalizedKeyword = searchKeyword.toLowerCase();
              return (
                  nama.toLowerCase().includes(normalizedKeyword) ||
                  deskripsi.toLowerCase().includes(normalizedKeyword)
              );
          })
        : museums;

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ListHeader />
            {pages === "Museum" && (
                <div className="w-3/5 mx-auto">
                    <FormSearch
                        searchKeyword={searchKeyword}
                        handleSearchInputChange={handleSearchInputChange}
                        pages={pages}
                        inputClassName={
                            "w-full mx-auto py-2 pr-10 pl-4 rounded-lg border-gray-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-200 focus:outline-none"
                        }
                    />
                </div>
            )}
            {filteredMuseums.length > 0 ? (
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid grid-cols-1 pt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2">
                        {filteredMuseums.map((museum) => (
                            <div
                                key={museum.id}
                                className="block mb-2 shadow-lg rounded-lg"
                            >
                                <div className="w-full max-w-md mx-auto overflow-hidden">
                                    <Link
                                        href={route("museum.detail")}
                                        method="get"
                                        data={{ id: museum.id }}
                                        className="cursor-pointer"
                                    >
                                        <div className="relative">
                                            <img
                                                className="w-full object-cover object-top rounded-lg"
                                                src={museum.thumbnail}
                                                alt={museum.nama}
                                            />
                                            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                                            <p className="absolute inset-0 flex justify-center items-center text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                                {museum.nama}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <AlertNotFound />
            )}
        </div>
    );
}
