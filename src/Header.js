// rfce

import React from 'react'
import ytLogo from './images/yt-logo.png'
import searchIcon from './images/search.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiSolidMicrophone} from 'react-icons/bi'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
      <div class="header">
                <div class="header-items header-logo">
                    <div class="header-first">
                        <GiHamburgerMenu />
                    </div>
                    <div class="header-second">
                        <Link to='/'>
                        <img id='yt-logo' src={ytLogo}/>
                        </Link>
                    </div>
                </div>
                <div class="header-items header-center">
                    {/* <div class="header-search"></div> */}
                    <input class="header-search" placeholder='Search..'/>
                    <button class="search-button">
                        <img class="small-image" src={searchIcon}></img>
                    </button>
                    <div class="header-mic">
                        <BiSolidMicrophone class="microphone" />
                    </div>
                </div>
                <div class="header-items header-profile">
                    <button class="header-tools"> <img className='My-Image' src='https://lh3.googleusercontent.com/ogw/AKPQZvxC6-2v4jeO9S-9Km2V7K2M-S6GOfn1pp62AP0eZQ=s32-c-mo' alt='vivaan profile pic'></img><b>  Mr_Vivaan</b></button>
                </div>
            </div>
    </div>
  )
}

export default Header
