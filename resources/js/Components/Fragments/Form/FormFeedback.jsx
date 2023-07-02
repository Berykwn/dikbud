import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import InputLabel from "@/Components/Elements/Input/InputLabel";
import TextInput from "@/Components/Elements/Input/TextInput";
import InputError from "@/Components/Elements/Input/InputError";
import PrimaryButton from "@/Components/Elements/Button/PrimaryButton";
import SuccessAlert from "@/Components/Elements/Alert/SuccessAlert";

export default function FormFeedback({ message, validateError }) {
    const [nama, setNama] = useState("");
    const [kontak, setKontak] = useState("");
    const [pesan, setPesan] = useState("");

    const handleSubmit = () => {
        const data = {
            nama,
            kontak,
            pesan,
        };

        Inertia.post("/kritik-saran", data);
        setNama("");
        setKontak("");
        setPesan("");
    };

    return (
        <form className="max-w-lg mx-auto pt-5">
            {message && <SuccessAlert message={message} />}
            <div className="flex flex-wrap -mx-3 mb-6 mt-2">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <InputLabel
                        htmlFor="nama"
                        value="Nama"
                        className="text-gray-800 font-medium mb-2"
                    />
                    <TextInput
                        id="nama"
                        type="text"
                        value={nama}
                        autoComplete="nama"
                        placeholder="Masukkan Nama Anda"
                        onChange={(nama) => setNama(nama.target.value)}
                        className="appearance-none block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <InputError message={validateError.nama} className="mt-2" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <InputLabel
                        htmlFor="kontak"
                        value="Kontak"
                        className="block text-gray-800 font-medium mb-2"
                    />
                    <TextInput
                        id="kontak"
                        type="text"
                        value={kontak}
                        autoComplete="kontak"
                        placeholder="Masukkan Kontak Anda"
                        onChange={(kontak) => setKontak(kontak.target.value)}
                        className="appearance-none block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <InputLabel
                        htmlFor="kritik dan saran"
                        value="Pesan"
                        className="text-gray-800 font-medium mb-2"
                    /> 
                    <textarea
                        name="pesan"
                        id="pesan"
                        onChange={(pesan) => setPesan(pesan.target.value)}
                        value={pesan}
                        rows="6"
                        placeholder="Tulis kritik atau saran Anda di sini"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    ></textarea>
                    <InputError
                        message={validateError.pesan}
                        className="mt-2"
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <PrimaryButton
                    onClick={() => handleSubmit()}
                    type="submit"
                    className="py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Kirim
                </PrimaryButton>
            </div>
        </form>
    );
}
