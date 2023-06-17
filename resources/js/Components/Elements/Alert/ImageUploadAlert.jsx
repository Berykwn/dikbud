import Icon from "../Icon/Icon";

export default function ImageUploadAlert() {
    return (
        <div className="alert rounded-md my-2 lg:w-1/2">
            <div>
                <Icon name="info" />
                <span className="text-sm">
                    Format gambar harus jpeg, png, jpg dan maksimal 2MB
                </span>
            </div>
        </div>
    );
}
