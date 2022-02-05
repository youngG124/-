import React from 'react';

const CreateWord = ({kor, en, onChange, onCreate, onReset}) => { 
    return (
        <div>
            <p>
                <input
                 name="kor" 
                 placeholder='뜻'
                 autoComplete="off"
                 onChange={onChange} value={kor}/>
            </p>
            <p>
                <input
                 name="en" 
                 placeholder='영어단어'
                 autoComplete="off"
                 onChange={onChange} value={en}/>
            </p>
            <div>
                한글 입력 값: {kor}
            </div>
            <div>
                영어 입력 값: {en}
            </div>
            <button onClick={onCreate}>제출</button>
            <button onClick={onReset}>비우기</button>
        </div>
    )
}

export default CreateWord;