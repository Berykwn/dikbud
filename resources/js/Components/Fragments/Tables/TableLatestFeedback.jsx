import FormattedDate from "@/Components/Elements/FormattedDate";
import Linked from "@/Components/Elements/Link/Link";
import { Link } from "@inertiajs/react";

const TableRow = ({ item }) => {
    return (
        <tr key={item.id}>
            <td className="bg-white">
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{item.nama}</div>
                        <FormattedDate date={item.created_at} />
                    </div>
                </div>
            </td>
            <td className="bg-white">{item.kontak}</td>
            <td className="bg-white">
                <div className="flex flex-wrap gap-1">
                    <Linked href="#" variant={"dodger-blue"} size={"btn-xs"}>
                        Detail
                    </Linked>
                    <Link
                        href="#"
                        className="btn btn-xs border-0 bg-indian-red hover:bg-indian-red/80"
                    >
                        Hapus
                    </Link>
                </div>
            </td>
        </tr>
    );
};

export default function TableLatestFeedback({ data }) {
    return (
        <div className="overflow-x-auto mt-2">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th className="bg-slate-200">Nama</th>
                        <th className="bg-slate-200">Kontak</th>
                        <th className="bg-slate-200">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <TableRow item={item} key={item.id} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
 