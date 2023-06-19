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
                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex flex-col items-center py-10">
                        <img
                            class="w-24 h-24 mb-3 rounded-full shadow-lg"
                            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(12).webp"
                            alt="Bonnie image"
                        />
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                            Bonnie Green
                        </h5>
                        <span class="text-sm text-gray-500 dark:text-gray-400">
                            Visual Designer
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
