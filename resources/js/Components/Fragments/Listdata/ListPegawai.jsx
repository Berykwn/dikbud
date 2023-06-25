import React, { useState } from "react";
import AlertNotFound from "../../Elements/Alert/AlertNotFounddd";
import FormSearch from "../Form/FormSearch";
import DescriptionPage from "../Partials/DescriptionPage";

export default function ListPegawai({ pegawais, allPegawais, pages, url }) {
    console.log(pegawais);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    const handleSearchInputChange = (pegawai) => {
        const value = pegawai.target.value;
        setSearchKeyword(value);
        setIsSearching(value !== "");
    };

    const filteredPegawais = isSearching
        ? allPegawais.filter((event) => {
              const { nama, jabatan } = event;
              const normalizedKeyword = searchKeyword.toLowerCase();
              return (
                  nama.toLowerCase().includes(normalizedKeyword) ||
                  jabatan.toLowerCase().includes(normalizedKeyword)
              );
          })
        : pegawais;

    const renderPageHeader = () => {
        const data = {
            title: "Struktur Organisasi Dinas Pendidikan dan Kebudayaan Kabupaten Lahat",
        };

        return (
            <div className="py-6">
                <DescriptionPage key="event-list" url={url} {...data} />
                <div className="w-3/5 mx-auto">
                    <FormSearch
                        searchKeyword={searchKeyword}
                        handleSearchInputChange={handleSearchInputChange}
                        pages={pages}
                    />
                </div>
            </div>
        );
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {renderPageHeader()}
            {filteredPegawais.length > 0 ? (
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid grid-cols-1 pt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {filteredPegawais.map((item) => ( 
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <img
                                    className="w-full h-56 object-cover object-center"
                                    src={`/storage/img/pegawais/${item.foto}`}
                                    alt={item.foto}
                                />
                                <div className="px-6 py-4 bg-white">
                                    <div className="font-bold text-xl mb-2">
                                        {item.nama}
                                    </div>
                                    <p className="text-gray-700 text-base">
                                        {item.jabatan}
                                    </p>
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
