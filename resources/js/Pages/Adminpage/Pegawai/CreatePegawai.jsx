import AdminLayout from "@/Layouts/AdminLayout";
import Breadcrumbs from "@/Components/Fragments/Partials/Breadcrumbs";
import FormCreatePegawai from "@/Components/Fragments/Form/FormCreatePegawai";
 
export default function CreatePegawai(props) {
    const { title, pages, auth, flash, errors } = props;
    return (
        <AdminLayout title={title} pages={pages} auth={auth.user}>
            <div className="flex-grow lg:px-8">
                <Breadcrumbs pages={pages} title={title} />
                <div className="bg-white shadow-md rounded-md flex-grow px-8 py-6 mb-6">
                    <h2 className="font-semibold text-lg">Form Tambah Pegawai</h2>
                    <div className="alert rounded-md my-2 lg:w-2/3">
                        <div>
                            <span className="text-sm">
                                Tambahkan acara baru dengan mudah dan cepat! Isi
                                detail acara seperti judul, tanggal, deskripsi,
                                lokasi, dan kontak yang relevan.
                            </span>
                        </div>
                    </div>
                    <FormCreatePegawai message={flash.message} errors={errors} auth={auth.user.name}/>
                </div>
            </div>
        </AdminLayout>
    );
}
