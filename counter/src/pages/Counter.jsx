
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
        <>
            <div className='main'>
                <div className='title'>
                    <p>Simple Counter</p>
                </div>

                <div className='button'>
                    <CustomButton
                        onClick={handleAdd}
                        type="add"
                        color="success"
                    >
                        Tambah
                    </CustomButton>

                    <p>{count}</p>

                    <CustomButton
                        onClick={handleSubtract}
                        type="substract"
                        color="danger"
                        disabled={count === 0}
                    >
                        Kurang
                    </CustomButton>
                </div>
            </div>
        </>
    );
}

export default Counter;