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

export default function FromEditBudaya({ budaya, kategoriBudayas, errors }) {
    console.log(budaya);
    const [nama, setNama] = useState(budaya.nama || "");
    const [kategori, setKategori] = useState(budaya.kategori || "");
    const [deskripsi, setDeskripsi] = useState(budaya.deskripsi || "");
    const [konten, setKonten] = useState(budaya.konten || "");
    const [sumber, setSumber] = useState(budaya.sumber || "");
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
        formData.append("nama", nama || budaya.nama);
        formData.append("kategori_budaya_id", kategori || budaya.kategori_budaya_id);
        formData.append("deskripsi", deskripsi || budaya.deskripsi);
        formData.append("konten", konten || budaya.konten);
        formData.append("thumbnail", selectedImage || budaya.thumbnail);
        formData.append("sumber", sumber || budaya.sumber);

        router.post(`/dashboard/budaya/update/${budaya.id}`, formData);
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
                {renderInputLabel("nama", "Nama")}
                <TextInput
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="block w-full sm:text-sm sm:leading-6"
                />
                {errors.nama && <InputError message={errors.nama} />}
            </div>

            <div className="mb-4">
                {renderInputLabel("deskripsi", "Deskripsi")}
                <textarea
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-400 sm:text-sm sm:leading-6"
                />
                {errors.deskripsi && <InputError message={errors.deskripsi} />}
            </div>

            <div className="mb-4">
                {renderInputLabel("konten", "Konten")}
                <ReactQuill
                    value={konten}
                    onChange={(content, delta, source, editor) => {
                        setKonten(content); // Pass the 'content' parameter instead of 'html'
                    }}
                    style={{ backgroundColor: "white" }}
                    required
                />
                {errors.konten && <InputError message={errors.konten} />}
            </div>

            <div className="mb-4">
                {renderInputLabel("kategori", "Kategori")}
                <select
                    value={
                        kategori !== null ? kategori : budaya.kategori_budaya_id
                    }
                    onChange={(e) => setKategori(e.target.value)}
                    className="select select-bordered w-full max-w-xl"
                    required
                >
                    {kategoriBudayas.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.nama}
                        </option>
                    ))}
                </select>
                {errors.kategori && <InputError message={errors.kategori} />}
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

            <div className="mt-4">
                {renderInputLabel("thumbnail", "Thumbnail")}
                <ImageUploadAlert />
                <img
                    src={
                        selectedImage
                            ? URL.createObjectURL(selectedImage)
                            : "/storage/img/budayas/" + budaya.thumbnail
                    }
                    alt="huhuy"
                    className="object-cover w-1/2 h-1/2 rounded-md mb-2"
                />
                <TextInput
                    type="file"
                    id="gambar"
                    name="gambar"
                    onChange={handleChange}
                />
                {errors.thumbnail && <InputError message={errors.thumbnail} />}
            </div>

            <div className="flex justify-start gap-1 mt-4">
                <Linked
                    href={route("dashboard.budaya")}
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
