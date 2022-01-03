import { useRouter } from "next/router";
import Cookie from 'js-cookie'

const withAuth = (WrappedComponent) => {
    return (props) => {
        // checks whether we are on client / browser or server.
        if (typeof window !== "undefined") {
            const Router = useRouter();

            const authStatus = Cookie.get("login-status")

            if (authStatus !== 'logged-in') {
                Router.replace("/auth/signin?redirect=dashboard");
                return null;
            }

            return <WrappedComponent {...props} />;
        }

        // If we are on server, return null
        return null;
    };
};

export default withAuth;
