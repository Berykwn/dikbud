import React, { useState } from "react";
import { router } from "@inertiajs/react";

import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import InputLabel from "@/Components/Elements/Input/InputLabel";
import TextInput from "@/Components/Elements/Input/TextInput";
import InputError from "@/Components/Elements/Input/InputError";
import Linked from "@/Components/Elements/Link/Link";
import PrimaryButton from "@/Components/Elements/Button/PrimaryButton";
import ImageUploadAlert from "@/Components/Elements/Alert/ImageUploadAlert";

export default function FormCreateBerita({ errors, auth }) {
    const [judul, setJudul] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [konten, setKonten] = useState("");
    const [kategori, setKategori] = useState("");
    const [sumber, setSumber] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("judul", judul);
        formData.append("deskripsi", deskripsi);
        formData.append("konten", konten);
        formData.append("thumbnail", selectedImage);
        formData.append("kategori", kategori);
        formData.append("penulis", auth);
        formData.append("sumber", sumber);

        router.post("/dashboard/berita/create", formData);
    };

    const handleQuillChange = (value) => {
        setKonten(value);
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
        <form
            onSubmit={handleSubmit}
            method="POST"
            encType="multipart/form-data"
        >
            <div className="mb-4">
                {renderInputLabel("judul_berita", "Judul Berita")}
                <TextInput
                    type="text"
                    value={judul}
                    onChange={(e) => setJudul(e.target.value)}
                    className="block w-full sm:text-sm sm:leading-6"
                />
                {errors.judul && <InputError message={errors.judul} />}
            </div>
            <div className="mb-4">
                {renderInputLabel("deskripsi", "Deskripsi")}
                <TextInput
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                    className="block w-full sm:text-sm sm:leading-6"
                />
                {errors.deskripsi && <InputError message={errors.deskripsi} />}
            </div>
            <div className="mb-4">
                {renderInputLabel("kontent", "Kontent")}
                <ReactQuill
                    value={konten}
                    onChange={handleQuillChange}
                    style={{ backgroundColor: "white" }}
                />
                {errors.konten && <InputError message={errors.konten} />}
            </div>
            <div className="mb-4">
                {renderInputLabel("sumber", "Sumber")}
                <TextInput
                    type="text"
                    value={sumber}
                    onChange={(e) => setSumber(e.target.value)}
                    className="block w-full sm:text-sm sm:leading-6"
                />
                {errors.sumber && <InputError message={errors.sumber} />}
            </div>
            <div className="mb-4">
                {renderInputLabel("kategori", "Kategori")}
                <select
                    value={kategori}
                    onChange={(e) => setKategori(e.target.value)}
                    className="select select-bordered w-full max-w-xl"
                    required
                >
                    <option value="">-- Pilih Kategori --</option>
                    <option value="Musik">Musik</option>
                    <option value="Olahraga">Olahraga</option>
                    <option value="Kuliner">Kuliner</option>
                    <option value="Pameran">Pameran</option>
                    <option value="Festival">Festival</option>
                </select>
                {errors.kategori && <InputError message={errors.kategori} />}
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
                    href={route("dashboard.berita")}
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
