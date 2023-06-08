import React from "react";
import Container from "./elements/Container";
import Link from "next/link";

const Offline = () => {
    return (
        <Container contentCentered>
            <div className="bg-dark mt-10 px-10 py-5 border-t-2 border-gold">
                <div className="bg-red-500/20 p-5">
                    <h1 className="text-xl font-bold">Database connection error.</h1>
                    <span>There is a problem with the database connection.</span>
                </div>

                <div className="mt-10">
                    <span className="text-lg font-semibold">Please make sure:</span>

                    <ul className="list-disc p-5">
                        <li>
                            That you renamed the <code className="bg-red-500/20 text-base px-1">.env.example</code> file
                            to <code className="bg-green-500/20 text-base px-1">.env</code> .
                        </li>
                        <li>
                            That you have correctly configured the{" "}
                            <code className="bg-red-500/20 text-base px-1">DATABASE_URL=&quot;&quot;</code> file to{" "}
                            <code className="bg-green-500/20 text-base px-1">
                                DATABASE_URL=&quot;mysql://YOUR_DB_USERNAME:YOUR_DB_PASSWORD@YOUR_DB_HOST:3306&quot;
                            </code>
                            .
                            <p className="mt-2">
                                <b>YOUR_DB_USERNAME</b> - Replace with the username from your database.
                            </p>
                            <p>
                                <b>YOUR_DB_PASSWORD</b> - Replace with the password from your database.
                            </p>
                            <p>
                                <b>YOUR_DB_HOST</b> - Replace with Hostname/IP Address from your database.
                            </p>
                        </li>
                        <li>Make sure the user allows any connections or allows site connection.</li>
                    </ul>

                    <span>
                        If the issue persist, please open a{" "}
                        <Link
                            href="https://github.com/imTheoDoR/metin2-react-homepage/issues"
                            target="_blank"
                            className="font-semibold hover:text-gold duration-300"
                        >
                            GitHub issue
                        </Link>
                        .
                    </span>
                </div>
            </div>
        </Container>
    );
};

export default Offline;
