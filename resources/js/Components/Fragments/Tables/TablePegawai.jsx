import { Fragment } from "react";
import { Link } from "@inertiajs/react";
import AlertNotFoundd from "@/Components/Elements/Alert/AlertNotFound";
import FormSearch from "@/Components/Fragments/Form/FormSearch";
import LinkedTo from "@/Components/Elements/Link/Link";
import useSearch from "@/Components/Elements/UseSearch";

export default function TablePegawai({ pegawais, allPegawais, pages }) {
    const { searchKeyword, handleSearchInputChange, filteredData } = useSearch(
        allPegawais,
        pegawais,
        ["nama", "jabatan"] // keyword pencarian
    );

    const handleDeleteConfirmationClick = () => {
        if (confirm("Apakah anda yakin akan menghapus data?") === false) {
            window.location.href(route("dashboard.pegawai"));
        }
    };

    const renderFormSearch = () => {
        return (
            <>
                <div className="flex justify-between pt-2">
                    <div className="w-full md:w-2/3 lg:w-2/3 rounded-lg">
                        <FormSearch
                            searchKeyword={searchKeyword}
                            handleSearchInputChange={handleSearchInputChange}
                            pages={pages}
                            variant={"adminpage"}
                        />
                    </div>
                </div>
                {filteredData.length == 0 && (
                    <div className="mt-2 md:w-2/3 lg:w-2/3">
                        <AlertNotFoundd>Data Tidak ditemukan!!</AlertNotFoundd>
                    </div>
                )}
            </>
        );
    };

    const renderTableRow = () => {
        return (
            <tbody>
                {filteredData.length > 0 &&
                    filteredData.map((item) => (
                        <tr key={item.id} className="bg-white">
                            <td className="bg-white">
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src={
                                                    "/storage/img/pegawais/" +
                                                    item.foto
                                                }
                                                alt={item.nama}
                                            />
                                        </div>
                                    </div>
                                    <div className="font-bold">{item.nama}</div>
                                </div>
                            </td>
                            <td className="bg-white">{item.jabatan}</td>
                            <td className="bg-white">
                                <div className="flex flex-wrap gap-2">
                                    <LinkedTo
                                        href={route("dashboard.pegawai.edit")}
                                        as="button"
                                        method="get"
                                        data={{ id: item.id }}
                                        variant={"dodger-blue"}
                                        size={"btn-xs"}
                                    >
                                        Edit
                                    </LinkedTo>
                                    <label
                                        htmlFor={`pegawaiModal${item.id}`}
                                        className="btn btn-xs bg-deep-teal border-0 hover:bg-deep-teal/80"
                                    >
                                        Detail
                                    </label>
                                    <input
                                        type="checkbox"
                                        id={`pegawaiModal${item.id}`}
                                        className="modal-toggle"
                                    />
                                    <div className="modal">
                                        <div className="modal-box">
                                            <div className="">
                                                <img
                                                    src={`/storage/img/pegawais/${item.foto}`}
                                                    alt={item.foto}
                                                />
                                            </div>
                                            <h3 className="font-bold text-lg">
                                                Nama: {item.nama}
                                            </h3>
                                            <h3 className="font-bold text-lg">Jabatan: {item.jabatan}</h3>
                                            <h3 className="font-bold text-lg">Pesan : " {item.pesan} "</h3>
                                            <div className="modal-action">
                                                <label
                                                    htmlFor={`pegawaiModal${item.id}`}
                                                    className="btn"
                                                >
                                                    Close!
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <Link
                                        href={route("dashboard.pegawai.destroy")}
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
                            <th className="bg-gray-200">nama</th>
                            <th className="bg-gray-200">jabatan</th>
                            <th className="bg-gray-200">Actions</th>
                        </tr>
                    </thead>
                    {renderTableRow()}
                </table>
            </div>
        </Fragment>
    );
}
