import Linked from "@/Components/Elements/Link/Link";
import Paginator from "@/Components/Fragments/Partials/Paginator";
import TableBudaya from "@/Components/Fragments/Tables/TableBudaya";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Budaya(props) {
    const { title, page, auth, flash, budaya, allBudaya } = props;
    return (
        <AdminLayout
            title={title}
            pages={page}
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
                                <Linked
                                    href={route("dashboard.budaya.create")}
                                    variant="dodger-blue"
                                    size="btn-xs mt-2"
                                >
                                    Tambah Data
                                </Linked>
                            </span>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <TableBudaya
                            budayas={budaya.data}
                            allBudayas={allBudaya.data}
                            pages={page}
                        />
                        <div className="flex justify-center pt-2">
                            <Paginator meta={budaya.meta} />
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
