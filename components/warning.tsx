import { FC } from "react";

interface WarningProps {
    title: string;
    className?: string;
}

const Warning: FC<WarningProps> = (props) => {
    const { title, children, ...compProps } = props;
    return (
        <div
            {...compProps}
            className={
                "border-2 border-red-600 rounded-lg bg-gray-800 p-4 " +
                props.className
            }
        >
            <h2 className="font-bold">{title}</h2>
            <p>{children}</p>
        </div>
    );
};

export default Warning;
