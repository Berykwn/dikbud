import Linked from "@/Components/Elements/Link/Link";
import Paginator from "@/Components/Fragments/Partials/Paginator";
import TableBerita from "@/Components/Fragments/Tables/TableBerita";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Berita({
    title,
    pages,
    auth,
    flash,
    berita,
    allBerita,
}) {
    return (
        <AdminLayout
            title={title}
            pages={pages}
            auth={auth.user}
            message={flash.message}
        >
            <div className="lg:px-8 pb-4">
                <div className="bg-white shadow-md py-6 px-6">
                    <h2 className="font-semibold text-lg">Data Berita</h2>
                    <div className="alert rounded-md mb-4 lg:w-2/3">
                        <div>
                            <span className="text-sm">
                                Anda dapat mencari, menambah, mengubah, melihat
                                detail, dan menghapus data. Temukan berita
                                menarik, tambahkan yang baru, perbarui
                                informasi, jelajahi detail acara, dan hapus yang
                                tidak relevan. <br />
                                <Linked
                                    href={route("dashboard.berita.create")}
                                    variant={"dodger-blue"}
                                    size={"btn-xs mt-2"}
                                >
                                    Tambah Berita
                                </Linked>
                            </span>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <TableBerita
                            beritas={berita.data}
                            allBeritas={allBerita.data}
                            pages={pages}
                        />
                        <div className="flex justify-center pt-2">
                            <Paginator meta={berita.meta} />
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}