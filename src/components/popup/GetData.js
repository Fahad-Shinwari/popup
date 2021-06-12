import React,{useEffect} from 'react'

function GetData({userData}) {
    return (
        <>
        <h1>Data Added by the User Saved in Firebase</h1>
            {userData && 
            
            <table className="styled-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
       
       {userData.map((usersData) => (        
                <tr key={usersData.id}>
                    <td>{usersData.name}</td>
                    <td>{usersData.email}</td>
                </tr>
           
       ))
}       
           </tbody>
          </table> 
}  
        </>
    )
}

export default GetData
