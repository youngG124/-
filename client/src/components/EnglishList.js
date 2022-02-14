import React from 'react';

const English = ({word}) => {
    return(
        <div>
            {word.en}
        </div>
    )
}

const EnglishList = ({words}) => {
    return (
        <div>
            <h3>English Word List</h3>
            {words.map(word => (
                <English word={word} ky={word.id}/>
            ))}
        </div>
    )
}

export default EnglishList;