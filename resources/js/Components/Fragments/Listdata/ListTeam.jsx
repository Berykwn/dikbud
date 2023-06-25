import PageDescription from "../Partials/DescriptionPage";

export default function ListTeam() {
    const ListHeader = () => {
        const data = {
            title: "Struktur Organisasai",
            // desc: "Sebagai garda terdepan kebudayaan, kami bergerak dengan semangat untuk menjaga kehormatan dan keunikan Kabupaten Lahat.",
        };
        return (
            <PageDescription
                key="event-list"
                title={data.title}
                desc={data.desc}
                isDark
            />
        );
    };

    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-2">
            <ListHeader />
            <div className="grid grid-cols-1 pt-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full h-56 object-cover object-center"
                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(12).webp"
                        alt="Person"
                    />
                    <div className="px-6 py-4 bg-white">
                        <div className="font-bold text-xl mb-2">
                            Iqbal Shodiqul Imamuddin
                        </div>
                        <p className="text-gray-700 text-base">
                            Kepala Dinas Pendidikan dan Kebudayaan Kabupaten Lahat
                        </p>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full h-56 object-cover object-center"
                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(12).webp"
                        alt="Person"
                    />
                    <div className="px-6 py-4 bg-white">
                        <div className="font-bold text-xl mb-2">
                            Iqbal Shodiqul Imamuddin
                        </div>
                        <p className="text-gray-700 text-base">
                            Kepala Dinas Pendidikan dan Kebudayaan Kabupaten Lahat
                        </p>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full h-56 object-cover object-center"
                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(12).webp"
                        alt="Person"
                    />
                    <div className="px-6 py-4 bg-white">
                        <div className="font-bold text-xl mb-2">
                            Iqbal Shodiqul Imamuddin
                        </div>
                        <p className="text-gray-700 text-base">
                            Kepala Dinas Pendidikan dan Kebudayaan Kabupaten Lahat
                        </p>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full h-56 object-cover object-center"
                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(12).webp"
                        alt="Person"
                    />
                    <div className="px-6 py-4 bg-white">
                        <div className="font-bold text-xl mb-2">
                            Iqbal Shodiqul Imamuddin
                        </div>
                        <p className="text-gray-700 text-base">
                            Kepala Dinas Pendidikan dan Kebudayaan Kabupaten Lahat
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
