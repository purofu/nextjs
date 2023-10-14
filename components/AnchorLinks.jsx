export const AnchorLinks = ({ size, state, className }) => {
    const baseClasses = "w-36 flex gap-2";
    const conditionalClasses = (size === "m-s" || state === "hover") ? "items-center" : "items-start";
    return (
        <div className={`${baseClasses} ${conditionalClasses} ${className}`}>
            {/* ... */}
        </div>
    );
};