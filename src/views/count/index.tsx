import React, { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCount } from '../../redux/actions/count'
import { useHistory } from 'react-router-dom'

const Count: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  const handleClick = () => {
    setCount(1)
  }

  const countX: number = useSelector((state: any) => state.count)

  const dispatch = useDispatch()

  const reduxAdd = useCallback(() => dispatch(addCount(100)), [dispatch])

  const history = useHistory()

  const jump = () => {
    history.push('/')
  }

  return (
    <div>
      {count}
      {countX}
      <button onClick={handleClick}>ADD</button>
      <button onClick={reduxAdd}>Redux ADD</button>
      <button onClick={jump}>jump</button>
    </div>
  )
}

const MemoizedCount = React.memo(Count)

export default MemoizedCount
