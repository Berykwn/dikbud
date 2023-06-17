import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Edit({ auth, mustVerifyEmail, title, pages, status }) {
    return (
        <AdminLayout title={title} pages={pages} auth={auth.user}>
            <div className="flex flex-wrap flex-col sm:flex-row gap-4 px-8">
                <div className="p-8 bg-white shadow-md rounded-xl lg:w-1/2">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-xl"
                    />
                </div>
                <div className="p-8 bg-white shadow-md rounded-xl lg:w-1/2">
                    <UpdatePasswordForm className="max-w-xl" />
                </div>
                <div className="pb-10">
                    <div className="p-8 bg-white shadow-md rounded-xl lg:w-2/3">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
