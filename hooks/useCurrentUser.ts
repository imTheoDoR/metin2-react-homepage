import useSWR from "swr";
import fetcher from "@/helpers/fetcher";
import { useMemo } from "react";

const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR("/api/currentUser", fetcher, {
        revalidateOnFocus: true,
        revalidateOnMount: true,
        revalidateOnMountInterval: 1000 * 60,
    });

    return useMemo(() => ({ data, error, isLoading, mutate }), [data, error, isLoading, mutate]);
};

export default useCurrentUser;
