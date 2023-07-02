import LatestEvent from "@/Components/Fragments/Listdata/LatestEvent";
import PageDescription from "@/Components/Fragments/Partials/DescriptionPage";
import MainLayout from "@/Layouts/MainLayout";
import FormFeedback from "@/Components/Fragments/Form/FormFeedback";
import Carousel from "@/Components/Fragments/Carousel/Carousel";
import LatestBerita from "@/Components/Fragments/Listdata/LatestBerita";
import ListKategoriBudaya from "@/Components/Fragments/Listdata/ListKategoriBudaya";
import LinkButton from "@/Components/Elements/Link/Link";
import ListPegawai from "@/Components/Fragments/Listdata/ListPegawai";

export default function Home(props) {
    const {
        title,
        pages,
        event,
        berita,
        flash,
        errors,
        carousel,
        kategoriKebudayaan,
        pegawai,
    } = props;

    return (
        <MainLayout title={title} pages={pages}>
            <section className="bg-off-white-gray lg:pt-6 md:pt-4 flex justify-center">
                <div className="container mx-auto lg:px-20 md:px-8 px-0 py-2">
                    <Carousel carousel={carousel.data} />
                </div>
            </section>

            <section className="bg-off-white-gray pt-4">
                <div className="container mx-auto lg:px-14 md:px-8 px-4">
                    <LatestBerita beritas={berita.data} url={route("berita")} />
                </div>
            </section>

            <section className="bg-midnight-blue lg:pt-6 md:pt-4 flex justify-center">
                <div className="container mx-auto lg:px-16 md:px-8 px-0 py-6">
                    <div className="flex justify-center mx-auto max-w-7xl px-6 py-8">
                        <h1 className="text-3xl font-bold text-white text-center leading-tight font-[cursive]">
                            Ikuti Event Kebudayaan Terdekat!
                        </h1>
                    </div>
                    <LatestEvent events={event.data} isDark />
                    <div className="flex justify-center py-8">
                        <LinkButton
                            href={route("event")}
                            variant="deep-teal"
                            size="btn-sm rounded-md"
                        >
                            Lihat Semua Event
                        </LinkButton>
                    </div>
                </div>
            </section>

            <section className="bg-off-white-gray pt-4 py-8">
                <div className="container mx-auto px-4">
                    <ListKategoriBudaya
                        kategoriKebudayaan={kategoriKebudayaan}
                    />
                </div>
            </section>

            <section className="pt-14 pb-14 bg-midnight-blue">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center md:justify-start">
                        <div className="mx-auto">
                            <div className="flex justify-center mx-auto max-w-7xl px-6 py-8">
                                <h1 className="text-3xl font-bold text-white text-center leading-tight font-[cursive]">
                                    Daftar Pegawai!
                                </h1>
                            </div>
                            <ListPegawai pegawais={pegawai.data} />
                            <div className="flex justify-center py-8">
                                <LinkButton
                                    href={route("pegawai")}
                                    variant="deep-teal"
                                    size="btn-sm rounded-md"
                                >
                                    Lihat Semua
                                </LinkButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="pt-12 pb-12 bg-off-white-gray"
                id="kritikdansaran"
            >
                <div className="container mx-auto px-2">
                    <PageDescription
                        key="home-kontak"
                        title="Kirim Pesan"
                    />
                    <FormFeedback
                        message={flash.message}
                        validateError={errors}
                    />
                </div>
            </section>
        </MainLayout>
    );
}
