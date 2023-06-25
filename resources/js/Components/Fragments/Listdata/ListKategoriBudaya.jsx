import Linked from "@/Components/Elements/Link/Link";
import DescriptionPage from "../Partials/DescriptionPage";

const renderPageHeader = () => {
    const title = "Pelajari Kebudayaan Kabupaten Lahat.";
    return <DescriptionPage key="event-list" title={title} />;
};

const data = [
    { src: "img/cagarbudaya.jpg" },
    { src: "img/sejarah.jpeg" },
    { src: "img/kesenian.jpeg" },
];

export default function ListKategoriBudaya({ kategoriKebudayaan }) {
    return (
        <div className="container py-12">
            {renderPageHeader()}
            <div className="flex flex-col items-center py-8">
                {kategoriKebudayaan.map((item, index) => (
                    <div
                        key={item.id}
                        className={`flex gap-4 p-4 lg:w-9/12 ${
                            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                        }`}
                    >
                        {/* Image */}
                        <div className="flex-shrink-0 w-56 h-48">
                            <img
                                className="object-cover w-full h-full rounded-lg"
                                src={data[index].src} // Use the src value from the data array
                                alt="Card Image"
                            />
                        </div>
                        <div
                            className={`flex-grow ${
                                index % 2 === 1 ? "justify-end" : ""
                            }`}
                        >
                            <h2
                                className={`${
                                    index % 2 === 1 ? "text-right" : ""
                                } text-xl font-bold`}
                            >
                                {item.nama}
                            </h2>
                            <p
                                className={`${
                                    index % 2 === 1 ? "text-right" : ""
                                } text-gray-600 mt-2`}
                            >
                                {item.deskripsi}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center py-8">
                <Linked
                    href={route("budaya")}
                    variant={"deep-teal"}
                    size={"btn-sm rounded-md"}
                >
                    Mulai belajar
                </Linked>
            </div>
        </div>
    );
}
