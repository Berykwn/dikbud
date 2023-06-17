export default function AlertNotFound({children}) {
    return (
        <div className="alert bg-indian-red shadow-md rounded-md">
            <span className=" text-white">
                {children}
            </span>
        </div>
    );
}
