import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {

  const ToggleMenuPage = () =>{
    console.log(props);
    if(props.NavPage == "Home"){
      return(
        <>
        <li>
         <a href="/registration">
         <Button buttonStyle='btn--outline'>Register</Button>
        </a>
        </li>
      </>
      )
    }

    else if(props.NavPage == "other"){
      return(
        <>
        <li>
         <a href="/login">
         <Button buttonStyle='btn--outline'>Login</Button>
        </a>
        </li>
        <li>
         <a href="/registration">
         <Button buttonStyle='btn--outline'>Register</Button>
        </a>
        </li>
      </>
      )
    }

    else if(props.NavPage == "registration"){
      return(
        <>
        <li>
         <a href="/login">
         <Button buttonStyle='btn--outline'>Login</Button>
        </a>
        </li>
      </>
      )
    }

  }

  const RenderMenu = () =>{
    if(props.NavPage == "profile"){
      console.log(props)
      return(
        <>
       <li className='nav-item'>
                 <Link  to='/profile' className='nav-links' onClick={closeMobileMenu}>
                   Profile
                 </Link>
               </li>
               <li className='nav-item'>
                 <Link  to='/print_card' className='nav-links' onClick={closeMobileMenu}>
                   Print Card
                 </Link>
               </li>
               <li>
         <a href="/">
         <Button buttonStyle='btn--outline'>Logout</Button>
        </a>
        </li>
      </>
      )
    }
    else{ return(
        <>
        <li className='nav-item'>
                 <Link  to='/' className='nav-links' onClick={closeMobileMenu}>
                   Home
                 </Link>
               </li>
               <li className='nav-item'>
                 <Link  to='/service' className='nav-links' onClick={closeMobileMenu}>
                   Services
                 </Link>
               </li>
               <li className='nav-item'>
                 <Link
                   to='/about'
                   className='nav-links'
                   onClick={closeMobileMenu}
                 >
                   About
                 </Link>
               </li>
               <li className='nav-item'>
                 <Link
                   to='/contact'
                   className='nav-links'
                   onClick={closeMobileMenu}
                 >
                   Contact
                 </Link>
               </li>
               
              <ToggleMenuPage/>
         
        </>
      )}
  }

  const LogoToggle = () =>{
    if(props.NavPage == "profile"){
      console.log(props)
      return(
        <>
       <Link to='/profile' className='navbar-logo' onClick={closeMobileMenu}>
       <i class="fa fa-id-card" aria-hidden="true"></i>
        Medical History Card
       </Link>
      </>
      )
    }
   else{ return(
       <>
       <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
       <i class="fa fa-id-card" aria-hidden="true"></i>
        Medical History Card
       </Link>
        
       </>
     )}
 }
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  

 

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

 

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <LogoToggle/>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
            <RenderMenu/>
            
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;