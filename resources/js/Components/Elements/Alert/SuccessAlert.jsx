import Icon from "../Icon/Icon";

export default function SuccessAlert({ message, variant }) {
    return (
        <div className={`alert bg-deep-teal shadow-sm mb-2 ${variant}`}> 
            <div>
                <Icon name={"success-alert"} />
                <span className="text-white">{message}</span>
            </div>
        </div>
    );
}
