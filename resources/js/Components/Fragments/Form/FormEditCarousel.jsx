import React, { useState } from "react";
import { router } from "@inertiajs/react";

import InputLabel from "@/Components/Elements/Input/InputLabel";
import TextInput from "@/Components/Elements/Input/TextInput";
import InputError from "@/Components/Elements/Input/InputError";
import Linked from "@/Components/Elements/Link/Link";
import PrimaryButton from "@/Components/Elements/Button/PrimaryButton";
import ImageUploadAlert from "@/Components/Elements/Alert/ImageUploadAlert";

export default function FormEditCarousel({ carousel, errors }) {
    const [name, setName] = useState(carousel.name || "");
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
        formData.append("name", name || carousel.name);
        formData.append("img", selectedImage || carousel.thumbnail);

        router.post(`/dashboard/banner/update/${carousel.id}`, formData);
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full sm:text-sm sm:leading-6"
                />
                {errors.name && <InputError message={errors.name} />}
            </div>
            <div className="mt-4">
                {renderInputLabel("thumbnail", "Thumbnail")}
                <ImageUploadAlert />
                <img
                    src={
                        selectedImage
                            ? URL.createObjectURL(selectedImage)
                            : "/storage/img/carousels/" + carousel.img
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
                {errors.img && <InputError message={errors.img} />}
            </div>

            <div className="flex justify-start gap-1 mt-4">
                <Linked
                    href={route("dashboard.carousel")}
                    variant={"secondary"}
                    size={"btn-sm rounded-md"}
                >
                    Kembali
                </Linked>
                <PrimaryButton type="submit" className="bg-deep-teal">
                    Simpan
                </PrimaryButton>
            </div>
        </form>
    );
}
