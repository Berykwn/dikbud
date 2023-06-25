import React, { useState } from "react";
import FormattedDate from "../Components/Elements/FormattedDate";
import MainLayout from "../Layouts/MainLayout";
import ListBerita from "../Components/Fragments/Listdata/ListBerita";
import MyLink from "../Components/Elements/Link/Link";

export default function DetailBeritaPage({
    title,
    pages,
    berita,
    gambarBerita,
    beritaDetail,
}) {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        if (!selectedImage) {
            setSelectedImage(image);
        } else {
            const currentImageIndex = images.findIndex(
                (img) => img.id === selectedImage.id
            );
            const newImageIndex = images.findIndex(
                (img) => img.id === image.id
            );

            const updatedImages = images.map((img, index) => {
                if (index === currentImageIndex) {
                    return image;
                } else if (index === newImageIndex) {
                    return selectedImage;
                } else {
                    return img;
                }
            });

            setSelectedImage(image);
            setImages(updatedImages);
        }
    };

    const images = gambarBerita.map((gambar) => ({
        id: gambar.id,
        src: gambar.gambar,
        alt: beritaDetail.nama,
    }));

    return (
        <MainLayout title={title} pages={pages}>
            <section className="bg-off-white-gray">
                <div className="container mx-auto flex flex-col md:flex-row">
                    <div className="lg:px-16 lg:py-14 md:px-14 md:py-12 flex-grow">
                        <div className="relative lg:rounded-lg overflow-hidden">
                            <img
                                src={
                                    selectedImage
                                        ? `/storage/img/gallery/beritas/${selectedImage.src}`
                                        : `/storage/img/beritas/${beritaDetail.thumbnail}`
                                }
                                alt={beritaDetail.judul}
                                className="w-full max-w-600 max-h-600 object-cover animate-fade-in cursor-pointer lg:max-w-none"
                                onClick={() => setSelectedImage(null)}
                            />
                        </div>
                        <div className="flex mt-4">
                            {images && images.length > 0 ? (
                                <>
                                    {images.map((image) => (
                                        <div
                                            key={image.id}
                                            className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4"
                                        >
                                            <img
                                                className="lg:rounded-lg w-40 h-40 sm:h-full md:h-full lg:h-full xl:h-full cursor-pointer hover:opacity-50 object-cover"
                                                src={`/storage/img/gallery/beritas/${image.src}`}
                                                alt={image.alt}
                                                onClick={() =>
                                                    handleImageClick(image)
                                                }
                                            />
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <div
                                    className="bg-red-300 border border-red-400 mt-2 px-4 py-3 rounded-md flex items-center justify-center"
                                    role="alert"
                                >
                                    <span className="font-bold">
                                        Saat ini belum ada foto lain yang
                                        terkait!
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="px-14 py-12 pl-0 max-w-md mx-auto overflow-hidden md:max-w-2xl">
                        <div className="flex items-center gap-x-2 text-xs mt-4">
                            <time className="text-slate-500">
                                <FormattedDate
                                    date={beritaDetail.updated_at}
                                    key="tanggal-mulai"
                                />{" "}
                            </time>
                            <span className="text-slate-500">
                                • Author: {beritaDetail.penulis}
                            </span>
                        </div>

                        <h2 className="block mt-1 text-2xl leading-tight font-medium text-black hover:underline">
                            {beritaDetail.judul}
                        </h2>
                        <p className="mt-2 text-gray-500 text-md">
                            {beritaDetail.deskripsi}
                        </p>
                        <p
                            className="mt-2 text-gray-500 text-md"
                            dangerouslySetInnerHTML={{
                                __html: beritaDetail.konten,
                            }}
                        ></p>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-off-white-gray">
                <div className="container mx-auto">
                    <div className="max-w-xl mx-auto text-center pt-4 px-4 py-2">
                        <h4 className="font-semibold text-2xl lg:pb-5 sm:text-4xl md:text-5xl mt-3 font-[cursive]">
                            Lihat Berita Lainnya
                        </h4>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start">
                        <ListBerita beritas={berita.data} pages={pages} />
                    </div>
                    <div className="flex justify-center py-8">
                        <MyLink
                            href={route("berita")}
                            variant="deep-teal"
                            size="btn-sm rounded-md"
                        >
                            Lihat Semua Berita
                        </MyLink>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
