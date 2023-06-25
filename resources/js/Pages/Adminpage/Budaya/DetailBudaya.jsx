import AdminLayout from "@/Layouts/AdminLayout";
import Breadcrumbs from "@/Components/Fragments/Partials/Breadcrumbs";
import Icon from "@/Components/Elements/Icon/Icon";
import Linked from "@/Components/Elements/Link/Link";

export default function DetailBudaya(props) {
    const { title, pages, budayaDetail, auth } = props;
    return (
        <AdminLayout title={title} pages={pages} auth={auth.user}>
            <div className="lg:px-8 pb-4">
                <Breadcrumbs pages={pages} />
                <div className="bg-white shadow-md py-4 px-4">
                    <h2 className="font-semibold text-lg">Detail Budaya</h2>
                    <div className="alert rounded-md my-2 lg:w-2/3">
                        <div>
                            <Icon name="info" />
                            <span className="text-sm">
                                Ini adalah tampilan ketika pengguna berada di
                                menu Detail Berita.
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-start gap-1 mb-2">
                        <Linked
                            href={route("dashboard.budaya")}
                            variant="secondary"
                            size="btn-xs rounded-md"
                        >
                            Kembali
                        </Linked>
                        <Linked
                            href={route("dashboard.budaya.edit")}
                            method="get"
                            data={{ id: budayaDetail.id }}
                            variant="dodger-blue"
                            size="btn-xs rounded-md"
                        >
                            Edit
                        </Linked>
                    </div>

                    <div className="container mx-auto flex flex-col md:flex-row">
                        <div className="py-2 flex-grow">
                            <div className="relative lg:rounded-lg overflow-hidden">
                                <img
                                    src={`/storage/img/budayas/${budayaDetail.thumbnail}`}
                                    alt={budayaDetail.thumbnail}
                                    className="w-full max-w-600 max-h-600 object-cover animate-fade-in cursor-pointer lg:max-w-none"
                                />
                            </div>
                        </div>
                        <div className="ml-5 max-w-md mx-auto overflow-hidden md:max-w-2xl">
                            <h2 className="block mt-1 text-2xl leading-tight font-medium text-black hover:underline">
                                {budayaDetail.nama}
                            </h2>
                            <p className="mt-2 text-gray-500 text-md">
                                {budayaDetail.deskripsi}
                            </p>
                            <p
                                className="mt-2 text-gray-500 text-md"
                                dangerouslySetInnerHTML={{
                                    __html: budayaDetail.konten,
                                }}
                            ></p>
                            <p className="mt-2 text-gray-500 text-md">
                                {budayaDetail.sumber}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
