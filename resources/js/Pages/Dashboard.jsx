import Badges from "@/Components/Fragments/Partials/Badges";
import TableLatestFeedback from "@/Components/Fragments/Tables/TableLatestFeedback";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Dashboard(props) {
    const { title, pages, auth, countData, latestData, feedback } = props;
    return (
        <AdminLayout title={title} pages={pages} auth={auth.user}>
            <div className="flex flex-wrap px-4 pt-2 pb-6 relative">
                <Badges countData={countData} latestData={latestData} />
            </div>
            <div className="flex-grow px-8 pb-4">
                <div className="bg-white px-4 py-4 lg:w-2/3 rounded-md shadow-md">
                    <h6 className="font-semibold text-xl lg:pb-1 lg:pt-2 sm:text-4xl md:text-xl">
                        Feedback
                    </h6>
                    <span className="text-sm">
                        Di sini, Anda akan menemukan beragam spanengalaman dan
                        opini dari masyarakat yang berhubungan dengan kegiatan
                        kebudayaan kami.
                        <a href="" className="text-blue-500">
                            {" "}
                            Lihat selengkapnya...
                        </a>
                    </span>
                        <TableLatestFeedback data={feedback.data} />
                </div>
            </div>
        </AdminLayout>
    );
}
