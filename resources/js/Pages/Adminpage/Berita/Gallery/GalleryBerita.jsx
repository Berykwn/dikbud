import Linked from "@/Components/Elements/Link/Link";
import Paginator from "@/Components/Fragments/Partials/Paginator";
import TableGalleryBerita from "@/Components/Fragments/Tables/TableGalleryBerita";
import AdminLayout from "@/Layouts/AdminLayout";

export default function GalleryBerita(props) {
    const { title, pages, auth, flash, galleryBerita, allGalleryBerita } =
        props;
    const galleryBeritas =
        galleryBerita && galleryBerita.data ? galleryBerita.data : [];
    const allGalleryBeritas =
        allGalleryBerita && allGalleryBerita.data ? allGalleryBerita.data : [];
    return (
        <AdminLayout
            title={title}
            pages={pages}
            auth={auth.user}
            message={flash.message}
        >
            <div className="lg:px-8 pb-4">
                <div className="bg-white shadow-md py-6 px-6">
                    <h2 className="font-semibold text-lg">
                        Data Gallery Berita
                    </h2>
                    <div className="alert rounded-md mb-4 lg:w-2/3">
                        <div>
                            <span className="text-sm">
                                Tambahkan beberapa gambar yang sesuai untuk
                                memperkaya tampilan berita sesuai dengan
                                judulnya. <br />
                                <Linked
                                    href={route(
                                        "dashboard.galleryberita.create"
                                    )}
                                    variant={"dodger-blue"}
                                    size={"btn-xs mt-2"}
                                >
                                    Tambah data
                                </Linked>
                            </span>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <TableGalleryBerita
                            galleryBeritas={galleryBeritas}
                            allGalleryBeritas={allGalleryBeritas}
                            pages={pages}
                        />
                        <div className="flex justify-center pt-2">
                            <Paginator meta={galleryBerita.meta} />
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
