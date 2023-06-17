import React from "react";
import { Fragment } from "react";
import Linked from "@/Components/Elements/Link/Link";
import { Link } from "@inertiajs/react";
import FormattedDate from "../../Elements/FormattedDate";
import CardBerita from "../Card/CardBerita";

export default function LatestBerita({ beritas, isDark }) {
    return (
        <Fragment>
            <div className="flex flex-col lg:gap-4 md:gap-2 md:flex-row">
                <div className="w-full md:w-3/4 lg:px-6 lg:pt-8 lg:pb-14 md:pb-7 mt-8 md:mt-0">
                    {beritas.slice(0, 1).map((berita) => (
                        <article 
                            key={berita.id}
                            className="flex max-w-xl flex-col items-start justify-between"
                        >
                            <div className="relative flex-shrink-0 h-96 w-full">
                                <img
                                    className="absolute object-cover h-full w-full rounded-t-md"
                                    src={`/storage/img/beritas/${berita.thumbnail}`}
                                    alt={berita.judul}
                                />
                            </div>
                            <div className="flex items-center gap-x-4 text-xs mt-4">
                                <time className="text-neutral-400">
                                    <FormattedDate
                                        date={berita.updated_at}
                                        key="tanggal-mulai"
                                    />
                                </time>
                                <span className="text-neutral-400">
                                    Penulis: {berita.penulis}
                                </span>
                            </div>
                            <div className="group relative">
                                <h3
                                    className={`mt-3 text-lg font-semibold leading-6 group-hover:text-deep-teal ${
                                        isDark
                                            ? "text-slate-300"
                                            : "text-gray-800"
                                    }`}
                                >
                                    <Link
                                        href={"/"}
                                        method="get"
                                        data={{ id: berita.id }}
                                    >
                                        <span className="absolute inset-0 text-justify " />
                                        {berita.judul}
                                    </Link>
                                </h3>
                                <p
                                    className={`mt-5 line-clamp-3 text-sm leading-6 text-justify ${
                                        isDark
                                            ? "text-slate-300"
                                            : "text-gray-800"
                                    }`}
                                    dangerouslySetInnerHTML={{
                                        __html: berita.konten.slice(0, 800),
                                    }}
                                ></p>
                            </div>
                        </article>
                    ))}
                </div>
                
                <div className="w-full lg:px-6 lg:pt-8 pb-14 mt-8 md:mt-0">
                    <div className="max-w-7xl">
                        <h1 className="text-2xl font-bold leading-tight font-[cursive]">
                            Berita Kebudayaan Kabupaten Lahat.
                        </h1>
                        <p className="font-semibold mt-1">
                            Temukan berita terkini seputar kebudayaan Kabupaten
                            Lahat dan jangan lewatkan setiap ragam kegiatan
                            budaya yang menarik untuk diikuti dan diapresiasi.
                        </p>
                    </div> 
                    <div className="grid grid-cols-1 pt-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-6">
                        {beritas.slice(1).map((berita) => (
                            <div key={berita.id} className="block">
                                <CardBerita
                                    {...berita}
                                    url={route("berita.detail")}
                                    isDark={isDark}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center pt-8">
                        <Linked
                            href={route("event")}
                            variant={"deep-teal"}
                            size={"btn-sm rounded-md"}
                        >
                            Lihat Semua Berita
                        </Linked>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
