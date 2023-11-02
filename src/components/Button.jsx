import React from 'react';



const Button = ({ content, style, onClick }) => (
          <button onClick={onClick} className={`flex justify-center items-center p-2  border border-white border-opacity-30 rounded text-white text-[20px] ${style}`}>{content}</button>
)

export default Button