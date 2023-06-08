import Container from "@/components/elements/Container";
import React from "react";

const NotFound = () => {
    return (
        <Container bgColor="bg-dark">
            <div className="max-w-[1200px] mx-auto py-10 my-10">
                <div className="text-center">
                    <h1 className="text-white font-bold text-3xl">Error 404</h1>
                    <h4 className="text-white font-semibold text-xl">This page was not found.</h4>
                </div>
            </div>
        </Container>
    );
};

export default NotFound;
