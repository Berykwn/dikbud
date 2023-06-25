import React, { useState } from "react";
import { router } from "@inertiajs/react";

import InputLabel from "@/Components/Elements/Input/InputLabel";
import TextInput from "@/Components/Elements/Input/TextInput";
import InputError from "@/Components/Elements/Input/InputError";
import Linked from "@/Components/Elements/Link/Link";
import PrimaryButton from "@/Components/Elements/Button/PrimaryButton";
import ImageUploadAlert from "@/Components/Elements/Alert/ImageUploadAlert";

export default function FormCreatePegawai({ errors }) {
    const [nama, setNama] = useState("");
    const [jabatan, setJabatan] = useState("");
    const [pesan, setPesan] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nama", nama);
        formData.append("jabatan", jabatan);
        formData.append("pesan", pesan);
        formData.append("foto", selectedImage);

        router.post("/dashboard/pegawai/create", formData);
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
                {renderInputLabel("jabatan", "Jabatan")}
                <TextInput
                    type="text"
                    value={jabatan}
                    onChange={(e) => setJabatan(e.target.value)}
                    className="block w-full sm:text-sm sm:leading-6"
                />
                {errors.jabatan && <InputError message={errors.jabatan} />}
            </div>

            <div className="mb-4">
                {renderInputLabel("pesan", "Pesan")}
                <TextInput
                    type="text"
                    value={pesan}
                    onChange={(e) => setPesan(e.target.value)}
                    className="block w-full sm:text-sm sm:leading-6"
                />
                {errors.pesan && <InputError message={errors.pesan} />}
            </div>


            <div className="mt-4">
                {renderInputLabel("foto", "Foto")}
                <ImageUploadAlert />
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt="Selected"
                        className="object-cover w-1/2 h-1/2 rounded-md mb-2"
                    />
                )}
                <TextInput type="file" onChange={handleImageChange} />
                {errors.foto && <InputError message={errors.foto} />}
            </div>
            <div className="flex justify-start gap-1 mt-4">
                <Linked
                    href={route("dashboard.pegawai")}
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
