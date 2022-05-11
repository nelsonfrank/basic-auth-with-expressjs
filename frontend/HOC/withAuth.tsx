import { useRouter } from "next/router";
import Cookie from 'js-cookie'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import isEmpty from 'is-empty';

const withAuth = (WrappedComponent) => {
    return (props) => {
        // checks whether we are on client / browser or server.
        if (typeof window !== "undefined") {
            const Router = useRouter();
            const userState = useSelector((state: RootState) => state.user)

            if (isEmpty(userState)) {
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
