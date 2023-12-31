import AdminLayout from "@/Layouts/AdminLayout";
import Breadcrumbs from "@/Components/Fragments/Partials/Breadcrumbs";
import FormEditBerita from "@/Components/Fragments/Form/FormEditBerita";

export default function Editberita({
    title,
    pages,
    auth,
    flash,
    berita, 
    errors,
}) {
    return (
        <AdminLayout
            title={title}
            pages={pages} 
            auth={auth.user} 
            message={flash.message}
        >
            <div className="flex-grow lg:px-8">
                <Breadcrumbs pages={pages} title={title} />
                <div className="bg-white shadow-md rounded-md flex-grow px-8 py-6 mb-6">
                    <h2 className="font-semibold text-lg">Form Edit Event</h2>
                    <div className="alert rounded-md my-2 lg:w-2/3">
                        <div>
                            <span className="text-sm">
                                Anda dapat mengubah data berita dengan
                                mudah. termasuk judul, deskripsi, konten,
                                kategori, dan sumber informasi yang relevan.
                            </span>
                        </div>
                    </div>
                    <FormEditBerita berita={berita} errors={errors} auth={auth.user.name}/>
                </div>
            </div>
        </AdminLayout>
    );
}
