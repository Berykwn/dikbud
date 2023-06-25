import ListPegawai from "@/Components/Fragments/Listdata/ListPegawai";
import Paginator from "@/Components/Fragments/Partials/Paginator";
import MainLayout from "@/Layouts/MainLayout";

export default function Pegawai({ title, pages, pegawai, allPegawai }) {
    return (
        <MainLayout title={title} pages={pages}>
            <div className="bg-off-white-gray">
                <section className="pb-6">
                    <ListPegawai
                        pegawais={pegawai.data}
                        allPegawais={allPegawai.data}
                        pages={pages}
                    />
                    <div className="flex justify-center pt-8">
                        <Paginator meta={pegawai?.meta} />
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
