import LatestEvent from "@/Components/Fragments/Listdata/LatestEvent";
import FormattedDate from "@/Components/Elements/FormattedDate";
import MainLayout from "@/Layouts/MainLayout";
import Linked from "@/Components/Elements/Link/Link";

export default function DetailEvent(props) {
    const { title, pages, event, eventDetail } = props;
    return (
        <MainLayout title={title} pages={pages}>
            <section className="bg-off-white-gray">
                <div className="container mx-auto flex flex-col md:flex-row">
                    <div className="lg:px-16 lg:py-14 md:px-14 md:py-12 flex-grow">
                        <div className="relative lg:rounded-lg overflow-hidden">
                            <img
                                src={"storage/img/events/" + eventDetail.thumbnail}
                                alt={eventDetail.thumbnail}
                                className="w-full max-w-600 max-h-600 object-cover animate-fade-in cursor-pointer lg:max-w-none"
                            />
                        </div>
                    </div>
                    <div className="px-14 py-12 pl-0 max-w-md mx-auto overflow-hidden md:max-w-2xl">
                        <div className="flex items-center gap-x-2 text-xs mt-4">
                            <span className="text-slate-500">
                                <FormattedDate
                                    date={eventDetail.tanggal_mulai}
                                    key="tanggal-mulai"
                                />{" "}
                                -{" "}
                                <FormattedDate
                                    date={eventDetail.tanggal_selesai}
                                    key="tanggal-selesai"
                                />
                                <span className="text-slate-500">
                                    • Author: {eventDetail.tempat}
                                </span>
                            </span>
                        </div>
                        <h2 className="block mt-1 text-2xl leading-tight font-medium text-black hover:underline">
                            {eventDetail.judul_event}
                        </h2>
                        <p
                            className="mt-2 text-gray-500 text-md"
                            dangerouslySetInnerHTML={{
                                __html: eventDetail.deskripsi,
                            }}
                        ></p>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-off-white-gray">
                <div className="container mx-auto">
                    <div className="mx-auto text-center pt-4 px-4 py-2">
                        <h4
                            className={
                                "font-semibold text-xl lg:pb-5 sm:text-3xl md:text-4xl mt-3 font-[cursive]"
                            }
                        >
                            Lihat Event Lainnya
                        </h4>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start">
                        <LatestEvent events={event.data} />
                    </div>
                    <div className="flex justify-center mt-5">
                        <Linked
                            href={route("event")}
                            variant={"deep-teal"}
                            size={"btn-sm rounded-md"}
                            // className="bg-steel-blue hover:bg-lime-600 text-white font-bold py-2 px-4 rounded-lg"
                        >
                            Lihat lainnya
                        </Linked>
                    </div>
                </div>
            </section>

        </MainLayout>
    );
}
