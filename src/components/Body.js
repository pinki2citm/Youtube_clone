import React from 'react'
import MainContainer from './MainContainer';
import SideContainer from './SideContainer';

const Body= () => {
  return (
    <div className='grid grid-flow-col'>
    <SideContainer/>
    <MainContainer/>
    </div>
  )
}

export default Body;
