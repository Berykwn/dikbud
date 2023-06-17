import PageDescription from "@/Components/Fragments/Partials/DescriptionPage";
import ListMuseum from "@/Components/Fragments/Listdata/ListMuseum";
import Paginator from "@/Components/Fragments/Partials/Paginator";
import MainLayout from "@/Layouts/MainLayout";

export default function Museum(props) {
    return (
        <MainLayout title={props.title} pages={props.pages}>
            <div className="bg-off-white-gray">
                <section className="pb-6">
                    <ListMuseum
                        museums={props.museum?.data ?? []}
                        allMuseums={props.allMuseum?.data ?? []}
                        pages={props.pages}
                    />
                    <div className="flex justify-center pt-8">
                        <Paginator meta={props.museum.meta} />
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
