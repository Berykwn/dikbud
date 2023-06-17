import { Fragment, useState } from "react";
import { Link } from "@inertiajs/react";
import AlertNotFoundd from "@/Components/Elements/Alert/AlertNotFound";
import FormSearch from "@/Components/Fragments/Form/FormSearch";
import Linked from "@/Components/Elements/Link/Link";
import useSearch from "@/Components/Elements/UseSearch";

export default function TableEvents({ events, allEvents, pages }) {
    const { searchKeyword, handleSearchInputChange, filteredData } = useSearch(
        allEvents,
        events,
        ["judul_event", "deskripsi"] //keyword pencarian
    );

    const handleDeleteConfirmation = () => {
        if (confirm("Apakah anda yakin akan menghapus data?") === false) {
            window.location.href(route("dashboard.events"));
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
                                                    "/storage/img/events/" +
                                                    item.gambar
                                                }
                                                alt="Event Image"
                                            />
                                        </div>
                                    </div>
                                    <div className="font-bold">
                                        {item.judul_event.slice(0, 35)}
                                    </div>
                                </div>
                            </td>
                            <td className="bg-white">{item.tempat}</td>
                            <td className="bg-white">
                                <div className="flex flex-wrap gap-2">
                                    <Linked
                                        href={route("dashboard.event.edit")}
                                        as="button"
                                        method="get"
                                        data={{ id: item.id }}
                                        variant={"dodger-blue"}
                                        size={"btn-xs"}
                                    >
                                        Edit
                                    </Linked>
                                    <Linked
                                        href={route("dashboard.event.detail")}
                                        as="button"
                                        method="get"
                                        data={{ id: item.id }}
                                        variant={"deep-teal"}
                                        size={"btn-xs"}
                                    >
                                        Detail
                                    </Linked>
                                    <Link
                                        href={route("dashboard.event.destroy")}
                                        as="button"
                                        method="post"
                                        data={{ id: item.id }}
                                        onClick={handleDeleteConfirmation}
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
            <div className="overflow-x-auto w-full mt-3">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="bg-gray-200">Judul Event</th>
                            <th className="bg-gray-200">Tempat</th>
                            <th className="bg-gray-200">Actions</th>
                        </tr>
                    </thead>
                    {renderTableRow()}
                </table>
            </div>
        </Fragment>
    );
}
