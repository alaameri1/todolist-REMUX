import React from 'react';
import { Link } from 'react-router-dom';
import homeStyles from '../styles/home.css'; // Import the CSS file

export default  function Index() {
  return (
    <div className="container">
      <h1>my tasks</h1>

      <p> <h2><div className='wel'> Welcome to mytasks. </div><br/> <br/><div className='exp'>Explore and enjoy!</div> </h2></p>

      <Link to="/notes">
        <button>manage your tasks</button>
      </Link>
    </div>
  );
}
export function links(){
  return ([{rel:'stylesheet', href:homeStyles}])
}
