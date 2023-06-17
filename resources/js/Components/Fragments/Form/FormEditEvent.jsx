import { useState } from "react";
import { router } from "@inertiajs/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import InputLabel from "@/Components/Elements/Input/InputLabel";
import TextInput from "@/Components/Elements/Input/TextInput";
import InputError from "@/Components/Elements/Input/InputError";
import PrimaryButton from "@/Components/Elements/Button/PrimaryButton";
import Linked from "@/Components/Elements/Link/Link";
import ImageUploadAlert from "@/Components/Elements/Alert/ImageUploadAlert";

export default function FormEditEvent({ event, errors }) {
    const [judul_event, setJudulEvent] = useState(event.judul_event || "");
    const [deskripsi, setDeskripsi] = useState(event.deskripsi || "");
    const [tempat, setTempat] = useState(event.tempat || "");
    const [tanggal_mulai, setTanggalMulai] = useState(
        event.tanggal_mulai || ""
    );
    const [tanggal_selesai, setTanggalSelesai] = useState(
        event.tanggal_selesai || ""
    );
    const [kategori, setKategori] = useState(event.kategori || "");
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
        formData.append("judul_event", judul_event || event.judul_event);
        formData.append("deskripsi", deskripsi || event.deskripsi);
        formData.append("tempat", tempat || event.tempat);
        formData.append("tanggal_mulai", tanggal_mulai || event.tanggal_mulai);
        formData.append(
            "tanggal_selesai",
            tanggal_selesai || event.tanggal_selesai
        );
        formData.append("gambar", selectedImage || event.gambar);
        formData.append("kategori", kategori || event.kategori);

        router.post(`/dashboard/event/update/${event.id}`, formData);
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
                    required
                />
                <InputError message={errors.judul_event} />
            </div>
            <div className="mb-4">
                {renderInputLabel("deskripsi", "Deskripsi")}
                <ReactQuill
                    value={deskripsi}
                    onChange={(content, delta, source, editor) => {
                        setDeskripsi(content); // Pass the 'content' parameter instead of 'html'
                    }}
                    style={{ backgroundColor: "white" }}
                    required
                />
                <InputError message={errors.deskripsi} />
            </div>
            <div className="mb-4">
                {renderInputLabel("tempat", "Tempat")}
                <TextInput
                    type="text"
                    value={tempat}
                    onChange={(e) => setTempat(e.target.value)}
                    className="block w-full sm:text-sm sm:leading-6"
                    required
                />
                <InputError message={errors.tempat} />
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
                    <InputError message={errors.kategori} />
                </div>
                <div className="mb-4 md:w-1/2">
                    <div className="flex flex-wrap">
                        <div className="mr-2">
                            {renderInputLabel("tanggal_mulai", "Tanggal Mulai")}

                            <TextInput
                                type="date"
                                value={tanggal_mulai.split(" ")[0]}
                                onChange={(e) =>
                                    setTanggalMulai(e.target.value)
                                }
                                className="block w-full sm:text-sm sm:leading-6"
                                required
                            />
                        </div>
                        <div>
                            {renderInputLabel(
                                "tanggal_selesai",
                                "Tanggal Selesai"
                            )}
                            <TextInput
                                type="date"
                                value={tanggal_selesai.split(" ")[0]}
                                onChange={(e) =>
                                    setTanggalSelesai(e.target.value)
                                }
                                className="block w-full sm:text-sm sm:leading-6"
                                required
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {renderInputLabel("thumbnail", "Thumbnail")}
                <ImageUploadAlert />
                <img
                    src={
                        selectedImage
                            ? URL.createObjectURL(selectedImage)
                            : "/storage/img/events/" + event.gambar
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
                <InputError message={errors.gambar} />
            </div>
            <div className="flex justify-start gap-1 mt-4">
                <Linked
                    href={route("dashboard.events")}
                    variant={"secondary"}
                    size={"btn-sm rounded-md"}
                >
                    Kembali
                </Linked>
                <PrimaryButton type="submit">Simpan</PrimaryButton>
            </div>
        </form>
    );
}
