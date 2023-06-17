import AdminLayout from "@/Layouts/AdminLayout";
import Breadcrumbs from "@/Components/Fragments/Partials/Breadcrumbs";
import FormattedDate from "@/Components/Elements/FormattedDate";
import Icon from "@/Components/Elements/Icon/Icon";
import Linked from "@/Components/Elements/Link/Link";

const DetailBerita = ({ title, pages, beritaDetail, auth }) => {
    return (
        <AdminLayout title={title} pages={pages} auth={auth.user}>
            <div className="lg:px-8 pb-4">
                <Breadcrumbs pages={pages} />
                <div className="bg-white shadow-md py-4 px-4">
                    <h2 className="font-semibold text-lg">Detail Berita</h2>
                    <div className="alert rounded-md my-2 lg:w-2/3">
                        <div>
                            <Icon name="info" />
                            <span className="text-sm">
                                Ini adalah tampilan ketika user berada di menu
                                Detail Berita
                            </span>
                        </div>
                    </div>
                    <div className="container mx-auto flex flex-col md:flex-row">
                        <div className="py-2 flex-grow">
                            <div className="flex justify-end gap-1 mb-2">
                                <Linked
                                    href={route("dashboard.berita")}
                                    variant="secondary"
                                    size="btn-xs rounded-md"
                                > 
                                    Kembali
                                </Linked>
                                <Linked
                                    href={route("dashboard.berita.edit")}
                                    method="get"
                                    data={{ id: beritaDetail.id }}
                                    variant="dodger-blue"
                                    size="btn-xs rounded-md"
                                >
                                    Edit
                                </Linked>
                            </div>
                            <div className="relative lg:rounded-lg overflow-hidden">
                                <img
                                    src={`/storage/img/beritas/${beritaDetail.thumbnail}`}
                                    alt={beritaDetail.thumbnail}
                                    className="w-full max-w-600 max-h-600 object-cover animate-fade-in cursor-pointer lg:max-w-none"
                                />
                            </div>
                        </div>
                        <div className="ml-5 max-w-md mx-auto overflow-hidden md:max-w-2xl">
                            <div className="flex items-center gap-x-2 text-xs mt-4">
                                <time className="text-slate-500">
                                    <FormattedDate
                                        date={beritaDetail.updated_at}
                                        key="tanggal-mulai"
                                    />
                                </time>
                                <span className="text-slate-500">
                                    • Author: {beritaDetail.penulis}
                                </span>
                            </div>
                            <h2 className="block mt-1 text-2xl leading-tight font-medium text-black hover:underline">
                                {beritaDetail.judul}
                            </h2>
                            <p className="mt-2 text-gray-500 text-md">
                                {beritaDetail.deskripsi}
                            </p>
                            <p
                                className="mt-2 text-gray-500 text-md"
                                dangerouslySetInnerHTML={{
                                    __html: beritaDetail.konten,
                                }}
                            ></p>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default DetailBerita;
