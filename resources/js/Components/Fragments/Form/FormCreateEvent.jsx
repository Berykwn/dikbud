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

export default function FormCreateEvent({ errors }) {
    const [judul_event, setJudulEvent] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [tempat, setTempat] = useState("");
    const [tanggal_mulai, setTanggalMulai] = useState("");
    const [tanggal_selesai, setTanggalSelesai] = useState("");
    const [kategori, setKategori] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("judul_event", judul_event);
        formData.append("deskripsi", deskripsi);
        formData.append("tempat", tempat);
        formData.append("tanggal_mulai", tanggal_mulai);
        formData.append("tanggal_selesai", tanggal_selesai);
        formData.append("thumbnail", selectedImage);
        formData.append("kategori", kategori);

        router.post("/dashboard/events/create", formData);
    };

    const handleQuillChange = (value) => {
        setDeskripsi(value);
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
                {renderInputLabel("judul_event", "Judul Event")}
                <TextInput
                    type="text"
                    value={judul_event}
                    onChange={(e) => setJudulEvent(e.target.value)}
                    className="block w-full sm:text-sm sm:leading-6"
                />
                {errors.judul_event && (
                    <InputError message={errors.judul_event} />
                )}
            </div>
            <div className="mb-4">
                {renderInputLabel("deskripsi", "Deskripsi")}
                <ReactQuill
                    value={deskripsi}
                    onChange={handleQuillChange}
                    style={{ backgroundColor: "white" }}
                />
                {errors.deskripsi && <InputError message={errors.deskripsi} />}
            </div>
            <div className="mb-4">
                {renderInputLabel("tempat", "Tempat")}
                <TextInput
                    type="text"
                    value={tempat}
                    onChange={(e) => setTempat(e.target.value)}
                    className="block w-full sm:text-sm sm:leading-6"
                />
                {errors.tempat && <InputError message={errors.tempat} />}
            </div>
            <div className="flex flex-col md:flex-row gap-2">
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
                    {errors.kategori && (
                        <InputError message={errors.kategori} />
                    )}
                </div>
                <div className="mb-4 md:w-1/2">
                    <div className="flex flex-wrap">
                        <div className="mr-2">
                            {renderInputLabel("tanggal_mulai", "Tanggal Mulai")}
                            <TextInput
                                type="date"
                                value={tanggal_mulai}
                                onChange={(e) =>
                                    setTanggalMulai(e.target.value)
                                }
                                className="block w-full sm:text-sm sm:leading-6"
                            />
                            {errors.tanggal_mulai && (
                                <InputError message={errors.tanggal_mulai} />
                            )}
                        </div>
                        <div>
                            {renderInputLabel(
                                "tanggal_selesai",
                                "Tanggal Selesai"
                            )}
                            <TextInput
                                type="date"
                                value={tanggal_selesai}
                                onChange={(e) =>
                                    setTanggalSelesai(e.target.value)
                                }
                                className="block w-full sm:text-sm sm:leading-6"
                            />
                            {errors.tanggal_selesai && (
                                <InputError message={errors.tanggal_selesai} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div>
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
                    href={route("dashboard.events")}
                    variant={"secondary"}
                    size={"btn-sm rounded-md"}
                >
                    Kembali
                </Linked>
                <PrimaryButton type="submit">Tambah</PrimaryButton>
            </div>
        </form>
    );
}
