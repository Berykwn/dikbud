import ListEvent from "@/Components/Fragments/Listdata/ListEvent";
import Paginator from "@/Components/Fragments/Partials/Paginator";
import MainLayout from "@/Layouts/MainLayout";

export default function Event({ title, pages, event, allEvent }) {
    const events = event && event.data ? event.data : [];
    const allEvents = allEvent && allEvent.data ? allEvent.data : [];
    return (
        <MainLayout title={title} pages={pages}>
            <div className="bg-off-white-gray">
                <section className="pb-6">
                    <ListEvent
                        events={events}
                        allEvents={allEvents} 
                        pages={pages}
                    />
                    <div className="flex justify-center pt-8">
                        <Paginator meta={event.meta} />
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
