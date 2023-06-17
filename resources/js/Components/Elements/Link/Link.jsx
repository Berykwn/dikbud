import { Link } from "@inertiajs/react";

export default function Linked({
    href,
    children,
    variant,
    data,
    size,
    method,
}) {
    let className = "";

    switch (variant) {
        case "primary":
            className = `btn ${size} bg-[#495371] hover:bg-lime-600 border-none`;
            break;
        case "secondary":
            className = `btn ${size} bg-slate-600 hover:bg-slate-700 border-none`;
            break;
        case "danger":
            className = `btn ${size} bg-#EA5455 hover:bg-rose-600 border-none`;
            break;
        case "bluish-gray":
            className = `btn ${size} bg-bluish-gray hover:bg-bluish-gray/80 border-none`;
            break;
        case "deep-teal":
            className = `btn ${size} bg-deep-teal hover:bg-deep-teal/80 border-none`;
            break;
        case "steel-blue":
            className = `btn ${size} bg-steel-blue hover:bg-steel-blue/80 border-none`;
            break;
        case "dodger-blue":
            className = `btn ${size} bg-dodger-blue hover:bg-dodger-blue/80 border-none`;
            break;
        default:
            break;
    }

    return (
        <Link href={href} data={data} method={method} className={className}>
            {children}
        </Link>
    );
}
