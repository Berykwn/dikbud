import Icon from "../../Elements/Icon/Icon";

export default function FormSearch({
    searchKeyword,
    handleSearchInputChange,
    pages,
}) {
    return (
        <div className="relative">
            <form>
                <input
                    type="text"
                    value={searchKeyword}
                    onChange={handleSearchInputChange}
                    placeholder={"Cari " + pages + " ..."}
                    className="w-full mx-auto py-2 pr-10 pl-4 rounded-lg border-gray-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-200 focus:outline-none"
                />
                <button
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500"
                    disabled
                >
                    <Icon name={"search"} />
                </button>
            </form>
        </div>
    );
}
