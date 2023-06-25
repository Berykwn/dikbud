import AdminLayout from "@/Layouts/AdminLayout";
import Breadcrumbs from "@/Components/Fragments/Partials/Breadcrumbs";
import FormCreateGalleryBudaya from "@/Components/Fragments/Form/FormCreateGalleryBudaya";

export default function CreateGalleryBudaya(props) {
    const { title, pages, auth, flash, errors, budaya } = props;

    return (
        <AdminLayout title={title} pages={pages} auth={auth.user}>
            <div className="flex-grow lg:px-8">
                <Breadcrumbs pages={pages} title={title} />
                <div className="bg-white shadow-md rounded-md flex-grow px-8 py-6 mb-6">
                    <h2 className="font-semibold text-lg">
                        Form Tambah Gallery Budaya
                    </h2>
                    <div className="alert rounded-md my-2 lg:w-2/3">
                        <div>
                            <span className="text-sm">
                                Tambahkan beberapa gambar yang sesuai untuk
                                memperkaya tampilan budaya dengan mudah.
                            </span>
                        </div>
                    </div>
                    <FormCreateGalleryBudaya
                        budayas={budaya.data}
                        message={flash.message}
                        errors={errors}
                    />
                </div>
            </div>
        </AdminLayout>
    );
}
