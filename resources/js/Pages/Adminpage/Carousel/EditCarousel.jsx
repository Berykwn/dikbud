import AdminLayout from "@/Layouts/AdminLayout";
import Breadcrumbs from "@/Components/Fragments/Partials/Breadcrumbs";
import FormEditCarousel from "@/Components/Fragments/Form/FormEditCarousel";

export default function EditCarousel(props) {
    const { title, pages, auth, flash, carousel, errors } = props;
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
                                Anda dapat mengubah banner dengan
                                mudah melalui form dibawah ini.
                            </span>
                        </div>
                    </div>
                    <FormEditCarousel
                        carousel={carousel}
                        errors={errors}
                        auth={auth.user.name}
                    />
                </div>
            </div>
        </AdminLayout>
    );
}
