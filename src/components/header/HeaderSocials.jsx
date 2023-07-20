import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubAlt} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/pratiksha-sharma-40488115a' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com' target='_blank'><FaGithubAlt/></a>
    </div>
  )
};

export default HeaderSocials