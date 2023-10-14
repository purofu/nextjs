export const CtaIconButton = ({ type, state, className }) => {
    const baseClasses = "relative flex items-center gap-1";
    const stateClasses = {
        active: "w-10 h-10 justify-center",
        hover: "inline-flex flex-col items-end gap-4",
    };
    return (
        <div className={`${baseClasses} ${stateClasses[state] || ""} ${className}`}>
            {/* ... */}
        </div>
    );
};