
import { useState } from 'react';

import CustomButton from '../component/Button.jsx'


function Counter() {
    const [count, setCount] = useState(0);

    // Fungsi handler untuk menambah count
    const handleAdd = () => {
        if (count === 10) {
            alert('Count sudah mencapai 10');
            return;
        }
        setCount(prevCount => prevCount + 1);
    };

    // Fungsi handler untuk mengurangi count
    const handleSubtract = () => {
        setCount(prevCount => prevCount - 1);
    };

     return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100 p-4'> 
            <div className='bg-white p-8 rounded-lg shadow-xl border border-gray-200 w-full max-w-sm text-center'> 
                <div className='title mb-6'>
                    <p className='text-3xl font-bold text-gray-800 tracking-tight'>Simple Counter</p>
                </div>

                <div className='flex items-center justify-center space-x-6'> 
                    <CustomButton
                        onClick={handleSubtract}
                        type="substract" 
                        color="danger"
                        disabled={count === 0}
                    />
                    <p className='text-4xl font-extrabold text-gray-500 min-w-[70px]'> 
                        {count}
                    </p>
                    <CustomButton
                        onClick={handleAdd}
                        type="add" 
                        color="success"
                    />
                </div>

            </div>
        </div>
    );
}

export default Counter;