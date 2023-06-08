import Container from "@/components/elements/Container";
import React from "react";

const Unauthorized = () => {
    return (
        <Container bgColor="bg-dark">
            <div className="max-w-[1200px] mx-auto py-10 my-10">
                <div className="text-center">
                    <h1 className="text-white font-bold text-3xl">Access denied!</h1>
                    <h4 className="text-white font-semibold text-xl">You are not authorized to access this page!</h4>
                </div>
            </div>
        </Container>
    );
};

export default Unauthorized;
