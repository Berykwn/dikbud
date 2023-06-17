import { Link } from "@inertiajs/react";

export default function PageDescription({ title, desc, url, isDark }) {
    const titleClasses = `font-semibold text-2xl lg:pb-5 sm:text-4xl md:text-5xl font-[cursive] ${
        isDark ? "text-gray-200" : ""
    }`;
    const descClasses = `text-lg mb-2 text-justify ${
        isDark ? "text-gray-200" : ""
    }`;

    return (
        <div className="max-w-xl mx-auto text-center pt-4 px-4 py-2">
            <h4 className={titleClasses}>{title}</h4>
            <p className={descClasses}>
                {desc}
                {url && (
                    <>
                        <Link
                            href={url}
                            className="text-deep-teal hover:text-deep-teal/70"
                        >
                            {" "}
                            Lihat selengkapnya..
                        </Link>
                    </>
                )}
            </p>
        </div>
    );
}
