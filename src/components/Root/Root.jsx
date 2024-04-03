
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div className="container mx-auto">
            <Header></Header>
            <div className='flex justify-center my-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;