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

export default function FormEditBerita({ berita, errors, auth, processing }) {
    const [judul, setJudul] = useState(berita.judul || "");
    const [deskripsi, setDeskripsi] = useState(berita.deskripsi || "");
    const [konten, setKonten] = useState(berita.konten || "");
    const [kategori, setKategori] = useState(berita.kategori || "");
    const [sumber, setSumber] = useState(berita.sumber || "");
    const [selectedImage, setSelectedImage] = useState(null);

    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setSelectedImage(selectedFile);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("judul", judul || berita.judul);
        formData.append("deskripsi", deskripsi || berita.deskripsi);
        formData.append("konten", konten || berita.konten);
        formData.append("kategori", kategori || berita.kategori);
        formData.append("penulis", auth);
        formData.append("sumber", sumber || berita.sumber);

        const thumbnailFile = selectedImage || berita.thumbnail;
        if (thumbnailFile instanceof File) {
            const allowedFormats = ["image/jpeg", "image/jpg", "image/png"];
            if (allowedFormats.includes(thumbnailFile.type)) {
                formData.append("thumbnail", thumbnailFile);
            } else {
                // Invalid file format, handle the error
                console.log("Invalid thumbnail file format");
                return;
            }
        }

        router.post(`/dashboard/berita/update/${berita.id}`, formData);
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
                {renderInputLabel("deskripsi", "Deskripsi")}
                <ReactQuill
                    value={konten}
                    onChange={(content) => {
                        setKonten(content); // Pass the 'content' parameter instead of 'html'
                    }}
                    style={{ backgroundColor: "white" }}
                    required
                />
                <InputError message={errors.konten} />
            </div>
            <div className="mb-4">
                {renderInputLabel("sumber", "Sumber")}
                <TextInput
                    type="text"
                    value={sumber}
                    onChange={(e) => setSumber(e.target.value)}
                    className="block w-full sm:text-sm sm:leading-6"
                    required
                />
                <InputError message={errors.sumber} />
            </div>
            <div className="mb-4 md:w-1/2">
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
                <InputError message={errors.kategori} />
            </div>
            <div>
                {renderInputLabel("thumbnail", "Thumbnail")}
                <ImageUploadAlert />
                <img
                    src={
                        selectedImage
                            ? URL.createObjectURL(selectedImage)
                            : "/storage/img/beritas/" + berita.thumbnail
                    }
                    alt="huhuy"
                    className="object-cover w-1/2 h-1/2 rounded-md mb-2"
                />
                <TextInput
                    type="file"
                    name="thumbnail"
                    onChange={handleChange}
                />
                <InputError message={errors.thumbnail} />
            </div>
            <div className="flex justify-start gap-1 mt-4">
                <Linked
                    href={route("dashboard.berita")}
                    variant={"secondary"}
                    size={"btn-sm rounded-md"}
                >
                    Kembali
                </Linked>
                <PrimaryButton type="submit" disabled={processing}>
                    Simpan
                </PrimaryButton>
            </div>
        </form>
    );
}
