import React from 'react';

const mystyle = {
  height: "20vh",
  width:"80%",
  margin:"0 auto",
};

const Header =({ todoLogo}) =>{
  return(
    <header>
      <div className="header-container" style={mystyle}>
        <img src={todoLogo} alt="todoLogo" height="100%"width="100%"/>
      </div>
    </header>
  );
}

export default Header;