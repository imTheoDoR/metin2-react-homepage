import React from "react";

interface Props {
    children: React.ReactNode;
    bgColor?: string;
}

const Container: React.FC<Props> = ({ children, bgColor }) => {
    return <div className={`${bgColor && bgColor} max-w-7xl xl:max-w-[1400px] mx-auto`}>{children}</div>;
};

export default Container;
