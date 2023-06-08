import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { hashDoubleShaOne } from "@/helpers/hashDoubleShaOne";
import Title from "../elements/Title";

const GenHash = () => {
    const [hash, setHash] = useState<string | null>(null);

    const handleSubmit = (values: { password: string }) => {
        const { password } = values;
        const hashedPassword = hashDoubleShaOne(password).hash;
        setHash(hashedPassword);
    };

    return (
        <>
            <div className="mt-10">
                <Title label="Hash password test" className="bg-dark2 px-5 py-2 border-t-2 border-gold mb-5" />
                <Formik initialValues={{ password: "" }} onSubmit={handleSubmit}>
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="password" className="block text-white text-base mb-1">
                                Password:
                            </label>
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                className="bg-dark2 px-4 py-2 text-white placeholder:text-white border-l-4 border-white hover:border-gold focus:border-gold active:border-gold outline-none focus:outline-none duration-200"
                            />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        <button
                            type="submit"
                            className="bg-gold hover:bg-gold/70 duration-200 text-dark text-lg font-bold px-8 py-1"
                        >
                            Hash
                        </button>
                    </Form>
                </Formik>
                {hash && <div>Hash: {hash}</div>}
            </div>
        </>
    );
};

export default GenHash;
