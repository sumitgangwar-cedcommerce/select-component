import React from 'react'
import { svgs } from './assetsArray'

interface TagI {
  name:string;
  data:string;
  onClick:Function
}

const Tag = ({name , data , onClick}:TagI) => {
  return (
    <div className='inte-tag'>
      <span>{name}</span>
      <span onClick={()=>onClick(data)} style={{display:'flex' , alignItems:'center'}}>{svgs.clear}</span>
    </div>
  )
}

export default Tag