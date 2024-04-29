import SquareDisplay from '../../components/SquareDisplay/SquareDisplay'
import Sidebar from '../../components/Sidebar/Sidebar';
import PhoneDisplay from '../../components/PhoneDisplay/PhoneDisplay';
import './style.css';

const TestPage = () => {
    return (

        <div className='testpage'>
            <Sidebar />
            <PhoneDisplay />
        </div>
    )
}

export default TestPage;
