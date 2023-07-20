import React from 'react'
import Pratiksha_sharma_Resume from '../../assets/Pratiksha_sharma_Resume.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={Pratiksha_sharma_Resume} download className='btn'> Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
};

export default CTA