import React from 'react'

const Search = () => {
  return (
    <div className="search" >
      <div className="searchForm">
        <input type="text" placeholder="find a user" />
      </div>
      <div className="userChat">
        <img src="https://media.licdn.com/dms/image/D4E03AQHKImtA61x27Q/profile-displayphoto-shrink_200_200/0/1675379924276?e=1683158400&v=beta&t=2O2zncaRCXoA-YBypH2O8pFR2DbptByMkC47rZoDwYQ" alt="" />
        <div className="userChatInfo">
          <span>Moath</span>
        </div>
      </div>
    </div>
  )
}

export default Search