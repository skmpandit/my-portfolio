import React from 'react'
import { SocialMedia } from '../components/index'
import { NavigationDots } from '../components/index'

const WrapApp = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia/>
      <div className='app__wrapper app__flex'>
        <Component/>
        <div className='copyright'>
            <p className='p-text'>
                @2024 SONU
            </p>
            <p className='p-text'>
                All rights reserved
            </p>
        </div>
      </div>
      <NavigationDots active={idName}/>
    </div>
  )
}

export default WrapApp;

