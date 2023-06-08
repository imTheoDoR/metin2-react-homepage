import React from "react";
import { Formik, FormikHelpers, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import Title from "./elements/Title";
import Link from "next/link";
import Container from "./elements/Container";
import axios from "axios";
import Swal from "sweetalert2";

interface RegisterFormParams {
    username: string;
    password: string;
    repassword: string;
    email: string;
    social_id: string;
}

const Register = () => {
    const validationSchema = Yup.object({
        username: Yup.string()
            .required("The username is required.")
            .min(4, "The username must be composed of a min of 4 characters.")
            .max(14, "The username must be composed of a max of 14 characters."),
        password: Yup.string()
            .required("The password is required.")
            .min(6, "The password must be composed of a min of 6 characters.")
            .max(14, "The password must be composed of a max of 14 characters."),
        repassword: Yup.string()
            .oneOf([Yup.ref("password"), undefined], "Passwords do not match.")
            .required("You should repeat the password."),
        email: Yup.string().email("This is not a valid address.").required("Email address is required."),
        social_id: Yup.string()
            .required("You must set the delete code for your characters.")
            .min(7, "You must specify at least 7 characters.")
            .max(7, "You must specify a max of 7 characters."),
    });

    const handleSubmit = async (
        values: RegisterFormParams,
        { setSubmitting, resetForm }: FormikHelpers<RegisterFormParams>
    ) => {
        setSubmitting(true);

        await axios
            .post("/api/register", values)
            .then(() => {
                resetForm();

                Swal.fire({
                    icon: "success",
                    title: "Registration Successfully",
                    text: "Your account has been registered successfully!",
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Registration Failed",
                    text: error.response.data.message,
                });
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    const initialValues: RegisterFormParams = {
        username: "",
        password: "",
        repassword: "",
        email: "",
        social_id: "",
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleSubmit,
    });
    return (
        <Container bgColor="bg-dark">
            <div className="max-w-[1200px] mx-auto py-10">
                <div className="w-2/4 mx-auto">
                    <Title label="Create a new account" className="bg-dark2 px-5 py-2 border-t-2 border-gold mb-5" />
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        <Form>
                            <div className="flex flex-col">
                                <Field
                                    type="text"
                                    placeholder="Username"
                                    id="username"
                                    name="username"
                                    className="bg-dark2 px-4 py-2 text-white placeholder:text-white border-l-4 border-white hover:border-gold focus:border-gold active:border-gold outline-none focus:outline-none duration-200"
                                />
                                <ErrorMessage name="username" component="span" className="text-sm text-red-300" />
                            </div>

                            <div className="flex flex-col mt-1">
                                <Field
                                    type="password"
                                    placeholder="Password"
                                    id="password"
                                    name="password"
                                    className="bg-dark2 px-4 py-2 text-white placeholder:text-white border-l-4 border-white hover:border-gold focus:border-gold active:border-gold outline-none focus:outline-none duration-200"
                                />
                                <ErrorMessage name="password" component="span" className="text-sm text-red-300" />
                            </div>

                            <div className="flex flex-col mt-1">
                                <Field
                                    type="password"
                                    placeholder="Repeat the password"
                                    id="repassword"
                                    name="repassword"
                                    className="bg-dark2 px-4 py-2 text-white placeholder:text-white border-l-4 border-white hover:border-gold focus:border-gold active:border-gold outline-none focus:outline-none duration-200"
                                />
                                <ErrorMessage name="repassword" component="span" className="text-sm text-red-300" />
                            </div>

                            <div className="flex flex-col mt-1">
                                <Field
                                    type="email"
                                    placeholder="Email address"
                                    id="email"
                                    name="email"
                                    className="bg-dark2 px-4 py-2 text-white placeholder:text-white border-l-4 border-white hover:border-gold focus:border-gold active:border-gold outline-none focus:outline-none duration-200"
                                />
                                <ErrorMessage name="email" component="span" className="text-sm text-red-300" />
                            </div>

                            <div className="flex flex-col mt-1">
                                <Field
                                    type="text"
                                    placeholder="Code delete characters"
                                    id="social_id"
                                    name="social_id"
                                    className="bg-dark2 px-4 py-2 text-white placeholder:text-white border-l-4 border-white hover:border-gold focus:border-gold active:border-gold outline-none focus:outline-none duration-200"
                                />
                                <ErrorMessage name="social_id" component="span" className="text-sm text-red-300" />
                            </div>

                            <div className="flex items-center justify-between mt-3">
                                <button
                                    type="submit"
                                    className="bg-gold hover:bg-gold/70 duration-200 text-dark text-lg font-bold px-8 py-1"
                                    disabled={formik.isSubmitting}
                                >
                                    Create a new account
                                </button>

                                <div>
                                    <span className="text-white text-sm mr-1">You are already registered?</span>

                                    <Link
                                        href="/login"
                                        className="text-white hover:text-gold duration-200 text-sm font-semibold"
                                    >
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </Container>
    );
};

export default Register;
