import React from "react";
import { IconType } from "react-icons";

interface Props {
    icon?: IconType;
    label: string | JSX.Element;
    className?: string;
}

const Title: React.FC<Props> = ({ icon: Icon, label, className }) => {
    return (
        <div className={className}>
            {Icon && <Icon />}
            <span className="text-2xl font-bold uppercase">{label}</span>
        </div>
    );
};

export default Title;
