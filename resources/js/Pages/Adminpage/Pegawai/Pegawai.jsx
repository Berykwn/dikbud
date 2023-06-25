import LinkedTo from "@/Components/Elements/Link/Link";
import Paginator from "@/Components/Fragments/Partials/Paginator";
import TablePegawai from "@/Components/Fragments/Tables/TablePegawai";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Pegawai(props) {
    const { title, pages, auth, flash, pegawai, allPegawai } = props;

    return (
        <AdminLayout
            title={title}
            pages={pages}
            auth={auth.user}
            message={flash.message}
        >
            <div className="lg:px-8 pb-6">
                <div className="bg-white shadow-md py-6 px-6">
                    <div className="alert rounded-md mb-4 lg:w-2/3">
                        <div>
                            <span className="text-sm">
                                Anda dapat mencari, menambah, mengubah, melihat
                                detail, dan menghapus data acara. Temukan acara
                                menarik, tambahkan yang baru, perbarui
                                informasi, jelajahi detail acara, dan hapus yang
                                tidak relevan. <br />
                                <LinkedTo
                                    href={route("dashboard.pegawai.create")}
                                    variant="dodger-blue"
                                    size="btn-xs mt-2"
                                >
                                    Tambah Data
                                </LinkedTo>
                            </span>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <TablePegawai
                            pegawais={pegawai.data}
                            allPegawais={allPegawai.data}
                            pages={pages}
                        />
                        <div className="flex justify-center pt-2">
                            <Paginator meta={pegawai.meta} />
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
