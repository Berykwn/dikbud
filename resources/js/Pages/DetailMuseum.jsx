import MainLayout from "@/Layouts/MainLayout";
import { useState } from "react";

export default function DetailMuseum(props) {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = props.gambarMuseum.map((gambar) => ({
        id: gambar.id,
        src: gambar.gambar,
        alt: props.museumDetail.nama,
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
            <section className="bg-stone-100">
                <div className="container mx-auto flex flex-col md:flex-row">
                    <div className="px-8 py-12">
                        <div className="relative rounded-lg overflow-hidden">
                            <img
                                src={
                                    selectedImage
                                        ? selectedImage.src
                                        : props.museumDetail.thumbnail
                                }
                                alt={props.museumDetail.nama}
                                className="w-full max-w-600 max-h-600 object-cover animate-fade-in cursor-pointer lg:max-w-none"
                                onClick={() => setSelectedImage(null)}
                            />
                        </div>
                        <div className="flex gap-2 mt-4">
                            {images && images.length > 0 ? (
                                <>
                                    {images.map((image) => (
                                        <div
                                            key={image.id}
                                            className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4"
                                        >
                                            <img
                                                className="rounded-lg w-40 h-40 sm:h-full md:h-full lg:h-full xl:h-full cursor-pointer hover:opacity-50 object-cover"
                                                src={image.src}
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
                    <div className="md:w-2/3 p-12 lg:pb-6 md:pb-6 pb-0 flex flex-col justify-cente bg-stone-100">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            {props.museumDetail.nama}
                        </h1>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            {props.museumDetail.kategori} - Ditemukan pada :{" "}
                            {props.museumDetail.tanggal_ditemukan} - Dengan
                            Kondisi {props.museumDetail.kondisi} - Dengan Bobot
                            - {props.museumDetail.ukuran}kg
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            {props.museumDetail.deskripsi}
                        </p>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
