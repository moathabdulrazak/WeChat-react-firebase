import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo" >WeChat</span>
      <div className="user">
        <img src="https://media.licdn.com/dms/image/D4E03AQHKImtA61x27Q/profile-displayphoto-shrink_200_200/0/1675379924276?e=1683158400&v=beta&t=2O2zncaRCXoA-YBypH2O8pFR2DbptByMkC47rZoDwYQ" alt="" />
        <span>Moath</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar