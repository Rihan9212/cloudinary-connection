import {NavLink} from 'react-router-dom'


const navBar = () => {
  return (
    <div>
      {/* this is for image */}
      <div>
        <img src="" alt="" />
      </div>

    {/* it is for navbar title */}
      <div>
       <NavLink to="/"><ul>Home</ul> </NavLink>
      <NavLink to="products"><ul>Products</ul> </NavLink>
      <NavLink to="services"><ul>Services</ul> </NavLink>
      <NavLink to="contact"><ul>Contact</ul> </NavLink>
      <NavLink to="about"><ul>About</ul> </NavLink>
     </div>

      {/* it is for login */}
      <div>
        <h1>Login</h1>
      </div>
    </div>
  )
}

export default navBar