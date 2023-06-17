import AdminLayout from "@/Layouts/AdminLayout";
import Breadcrumbs from "@/Components/Fragments/Partials/Breadcrumbs";
import FormEditEvent from "@/Components/Fragments/Form/FormEditEvent";

export default function EditEvent({
    title,
    pages,
    auth,
    flash,
    event,
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
                <div className="bg-white shadow-md rounded-md flex-grow px-8 py-6">
                    <h2 className="font-semibold text-lg">Form Edit Event</h2>
                    <div className="alert rounded-md my-2 lg:w-2/3">
                        <div>
                            <span className="text-sm">
                                Anda dapat mengubah informasi acara dengan
                                mudah. termasuk judul, deskripsi, tempat,
                                kategori, tanggal mulai, dan tanggal selesai.
                            </span>
                        </div>
                    </div>
                    <FormEditEvent event={event} errors={errors} />
                </div>
            </div>
        </AdminLayout>
    );
}
