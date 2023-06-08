import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import fetcher from "@/helpers/fetcher";
import Offline from "@/components/Offline";

export default function App({ Component, pageProps }: AppProps) {
    const [dbIsConnected, setDbIsConnected] = useState<boolean>(true);

    useEffect(() => {
        const checkDatabaseConnection = async () => {
            try {
                const response = await fetch("/api/checkDbConnection");
                const data = await response.json();
                setDbIsConnected(data.connected);
            } catch (error) {
                console.log("Error checking db connection -> ", error);
                setDbIsConnected(false);
            }
        };

        checkDatabaseConnection();
    }, []);

    if (!dbIsConnected) {
        return <Offline />;
    }

    return (
        <SessionProvider session={pageProps.session}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SessionProvider>
    );
}
