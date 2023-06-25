import React, { useState } from "react";
import DescriptionPage from "../Partials/DescriptionPage";
import AlertNotFound from "../../Elements/Alert/AlertNotFounddd";
import FormSearch from "../Form/FormSearch";
import CardBudaya from "../Card/CardBudaya";

export default function ListBudaya({
    pages,
    budayas,
    allBudayas,
    isDark,
    url,
}) {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    const handleSearchInputChange = (budaya) => {
        const value = budaya.target.value;
        setSearchKeyword(value);
        setIsSearching(value !== "");
    };

    const filteredBudayas = isSearching
        ? allBudayas.filter((budaya) => {
              const { nama, deskripsi } = budaya;
              const normalizedKeyword = searchKeyword.toLowerCase();
              return (
                  nama.toLowerCase().includes(normalizedKeyword) ||
                  deskripsi.toLowerCase().includes(normalizedKeyword)
              );
          })
        : budayas;

    const renderPageHeader = () => {
        const data = {
            title: "Kebudayaan Kabupaten Lahat.",
            desc: "Jangan lewatkan kesempatan untuk melihat koleksi yang menakjubkan di Museum Daerah Kabupaten Lahat dan merasakan kekayaan sejarah kita!",
        };

        return (
            <div className="py-6">
                <DescriptionPage
                    key="home-berita"
                    isDark={isDark}
                    url={url}
                    {...data}
                />
                {pages === "Budaya" && (
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
            {pages === "Budaya" && renderPageHeader()}
            {filteredBudayas.length > 0 ? (
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid grid-cols-1 pt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {filteredBudayas.map((budaya) => (
                            <div key={budaya.id}>
                                <CardBudaya
                                    {...budaya}
                                    kategori = {budaya.kategori_budaya.nama}
                                    url={route("budaya.detail")}
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
}
