import AdminLayout from "@/Layouts/AdminLayout";
import Breadcrumbs from "@/Components/Fragments/Partials/Breadcrumbs";
import FormCreateEvent from "@/Components/Fragments/Form/FormCreateEvent";

export default function CreateEvent(props) {
    const { title, pages, auth, flash, errors } = props;
    return (
        <AdminLayout title={title} pages={pages} auth={auth.user}>
            <div className="flex-grow lg:px-8">
                <Breadcrumbs pages={pages} title={title} />
                <div className="bg-white shadow-md rounded-md flex-grow px-8 py-6 mb-6">
                    <h2 className="font-semibold text-lg">Form Tambah Event</h2>
                    <div className="alert rounded-md my-2 lg:w-2/3">
                        <div>
                            {/* <Icon name={"info"} /> */}
                            <span className="text-sm">
                                Tambahkan acara baru dengan mudah dan cepat! Isi
                                detail acara seperti judul, tanggal, deskripsi,
                                lokasi, dan kontak yang relevan.
                            </span>
                        </div>
                    </div>
                    <FormCreateEvent message={flash.message} errors={errors} />
                </div>
            </div>
        </AdminLayout>
    );
}
