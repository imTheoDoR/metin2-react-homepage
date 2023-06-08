import React from "react";

interface Props {
    children: React.ReactNode;
    bgColor?: string;
    contentCentered?: boolean;
}

const Container: React.FC<Props> = ({ children, bgColor, contentCentered }) => {
    return (
        <div
            className={`${bgColor && bgColor} max-w-7xl xl:max-w-[1400px] mx-auto ${
                contentCentered && "w-96 flex justify-center"
            }`}
        >
            {children}
        </div>
    );
};

export default Container;
