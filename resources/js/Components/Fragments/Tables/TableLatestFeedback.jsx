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
                </div>
                <label
                    htmlFor={`feedbackModal${item.id}`}
                    className="btn btn-xs bg-deep-teal border-0 hover:bg-deep-teal/80"
                >
                    Detail
                </label>
                <input
                    type="checkbox"
                    id={`feedbackModal${item.id}`}
                    className="modal-toggle"
                />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Nama: {item.nama}</h3>
                        <h3 className="font-bold text-lg">
                            kontak: {item.kontak}
                        </h3>
                        <p className="font-bold text-lg">
                            Pesan : " {item.pesan} "
                        </p>
                        <div className="modal-action">
                            <label
                                htmlFor={`feedbackModal${item.id}`}
                                className="btn"
                            >
                                Close!
                            </label>
                        </div>
                    </div>
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
