import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='w-[100%] h-[50px] fixed top-0 bg-black text-white p-2'>
        <h1 className='text-2xl text-gray-300 justify-center'>NewsApp</h1>
        <div>
            <ul>
                <li>
                    <Link to="/">General</Link>
                </li>
                <li>
                    <Link  to="/business">Business</Link>
                </li>
                  <li>
                      <Link to="/entertainment">Entertainment</Link>
                  </li>
                  <li>
                      <Link to="/health">Health</Link>
                  </li>
                  <li>
                      <Link to="/science">Science</Link>
                  </li>
                  <li>
                      <Link to="/sports">Sports</Link>
                  </li>
                  <li>
                      <Link to="/technology">Technology</Link>
                  </li>
                  <li>
                      <Link to="/business">Business</Link>
                  </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar