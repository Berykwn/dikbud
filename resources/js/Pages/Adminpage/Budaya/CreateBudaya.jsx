import AdminLayout from "@/Layouts/AdminLayout";
import Breadcrumbs from "@/Components/Fragments/Partials/Breadcrumbs";
import FormCreateBudaya from "@/Components/Fragments/Form/FormCreateBudaya";

export default function CreateBerita(props) {
    const { title, pages, auth, flash, errors, kategoriBudaya } = props;
    return (
        <AdminLayout title={title} pages={pages} auth={auth.user}>
            <div className="flex-grow lg:px-8">
                <Breadcrumbs pages={pages} title={title} />
                <div className="bg-white shadow-md rounded-md flex-grow px-8 py-6 mb-6">
                    <h2 className="font-semibold text-lg">
                        Form Tambah Berita
                    </h2>
                    <div className="alert rounded-md my-2 lg:w-2/3">
                        <div>
                            <span className="text-sm">
                                Tambahkan data budaya baru dengan mudah dan
                                cepat dengan mengisi form dibawah.
                            </span>
                        </div>
                    </div>
                    <FormCreateBudaya
                        message={flash.message}
                        errors={errors}
                        kategoriBudayas={kategoriBudaya}
                        authName={auth.user.name}
                    />
                </div>
            </div>
        </AdminLayout>
    );
}
