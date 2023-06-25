import { Link } from "@inertiajs/react";
import FormattedDate from "../../Elements/FormattedDate";

export default function CardEvent(event) {
    const {
        thumbnail,
        judul_event,
        deskripsi,
        tanggal_mulai, 
        tanggal_selesai,
        url,
        id,
        isDark,
    } = event;

    const formattedDeskripsi =
        deskripsi.length > 100 ? deskripsi.slice(0, 100) + "..." : deskripsi;

    return (
        <div className="flex max-w-xl flex-col items-start justify-between">
            
            <div className="relative flex-shrink-0 h-48 w-full">
                <img
                    className="absolute object-cover h-full w-full rounded-t-md"
                    src={"/storage/img/events/" + thumbnail}
                    alt={judul_event}
                />
            </div>
            <div className="flex items-center gap-x-4 text-xs mt-4">
                <time className="text-gray-400">
                    <FormattedDate date={tanggal_mulai} key="tanggal-mulai" /> •{" "}
                    <FormattedDate
                        date={tanggal_selesai}
                        key="tanggal-selesai"
                    />
                </time>
            </div>
            <div className="group relative">
                <h3
                    className={`mt-3 text-lg font-semibold leading-6 group-hover:text-deep-teal ${
                        isDark ? "text-slate-300" : "text-gray-800"
                    }`}
                >
                    <Link href={url} method="get" data={{ id: id }}>
                        <span className="absolute inset-0" />
                        {judul_event}
                    </Link>
                </h3>
                <p
                    className={`mt-5 line-clamp-3 text-sm leading-6 ${
                        isDark ? "text-slate-300" : "text-gray-800"
                    }`}
                    dangerouslySetInnerHTML={{
                        __html: formattedDeskripsi,
                    }}
                ></p>
            </div>
        </div>
    );
}
