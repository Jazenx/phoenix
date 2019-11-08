import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCount } from '../../redux/actions/count'
import { useHistory } from 'react-router-dom'

const Home: React.FC = () => {
  const countX: number = useSelector((state: any) => state.count)

  const dispatch = useDispatch()

  const reduxAdd = useCallback(() => dispatch(addCount(100)), [dispatch])

  const history = useHistory()

  const jump = () => {
    history.push('/count')
  }

  return (
    <div>
      Home {countX}
      <button onClick={reduxAdd}>add</button>
      <button onClick={jump}>jump</button>
    </div>
  )
}

export default Home
