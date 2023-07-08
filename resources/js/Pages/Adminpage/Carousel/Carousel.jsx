import AdminLayout from "@/Layouts/AdminLayout";
import LinkButton from "@/Components/Elements/Link/Link"; 
import Paginator from "@/Components/Fragments/Partials/Paginator";
import TableCarousel from "@/Components/Fragments/Tables/TableCarousel";

export default function Carousel(props) {
    const { title, pages, auth, flash, carousel, allCarousel } = props;
    console.log(allCarousel)
    return (
        <AdminLayout
            title={title}
            pages={pages}
            auth={auth.user}
            message={flash.message}
        >
            <div className="lg:px-8 pb-4">
                <div className="bg-white shadow-md py-6 px-6">
                    <h2 className="font-semibold text-lg">
                        Data Gallery Budaya
                    </h2>
                    <div className="alert rounded-md mb-4 lg:w-2/3">
                        <div>
                            <span className="text-sm">
                                Tambahkan beberapa gambar yang sesuai untuk
                                memperkaya tampilan banner pada halaman utama website.
                                <br />
                                <LinkButton
                                    href={route(
                                        "dashboard.carousel.create"
                                    )}
                                    variant={"dodger-blue"}
                                    size={"btn-xs mt-2"}
                                >
                                    Tambah data
                                </LinkButton>
                            </span>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <TableCarousel
                            carousels={carousel.data}
                            allCarousels={allCarousel.data}
                            pages={pages}
                        />
                        <div className="flex justify-center pt-2">
                            <Paginator meta={carousel.meta} />
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
