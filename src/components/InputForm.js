import React, { useState, useRef } from 'react';

const InputForm = () => {
    const [inputs, setInputs] = useState({
        kor: '',
        en: ''
    });

    const korInput = useRef();

    const { kor, en } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    };

    const onReset = () => {
        setInputs({
            kor: '',
            en: ''
        })
        korInput.current.focus();
    };

    
    return (
        <div>
            <p>
                <input name="kor" onChange={onChange} value={kor} ref={korInput}/>
            </p>
            <p>
                <input name="en" onChange={onChange} value={en} />
            </p>
            <div>
                한글 입력 값: {kor}
            </div>
            <div>
                영어 입력 값: {en}
            </div>
            <button onClick={onReset}>초기화</button>
            <button>제출</button>
        </div>
    )
}

export default InputForm;