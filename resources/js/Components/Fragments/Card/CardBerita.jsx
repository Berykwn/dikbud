import { Link } from "@inertiajs/react";
import FormattedDate from "../../Elements/FormattedDate";

export default function CardBerita({
    judul,
    deskripsi,
    thumbnail,
    penulis,
    tanggal,
    url,
    id,
    isDark,
}) {
    const formattedDeskripsi =
        deskripsi.length > 100 ? deskripsi.slice(0, 100) + "..." : deskripsi;

    return (
        <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="relative flex-shrink-0 h-48 w-full">
                <img
                    className="absolute object-cover h-full w-full rounded-t-md"
                    src={`/storage/img/beritas/${thumbnail}`}
                    alt={judul}
                />
            </div>
            <div className="flex items-center gap-x-4 text-xs mt-4">
                <time className="text-neutral-400">
                    <FormattedDate date={tanggal} key="tanggal-mulai" />
                </time>
                <span className="text-neutral-400">Penulis: {penulis}</span>
                {/* <span
                    className={`relative rounded-full bg-neutral-400 px-3 py-1.5 font-medium ${
                        isDark ? "text-neutral-700" : "text-neutral-200"
                    }`}
                >
                    {penulis}
                </span> */}
            </div>
            <div className="group relative">
                <h3
                    className={`mt-3 text-lg font-semibold leading-6 group-hover:text-deep-teal ${
                        isDark ? "text-slate-300" : "text-gray-800"
                    }`}
                >
                    <Link href={url} method="get" data={{ id: id }}>
                        <span className="absolute inset-0" />
                        {judul}
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
        </article>
    );
}
