export const ContainerLink = ({{
    state,
    className,
    secondaryCtaInteractiveIconsColor,
    secondaryCtaIcon = <IconComponentNode className="w-5 h-5 relative" />,
}}) => {{
    const bgColor = 
        ["hover", "state-3"].includes(state)
            ? "bg-secondarysteelnovartis-steel-60"
            : "bg-secondarysteelnovartis-steel-40";

    return (
        <div className={`inline-flex flex-col items-start px-9 py-5 relative ${bgColor} ${className}`}>
            <SecondaryCta
                className="flex-shrink-0"
                destination="internal"
                icon={secondaryCtaIcon}
                interactiveIconsColor={secondaryCtaInteractiveIconsColor}
                linkTitleClassName="text-neutralswhite"
                size="nineteen"
                text="Patient Qualification Checklist"
                type="active"
            />
        </div>
    );
}};