import React, { Fragment } from "react";
import { Link } from "@inertiajs/react";
import AlertNotFound from "@/Components/Elements/Alert/AlertNotFound";
import FormSearch from "@/Components/Fragments/Form/FormSearch";
import LinkButton from "@/Components/Elements/Link/Link";
import useSearch from "@/Components/Elements/UseSearch";

export default function TableGalleryBerita({
    galleryBeritas,
    allGalleryBeritas,
    pages,
}) {
    console.log(allGalleryBeritas)
    const { searchKeyword, handleSearchInputChange, filteredData } = useSearch(
        galleryBeritas,
        allGalleryBeritas,
        ["gambar"] // keyword pencarian
    );

    const handleDeleteConfirmationClick = () => {
        if (confirm("Apakah anda yakin akan menghapus data?") === false) {
            window.location.href = route("dashboard.budaya");
        }
    };

    const renderFormSearch = () => (
        <>
            <div className="flex justify-between pt-2">
                <div className="w-full md:w-2/3 lg:w-2/3 rounded-lg">
                    <FormSearch
                        searchKeyword={searchKeyword}
                        handleSearchInputChange={handleSearchInputChange}
                        pages={pages}
                        variant="adminpage"
                    />
                </div>
            </div>
            {filteredData && filteredData.length === 0 && (
                <div className="mt-2 md:w-2/3 lg:w-2/3">
                    <AlertNotFound>Data Tidak ditemukan!!</AlertNotFound>
                </div>
            )}
        </>
    );

    const renderTableRow = () => {
        return (
            <tbody>
                {filteredData &&
                    filteredData.length > 0 &&
                    filteredData.map((item) => (
                        <tr key={item.id} className="bg-white">
                            <td className="bg-white">
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src={`/storage/img/budayas/${item.thumbnail}`}
                                                alt={item.gambar}
                                            />
                                        </div>
                                    </div>
                                    <div className="font-bold">
                                        {item.berita.judul}
                                    </div>
                                </div>
                            </td>
                            <td className="bg-white">
                                <div className="flex flex-wrap gap-2">
                                    <LinkButton
                                        href={route("dashboard.budaya.edit")}
                                        as="button"
                                        method="get"
                                        data={{ id: item.id }}
                                        variant="dodger-blue"
                                        size="btn-xs"
                                    >
                                        Edit
                                    </LinkButton>
                                    <LinkButton
                                        href={route("dashboard.budaya.detail")}
                                        as="button"
                                        method="get"
                                        data={{ id: item.id }}
                                        variant="deep-teal"
                                        size="btn-xs"
                                    >
                                        Detail
                                    </LinkButton>
                                    <Link
                                        href={route("dashboard.budaya.destroy")}
                                        as="button"
                                        method="post"
                                        data={{ id: item.id }}
                                        onClick={handleDeleteConfirmationClick}
                                        className="btn btn-xs bg-indian-red hover:bg-indian-red border-none"
                                    >
                                        Hapus
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
            </tbody>
        );
    };

    return (
        <Fragment>
            {renderFormSearch()}
            <div className="overflow-x-auto w-full mt-2">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="bg-gray-200">judul</th>
                            <th className="bg-gray-200">Actions</th>
                        </tr>
                    </thead>
                    {renderTableRow()}
                </table>
            </div>
        </Fragment>
    );
}
