import Icon from "../Icon/Icon";

export default function PageInformation({ children, ...props }) {
    return (
        <div className=""> 
            <div>
                {/* <Icon name={"success-alert"} /> */}
                <span className="text-white">{children}</span>
            </div>
        </div>
    );
}
