import AdminLayout from "@/Layouts/AdminLayout";
import Breadcrumbs from "@/Components/Fragments/Partials/Breadcrumbs";
import FormCreateGalleryBerita from "@/Components/Fragments/Form/FormCreateGalleryBerita";

export default function CreateGalleryBerita(props) {
    const { title, pages, auth, flash, errors, berita } = props;

    return (
        <AdminLayout title={title} pages={pages} auth={auth.user}>
            <div className="flex-grow lg:px-8">
                <Breadcrumbs pages={pages} title={title} />
                <div className="bg-white shadow-md rounded-md flex-grow px-8 py-6 mb-6">
                    <h2 className="font-semibold text-lg">
                        Form Tambah Gallery Berita
                    </h2>
                    <div className="alert rounded-md my-2 lg:w-2/3">
                        <div>
                            <span className="text-sm">
                                Tambahkan acara baru dengan mudah dan cepat! Isi
                                detail acara seperti judul, tanggal, deskripsi,
                                lokasi, dan kontak yang relevan.
                            </span>
                        </div>
                    </div>
                    <FormCreateGalleryBerita
                        message={flash.message}
                        errors={errors}
                        beritas={berita.data}
                    />
                </div>
            </div>
        </AdminLayout>
    );
}
