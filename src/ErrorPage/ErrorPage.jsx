import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center flex-col">
            <h1 className="text-9xl font-bold">404</h1>
            <p className="text-3xl font-semibold">Page Not Found</p>
            <Link to={'/'} className="pt-9">Go Home</Link>

        </div>
    );
};

export default ErrorPage;