import React from "react";
import { Formik, FormikHelpers, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import Title from "./elements/Title";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import Swal from "sweetalert2";
import useCurrentUser from "@/hooks/useCurrentUser";
import { FaAt, FaShieldAlt } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";

interface LoginFormParams {
    username: string;
    password: string;
}

const Login = () => {
    const { data: currentUser } = useCurrentUser();

    const validationSchema = Yup.object({
        username: Yup.string().required("The username is required."),
        password: Yup.string().required("The password is required."),
    });

    const handleSubmit = async (values: LoginFormParams, { setSubmitting }: FormikHelpers<LoginFormParams>) => {
        const result = await signIn("credentials", {
            redirect: false,
            username: values.username,
            password: values.password,
        });

        if (result?.error) {
            Swal.fire("ERROR", result.error, "error");
        } else {
            Swal.fire("SUCCESS", "Autentificarea a reusit!", "success");
            formik.resetForm();
        }

        setSubmitting(false);
    };

    const initialValues: LoginFormParams = {
        username: "",
        password: "",
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleSubmit,
    });

    const userStyled = <span className="text-gold">{currentUser?.login}</span>;

    return (
        <>
            <div>
                <Title
                    label={currentUser ? <>Hello, {userStyled}</> : "Login"}
                    className="bg-dark2 px-5 py-2 border-t-2 border-gold mb-5"
                />
                {!currentUser ? (
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

                            <div className="flex flex-col my-3">
                                <Field
                                    type="password"
                                    placeholder="Password"
                                    id="password"
                                    name="password"
                                    className="bg-dark2 px-4 py-2 text-white placeholder:text-white border-l-4 border-white hover:border-gold focus:border-gold active:border-gold outline-none focus:outline-none duration-200"
                                />
                                <ErrorMessage name="password" component="span" className="text-sm text-red-300" />
                            </div>

                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-gold hover:bg-gold/70 duration-200 text-dark text-lg font-bold px-8 py-1"
                                    disabled={formik.isSubmitting}
                                >
                                    {formik.isSubmitting ? "Connecting..." : "Login"}
                                </button>

                                <div>
                                    <Link
                                        href="/password-recovery"
                                        className="text-white hover:text-gold duration-200 text-sm block"
                                    >
                                        Can&apos;t login? Recover your password.
                                    </Link>

                                    <Link
                                        href="/password-username"
                                        className="text-white hover:text-gold duration-200 text-sm block"
                                    >
                                        Can&apos;t login? Ask for username.
                                    </Link>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                ) : (
                    <div>
                        {currentUser.isAdmin && (
                            <div className="flex items-center justify-center my-1">
                                <FaShieldAlt className="w-8 h-8 bg-gold text-dark p-1" />
                                <Link
                                    href="/admin"
                                    className="bg-gold/20 text-gold h-8 w-full flex items-center pl-5 text-lg font-semibold"
                                >
                                    Admin Area
                                </Link>
                            </div>
                        )}

                        <div className="flex items-center justify-center">
                            <FaAt className="w-8 h-8 bg-gold text-dark p-1" />
                            <span className="bg-dark2 h-8 w-full flex items-center pl-5 text-lg font-semibold">
                                {currentUser?.email}
                            </span>
                        </div>

                        <div onClick={() => signOut()} className="flex items-center justify-center my-1 cursor-pointer">
                            <TbLogout className="w-8 h-8 bg-red-800 text-red-50 p-1" />
                            <span className="bg-red-800/40 text-red-100 h-8 w-full flex items-center pl-5 text-lg font-semibold">
                                Logout
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Login;
