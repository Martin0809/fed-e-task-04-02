import React from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../stores'
import './style.less'

import AppleItem from './components/AppleItem'

const App = observer(() => {
  const {
    appleStore: {
      apples,
      notEatenApple,
      notEatenQuantity,
      notEatenWeight,
      eatenQuantity,
      eatenWeight,
      buttonText,
      isPicking,
      pickApple,
      eatApple,
    },
  } = useStore()

  return (
    <div className="appleBasket">
      <div className="title">苹果篮子</div>

      <div className="stats">
        <div className="section">
          <div className="head">当前</div>
          <div className="content">
            {notEatenQuantity}个苹果，{notEatenWeight}克
          </div>
        </div>
        <div className="section">
          <div className="head">已吃掉</div>
          <div className="content">
            {eatenQuantity}个苹果，{eatenWeight}克
          </div>
        </div>
      </div>

      <div className="appleList">
        {notEatenApple.map((apple) => (
          <AppleItem apple={apple} eatApple={eatApple} key={apple.id} />
        ))}
        {!apples.length && (
          <div className="empty-tip" key="empty">
            苹果篮子空空如也
          </div>
        )}
      </div>

      <div className="btn-div">
        <button
          className={isPicking ? 'disabled' : ''}
          disabled={isPicking}
          onClick={() => pickApple()}
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
})

export default App
