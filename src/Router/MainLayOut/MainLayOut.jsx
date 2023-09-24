import { Outlet } from "react-router-dom";


const MainLayOut = () => {
    return (
        <div>
            <h1>main</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;