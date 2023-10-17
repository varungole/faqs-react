import React, { useState } from 'react'

function Question({title , ans}) {
    const [showAns , setShowAns] = useState(false);

    const toggleAnswer = () => {
        setShowAns(!showAns);
    }

    return (
        <div className='question-box'>
       <button onClick={toggleAnswer}>{title}</button>
       {showAns && <h3>{ans}</h3>}
       </div>
    )
}

export default Question