import React from 'react';

const CreateWord = ({kor, en, onChange, onCreate, onReset}) => {
    console.log('CreateWord render');
    return (
        <div>
            <p>
                <input
                 name="en" 
                 placeholder='영어단어'
                 autoComplete="off"
                 onChange={onChange} value={en}/>
            </p>
            <p>
                <input
                 name="kor" 
                 placeholder='뜻'
                 autoComplete="off"
                 onChange={onChange} value={kor}/>
            </p>            
            <div>
                영어 입력 값 : {en}
            </div>
            <div>
                한글 입력 값 : {kor}
            </div>
            <div>
                <button onClick={onCreate}>제출</button>
                <button onClick={onReset}>비우기</button>
            </div>            
        </div>
    )
}

export default React.memo(CreateWord);