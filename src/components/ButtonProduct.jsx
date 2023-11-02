import React from 'react';

import { Link } from 'react-router-dom';

const Button = ({ content, style, onClick, path}) => (
          <Link to={`/${path}`} className={`flex justify-center items-center p-2  border border-white border-opacity-30 rounded text-white text-[20px] ${style}`}>
          <button onClick={onClick}>{content}</button>
          </Link>
)

export default Button