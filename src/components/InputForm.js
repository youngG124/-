import React, { useState } from 'react';

const InputForm = () => {
    const [korText, korSetText] = useState('');
    const [enText, enSetText] = useState('');

    const korOnChange = (e) => {
        korSetText(e.target.value);
    };

    const enOnChange = (e) => {
        enSetText(e.target.value)
    };

    const onReset = () => {
        korSetText('');
        enSetText('');
    };

    
    return (
        <div>
            <p>
                <input onChange={korOnChange} value={korText} />
            </p>
            <p>
                <input onChange={enOnChange} value={enText} />
            </p>
            <div>
                한글 입력 값: {korText}
            </div>
            <div>
                영어 입력 값: {enText}
            </div>
            <button onClick={onReset}>초기화</button>
            <button>제출</button>
        </div>
    )
}

export default InputForm;