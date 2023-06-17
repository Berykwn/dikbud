import PageDescription from "../Partials/DescriptionPage";

export default function ListTeam() {
    const dataArray = [
        {
            name: "John Doe",
            username: "johndoe",
            imageUrl:
                "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia laboriosam ipsa tenetur!",
        },
        {
            name: "Berry Kurniawan",
            username: "Berry Kurniawan",
            imageUrl:
                "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(42).webp",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia laboriosam ipsa tenetur!",
        },
        {
            name: "Berry Kurniawan",
            username: "Berry Kurniawan",
            imageUrl:
                "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(22).webp",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia laboriosam ipsa tenetur!",
        },
        {
            name: "Berry Kurniawan",
            username: "Berry Kurniawan",
            imageUrl:
                "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(12).webp",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia laboriosam ipsa tenetur!",
        },
        {
            name: "Berry Kurniawan",
            username: "Berry Kurniawan",
            imageUrl:
                "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(12).webp",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia laboriosam ipsa tenetur!",
        },
    ];

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
            <div className="grid grid-cols-1 pt-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dataArray.map((data, index) => (
                    <div
                        key={index}
                        className="flex bg-white rounded-2xl"
                    >
                        <div className="flex items-center justify-center bg-gray-200 rounded-2xl">
                            {/* Avatar */}
                            <img
                                src={data.imageUrl}
                                alt={`${data.name}'s Avatar`}
                                className="w-full h-full object-cover rounded-l-2xl"
                            />
                        </div>
                        <div className="flex flex-col p-4">
                            <h2 className="text-xl font-semibold">
                                {data.name}
                            </h2>
                            <p className="text-gray-600">Marketing Manager</p>
                            {/* <p className="text-gray-600 italic mt-2">
                                "Success is not the key to happiness. Happiness
                                is the key to success. If you love what you are
                                doing, you will be successful."
                            </p> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
