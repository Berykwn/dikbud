import AdminLayout from "@/Layouts/AdminLayout";
import LinkButton from "@/Components/Elements/Link/Link"; 
import TableGalleryBudaya from "@/Components/Fragments/Tables/TableGalleryBudaya";
import Paginator from "@/Components/Fragments/Partials/Paginator";

export default function GalleryBudaya(props) {
    const { title, pages, auth, flash, galleryBudaya, allGalleryBudaya } = props;
    const galleryBudayas = galleryBudaya && galleryBudaya.data ? galleryBudaya.data : []; 
    const allGalleryBudayas = allGalleryBudaya && allGalleryBudaya.data ? allGalleryBudaya.data : [];
    console.log(props)
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
                        Data Gallery Budaya
                    </h2>
                    <div className="alert rounded-md mb-4 lg:w-2/3">
                        <div>
                            <span className="text-sm">
                            Tambahkan beberapa gambar yang sesuai untuk
                                memperkaya tampilan budaya sesuai dengan
                                nama budaya.<br />
                                <LinkButton
                                    href={route(
                                        "dashboard.gallery.budaya.create"
                                    )}
                                    variant={"dodger-blue"}
                                    size={"btn-xs mt-2"}
                                >
                                    Tambah data
                                </LinkButton>
                            </span>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <TableGalleryBudaya
                            galleryBudayas={galleryBudayas}
                            allGalleryBudayas={allGalleryBudayas}
                            pages={pages}
                        />
                        <div className="flex justify-center pt-2">
                            <Paginator meta={galleryBudaya.meta} />
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
