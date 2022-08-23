import React from 'react'

const Note = ({onDelete, title,content}) => {
  const handleClick = () => {
    return onDelete();
  };
  return (
    <div className='note'>
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={handleClick}>DELETE</button>
    </div>
  )
}

export default Note