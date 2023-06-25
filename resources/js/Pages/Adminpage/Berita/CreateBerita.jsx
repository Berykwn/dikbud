import AdminLayout from "@/Layouts/AdminLayout";
import Breadcrumbs from "@/Components/Fragments/Partials/Breadcrumbs";
import FormCreateBerita from "@/Components/Fragments/Form/FormCreateBerita";

export default function CreateBerita({ title, pages, auth, flash, errors }) {
    return (
        <AdminLayout title={title} pages={pages} auth={auth.user}>
            <div className="flex-grow lg:px-8">
                <Breadcrumbs pages={pages} title={title} />
                <div className="bg-white shadow-md rounded-md flex-grow px-4 py-6 mb-6 lg:px-8">
                    <h2 className="font-semibold text-lg">
                        Form Tambah Berita
                    </h2>
                    <div className="alert rounded-md my-2 lg:w-2/3">
                        <span className="text-sm">
                            Tambahkan berita baru dengan mudah dan cepat! Isi
                            detail berita seperti judul, deskripsi, konten, dan
                            kategori berita yang relevan.
                        </span>
                    </div>
                    <FormCreateBerita
                        message={flash.message}
                        errors={errors}
                        auth={auth.user.name}
                    />
                </div>
            </div>
        </AdminLayout>
    );
}
