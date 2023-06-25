import FormattedDate from "@/Components/Elements/FormattedDate";
import MainLayout from "@/Layouts/MainLayout";
import { useState } from "react";
import Linked from "@/Components/Elements/Link/Link";
import ListBudaya from "@/Components/Fragments/Listdata/ListBudaya";

export default function DetailBudaya(props) {
    const [selectedImage, setSelectedImage] = useState(null);
    const images = props.gambarBudaya.map((gambar) => ({
        id: gambar.id,
        src: gambar.gambar,
        alt: props.budayaDetail.nama,
    }));

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

            const currentImage = images[currentImageIndex];
            images[currentImageIndex] = image;
            images[newImageIndex] = currentImage;
            setSelectedImage(image);
        } 
    };

    return ( 
        <MainLayout title={props.title} pages={props.pages}>
            <section className="bg-off-white-gray">
                <div className="container mx-auto flex flex-col md:flex-row">
                    <div className="lg:px-16 lg:py-14 md:px-14 md:py-12 flex-grow">
                        <div className="relative lg:rounded-lg overflow-hidden">
                            <img
                                src={
                                    selectedImage
                                        ? `/storage/img/gallery/budayas/${selectedImage.src}`
                                        : `/storage/img/budayas/${props.budayaDetail.thumbnail}`
                                }
                                alt={props.budayaDetail.judul}
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
                                                src={`/storage/img/gallery/budayas/${image.src}`}
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
                                    date={props.budayaDetail.updated_at}
                                    key="tanggal-mulai"
                                />{" "}
                            </time>
                        </div>
                        <p>{props.gambarBudaya.gambar}</p>

                        <h2 className="block mt-1 text-2xl leading-tight font-medium text-black hover:underline">
                            {props.budayaDetail.nama}
                        </h2>
                        <p className="mt-2 text-gray-500 text-md">
                            {props.budayaDetail.deskripsi}
                        </p>
                        <p
                            className="mt-2 text-gray-500 text-md"
                            dangerouslySetInnerHTML={{
                                __html: props.budayaDetail.konten,
                            }}
                        ></p>
                    </div>
                </div>
            </section>
            
            <section className="py-12 bg-off-white-gray">
                <div className="container mx-auto">
                    <div className="max-w-xl mx-auto text-center pt-4 px-4 py-2">
                        <h4
                            className={
                                "font-semibold text-2xl lg:pb-5 sm:text-4xl md:text-5xl mt-3 font-[cursive]"
                            }
                        >
                            Lihat budaya Lainnya
                        </h4> 
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start">
                        <ListBudaya
                            budayas={props.budaya.data}
                            pages={props.pages} 
                        />
                    </div>
                    <div className="flex justify-center mt-5">
                        <Linked
                            href={route("budaya")}
                            variant={'secondary'}
                            size={'btn-sm rounded-md'}
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
