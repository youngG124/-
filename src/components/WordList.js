import React, { useEffect } from 'react';

const Word = ({ word, onRemove, onToggle }) => {
    useEffect(() => {
        console.log('word set up');
        console.log(word);
        return () => {
            console.log('before word changed...');
            console.log(word);
        };
    }, [word]);


    return (
        <div>
            <b
            style={{
                cursor:'pointer',
                color: word.active ? 'green' : 'black'
            }}
            onClick = {() => onToggle(word.id)}
            >
                {word.kor}                          
            </b>
            
            
            <span>{word.en}</span>
            <button onClick={() => onRemove(word.id)}>삭제</button>
        </div>
    )
}

const WordList = ({ words, onRemove, onToggle }) => {
    return (
        <div>
            {words.map(word => (
                <Word word={word} key={word.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    )
}

export default WordList;