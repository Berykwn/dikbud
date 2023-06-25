import React, { Fragment } from "react";
import { Link } from "@inertiajs/react";
import AlertNotFound from "@/Components/Elements/Alert/AlertNotFound";
import FormSearch from "@/Components/Fragments/Form/FormSearch";
import useSearch from "@/Components/Elements/UseSearch";

export default function TableGalleryBudaya({
    galleryBudayas,
    allGalleryBudayas,
    pages,
}) {
    const { searchKeyword, handleSearchInputChange, filteredData } = useSearch(
        galleryBudayas,
        allGalleryBudayas,
        ["gambar"]
    );

    const handleDeleteConfirmationClick = () => {
        if (confirm("Apakah anda yakin akan menghapus data?") === false) {
            window.location.href(route("dashboard.berita"));
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

    const renderTableRow = () => (
        <tbody>
            {filteredData.length > 0 &&
                filteredData.map((item) => (
                    <tr key={item.id} className="bg-white">
                        <td className="bg-white">
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img
                                            src={`/storage/img/gallery/beritas/${item.gambar}`}
                                            alt={item.gambar}
                                        />
                                    </div>
                                </div>
                                <div className="font-bold">
                                    {item.budaya.nama}
                                </div>
                            </div>
                        </td>
                        <td className="bg-white">
                            <div className="flex flex-wrap gap-2">
                                <label
                                    htmlFor={`galleryBeritaModal${item.id}`}
                                    className="btn btn-xs bg-deep-teal border-0 hover:bg-deep-teal/80"
                                >
                                    Detail
                                </label>
                                <Link
                                    href={route(
                                        "dashboard.gallery.budaya.destroy"
                                    )}
                                    as="button"
                                    method="post"
                                    data={{ id: item.id }}
                                    onClick={handleDeleteConfirmationClick}
                                    className="btn btn-xs bg-indian-red hover:bg-indian-red border-none"
                                >
                                    Hapus
                                </Link>
                                <input
                                    type="checkbox"
                                    id={`galleryBeritaModal${item.id}`}
                                    className="modal-toggle"
                                />
                                <div className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">
                                            {item.budaya.nama}
                                        </h3>
                                        <div className="pt-4">
                                            <img
                                                src={`/storage/img/gallery/beritas/${item.gambar}`}
                                                alt={item.gambar}
                                            />
                                        </div>
                                        <div className="modal-action">
                                            <label
                                                htmlFor={`galleryBeritaModal${item.id}`}
                                                className="btn"
                                            >
                                                Close!
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
        </tbody>
    );

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
