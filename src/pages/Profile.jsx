import React from 'react'
import Navbar from "../layout/Navbar"
import { firebase } from "../api"

const Profile = () => { 

  const handleLogouth = () => {
    firebase.logout();
  };

  return (
    <div>
      
<div className="ml-20 mt-32">
  <img src="https://res.cloudinary.com/duvxdk55r/image/upload/v1676873007/food-app/Logo_jtw3mg.png" alt="" />
</div>
 <button
 className='bg-yellow rounded-full mt-24 h-8 w-64'
  onClick={handleLogouth}>
    CERRAR SESSION 
  </button>
  <div> 
    <Navbar/>
  </div>
 
  </div>
  )
}

export default Profile

 



  

  
