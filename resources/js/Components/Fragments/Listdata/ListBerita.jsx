import React, { useState } from "react";
import AlertNotFound from "../../Elements/Alert/AlertNotFounddd";
import FormSearch from "../Form/FormSearch";
import CardBerita from "../Card/CardBerita";
import DescriptionPage from "../Partials/DescriptionPage";

const ListBerita = ({ beritas, allBeritas, pages, isDark, url }) => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    const handleSearchInputChange = (berita) => {
        const value = berita.target.value;
        setSearchKeyword(value);
        setIsSearching(value !== "");
    }; 

    const filteredBeritas = isSearching
        ? allBeritas.filter((berita) => {
              const { judul, deskripsi } = berita;
              const normalizedKeyword = searchKeyword.toLowerCase();
              return (
                  judul.toLowerCase().includes(normalizedKeyword) ||
                  deskripsi.toLowerCase().includes(normalizedKeyword)
              );
          })
        : beritas;

    const renderPageHeader = () => {
        const pageDesc = {
            title: "Berita Kebudayaan Kabupaten Lahat.",
            desc: "Temukan berita terkini seputar kebudayaan Kabupaten Lahat dan jangan lewatkan setiap ragam kegiatan budaya yang menarik untuk diikuti dan diapresiasi.",
        };

        return (
            <div className="py-6">
                <DescriptionPage
                    key="home-berita"
                    isDark={isDark}
                    title={pageDesc.title}
                    desc={pageDesc.desc}
                    url={url} 
                />
                {pages === "Berita" && (
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
            </div>
        );
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {pages === "Berita" && renderPageHeader()}
            {filteredBeritas.length > 0 ? (
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid grid-cols-1 pt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {filteredBeritas.map((berita) => (
                            <div key={berita.id}>
                                <CardBerita
                                    {...berita}
                                    url={route("berita.detail")}
                                    isDark={isDark}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <AlertNotFound />
            )}
        </div>
    );
};

export default ListBerita;
