import Linked from "@/Components/Elements/Link/Link";
import Paginator from "@/Components/Fragments/Partials/Paginator";
import TableEvents from "@/Components/Fragments/Tables/TableEvents";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Events({ title, pages, auth, flash, event, allEvent }) {
    return (
        <AdminLayout
            title={title}
            pages={pages}
            auth={auth.user}
            message={flash.message}
        >
            <div className="lg:px-8 pb-4">
                <div className="bg-white shadow-md py-6 px-6">
                    <h2 className="font-semibold text-lg">Data Events</h2>
                    <div className="alert rounded-md mb-4 lg:w-2/3">
                        <div>
                            <span className="text-sm">
                                Anda dapat mencari, menambah, mengubah, melihat
                                detail, dan menghapus data acara. Temukan acara
                                menarik, tambahkan yang baru, perbarui
                                informasi, jelajahi detail acara, dan hapus yang
                                tidak relevan. <br />
                                <Linked
                                    href={route("dashboard.event.create")}
                                    variant={"dodger-blue"}
                                    size={"btn-xs mt-2"}
                                >
                                    Tambah Event
                                </Linked>
                            </span>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <TableEvents
                            events={event.data}
                            allEvents={allEvent.data}
                            pages={pages}
                        />
                        <div className="flex justify-center pt-2">
                            <Paginator meta={event.meta} />
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
