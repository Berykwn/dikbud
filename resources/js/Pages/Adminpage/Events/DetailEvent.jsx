import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import Breadcrumbs from "@/Components/Fragments/Partials/Breadcrumbs";
import FormattedDate from "@/Components/Elements/FormattedDate";
import Icon from "@/Components/Elements/Icon/Icon";
import Linked from "@/Components/Elements/Link/Link";

const DetailEvent = ({ title, pages, eventDetail, auth }) => {
    return (
        <AdminLayout title={title} pages={pages} auth={auth.user}>
            <div className="lg:px-8 pb-4">
                <Breadcrumbs pages={pages} />
                <div className="bg-white shadow-md py-4 px-4">
                    <h2 className="font-semibold text-lg">Detail Event</h2>
                    <div className="alert rounded-md my-2 lg:w-2/3">
                        <div>
                            <Icon name="info" />
                            <span className="text-sm">
                                Ini adalah tampilan ketika pengguna berada di
                                menu Detail Event.
                            </span>
                        </div>
                    </div>
                    <div className="container mx-auto flex flex-col md:flex-row">
                        <div className="py-2 flex-grow">
                            <div className="flex justify-end gap-1 mb-2">
                                <Linked
                                    href={route("dashboard.events")}
                                    variant="secondary"
                                    size="btn-xs rounded-md"
                                >
                                    Kembali
                                </Linked>
                                <Linked
                                    href={route("dashboard.event.edit")}
                                    method="get"
                                    data={{ id: eventDetail.id }}
                                    variant="dodger-blue"
                                    size="btn-xs rounded-md"
                                >
                                    Edit
                                </Linked>
                            </div>
                            <div className="relative lg:rounded-lg overflow-hidden">
                                <img
                                    src={`/storage/img/events/${eventDetail.gambar}`}
                                    alt={eventDetail.gambar}
                                    className="w-full max-w-600 max-h-600 object-cover animate-fade-in cursor-pointer lg:max-w-none"
                                />
                            </div>
                        </div>
                        <div className="ml-5 max-w-md mx-auto overflow-hidden md:max-w-2xl">
                            <div className="flex items-center gap-x-2 text-xs mt-2">
                                <time className="text-slate-500">
                                    <FormattedDate
                                        date={eventDetail.tanggal_mulai}
                                        key="tanggal-mulai"
                                    />
                                </time>
                                •
                                <time className="text-slate-500">
                                    <FormattedDate
                                        date={eventDetail.tanggal_selesai}
                                        key="tanggal-mulai"
                                    />
                                </time>
                            </div>
                            <p className="text-gray-800 text-lg font-semibold">
                                {eventDetail.judul_event}
                            </p>
                            <div className="flex items-center gap-x-2 text-xs">
                                <span className="text-slate-500">
                                    {eventDetail.kategori}
                                </span>
                                <span className="text-slate-500">
                                    • {eventDetail.tempat}
                                </span>
                            </div>
                            <p
                                className="mt-2 text-gray-500 text-md"
                                dangerouslySetInnerHTML={{
                                    __html: eventDetail.deskripsi,
                                }}
                            ></p>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default DetailEvent;
