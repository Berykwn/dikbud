import InputLabel from "@/Components/Elements/Input/InputLabel";
import TextInput from "@/Components/Elements/Input/TextInput";
import InputError from "@/Components/Elements/Input/InputError";
import Linked from "@/Components/Elements/Link/Link";
import PrimaryButton from "@/Components/Elements/Button/PrimaryButton"; 
import ImageUploadAlert from "@/Components/Elements/Alert/ImageUploadAlert";
import { useState } from "react";
import { router } from "@inertiajs/react";

export default function FormCreateGalleryBerita(props) {
    const { beritas, errors } = props;

    const [judul, setJudul] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("berita_id", judul);
        formData.append("gambar", selectedImage);
        // Add code to handle form submission

        router.post("/dashboard/gallery/berita/create", formData);

    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
        setImageUrl(URL.createObjectURL(file));
    };

    const renderInputLabel = (htmlFor, value) => {
        return (
            <InputLabel
                htmlFor={htmlFor}
                value={value}
                className="text-gray-800 font-medium mb-2"
            />
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                {renderInputLabel("Judul_berita", "Judul Berita")}
                <select
                    value={judul}
                    onChange={(e) => setJudul(e.target.value)}
                    className="select select-bordered w-full max-w-xl"
                    required
                >
                    <option value="">-- Pilih Kategori --</option>
                    {beritas.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.judul}
                        </option>
                    ))}
                </select>
                {errors.judul && <InputError message={errors.judul} />}
            </div>

            <div className="mt-4">
                {renderInputLabel("thumbnail", "Thumbnail")}
                <ImageUploadAlert />
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt="Selected"
                        className="object-cover w-1/2 h-1/2 rounded-md mb-2"
                    />
                )}
                <TextInput type="file" onChange={handleImageChange} />
                {errors.thumbnail && <InputError message={errors.thumbnail} />}
            </div>

            <div className="flex justify-start gap-1 mt-4">
                <Linked
                    href={route("dashboard.galleryberita")}
                    variant={"secondary"}
                    size={"btn-sm rounded-md"}
                >
                    Kembali
                </Linked>
                <PrimaryButton type="submit" className="bg-deep-teal">
                    Tambah
                </PrimaryButton>
            </div>
        </form>
    );
}
