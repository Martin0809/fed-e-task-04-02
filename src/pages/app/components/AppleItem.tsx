import React from 'react'
import { observer } from 'mobx-react'
import applePng from '../../../assets/apple.png'
import './style.less'

const AppleItem = observer(({ apple, eatApple }) => {
  return (
    <div className="appleItem">
      <div className="apple">
        <img src={applePng} alt="" />
      </div>
      <div className="info">
        <div className="name">红苹果 - {apple.id}号</div>
        <div className="weight">{apple.weight}克</div>
      </div>
      <div className="btn-div">
        <button onClick={() => eatApple(apple.id)}> 吃掉 </button>
      </div>
    </div>
  )
})

export default AppleItem
