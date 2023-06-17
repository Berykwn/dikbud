import ListBerita from "@/Components/Fragments/Listdata/ListBerita";
import Paginator from "@/Components/Fragments/Partials/Paginator";
import MainLayout from "@/Layouts/MainLayout";

export default function Berita(props) {
    const { berita, allBerita, title, pages } = props;
    const beritas = berita && berita.data ? berita.data : []; 
    const allBeritas = allBerita && allBerita.data ? allBerita.data : [];

    return (
        <MainLayout title={title} pages={pages}>
            <div className="bg-off-white-gray">
                <section className="pb-6">
                    <ListBerita
                        beritas={beritas}
                        allBeritas={allBeritas}
                        pages={pages}
                        isDark={false}
                    />
                    <div className="flex justify-center mt-4">
                        <Paginator meta={berita.meta} />
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
