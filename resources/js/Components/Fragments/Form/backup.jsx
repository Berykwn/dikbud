import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import InputLabel from "@/Components/Elements/Input/InputLabel";
import TextInput from "@/Components/Elements/Input/TextInput";
import InputError from "@/Components/Elements/Input/InputError";
import Linked from "@/Components/Elements/Link/Link";
import PrimaryButton from "@/Components/Elements/Button/PrimaryButton";

const FormCreateEvent = ({ errors }) => {
    const [formValues, setFormValues] = useState({
        judul_event: "",
        deskripsi: "",
        tempat: "",
        tanggal_mulai: "",
        tanggal_selesai: "",
        gambar: null,
        kategori: "",
    });

    const {
        judul_event,
        deskripsi,
        tempat,
        tanggal_mulai,
        tanggal_selesai,
        kategori,
    } = formValues;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleQuillChange = (value) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            deskripsi: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(formValues).forEach(([key, value]) => {
            formData.append(key, value);
        });
        Inertia.post("/dashboard/createevent", formData);
    };

    const inputLabel = "text-gray-800 font-medium mb-2";
    const textInput =
        "block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-400 sm:text-sm sm:leading-6";

    return (
        <form
            onSubmit={handleSubmit}
            method="POST"
            encType="multipart/form-data"
            className="w-full"
        >
            <div className="mb-4">
                <InputLabel
                    htmlFor="judul_event"
                    value="Judul Event"
                    className={inputLabel}
                />
                <TextInput
                    type="text"
                    name="judul_event"
                    value={judul_event}
                    onChange={handleChange}
                    className={textInput}
                />
                    <InputError message={errors.judul_event} />
            </div>
            <div className="mb-4">
                <InputLabel
                    htmlFor="deskripsi"
                    value="Deskripsi"
                    className={inputLabel}
                />
                <ReactQuill
                    value={deskripsi}
                    onChange={handleQuillChange}
                    style={{ backgroundColor: "white" }}
                />
                {errors.deskripsi && <InputError message={errors.deskripsi} />}
            </div>
            <div className="mb-4">
                <InputLabel
                    htmlFor="tempat"
                    value="Tempat"
                    className={inputLabel}
                />
                <TextInput
                    type="text"
                    name="tempat"
                    value={tempat}
                    onChange={handleChange}
                    className={textInput}
                />
                {errors.tempat && <InputError message={errors.tempat} />}
            </div>
            <div className="mb-4">
                <InputLabel
                    htmlFor="kategori"
                    value="Kategori"
                    className={inputLabel}
                />
                <TextInput
                    type="text"
                    name="kategori"
                    value={kategori}
                    onChange={handleChange}
                    className={textInput}
                />
                {errors.kategori && <InputError message={errors.kategori} />}
            </div>
            <div className="flex flex-wrap justify-start">
                <div className="mr-2">
                    <InputLabel
                        htmlFor="tanggal_mulai"
                        value="Tanggal Mulai"
                        className={inputLabel}
                    />
                    <TextInput
                        type="date"
                        name="tanggal_mulai"
                        value={tanggal_mulai}
                        onChange={handleChange}
                        className={textInput}
                    />
                </div>
                <div>
                    <InputLabel
                        htmlFor="tanggal_selesai"
                        value="Tanggal Selesai"
                        className={inputLabel}
                    />
                    <TextInput
                        type="date"
                        name="tanggal_selesai"
                        value={tanggal_selesai}
                        onChange={handleChange}
                        className={textInput}
                    />
                </div>
            </div>
            <div className="mt-4">
                <InputLabel
                    htmlFor="gambar"
                    value="Thumbnail"
                    className="text-gray-800 font-medium mb-2"
                />
                <TextInput
                    type="file"
                    name="gambar"
                    onChange={(e) =>
                        setFormValues({
                            ...formValues,
                            gambar: e.target.files[0],
                        })
                    }
                />
            </div>
            <div className="flex justify-start gap-1 mt-4">
                <Linked
                    href={route("dashboard.events")}
                    variant={"secondary"}
                    size={"btn-sm rounded-md"}
                >
                    Kembali
                </Linked>
                <PrimaryButton type="submit">Tambah Event</PrimaryButton>
            </div>
        </form>
    );
};

export default FormCreateEvent;
