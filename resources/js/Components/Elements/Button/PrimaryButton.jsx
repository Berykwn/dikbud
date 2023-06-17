export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-2 py-1 bg-dodger-blue border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-dodger-blue/80 focus:bg-dodger-blue/80 active:bg-dodger-blue/80 transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button> 
    );
}
