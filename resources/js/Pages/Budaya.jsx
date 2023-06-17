import ListBudaya from "@/Components/Fragments/Listdata/ListBudaya";
import Paginator from "@/Components/Fragments/Partials/Paginator";
import MainLayout from "@/Layouts/MainLayout";

export default function Budaya(props) {
    const { title, pages, budaya, allBudaya } = props;
    const budayas = budaya && budaya.data ? budaya.data : [];
    const allBudayas = allBudaya && allBudaya.data ? allBudaya.data : [];

    return (
        <MainLayout title={title} pages={pages}>
            <div className="bg-off-white-gray">
                <section className="py-6">
                    <ListBudaya 
                        budayas={budayas}
                        allBudayas={allBudayas}
                        pages={pages}
                        isDark={false}
                    />
                    <div className="flex justify-center mt-4">
                        <Paginator meta={budaya.meta} />
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
