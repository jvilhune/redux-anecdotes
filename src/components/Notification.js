//import { useSelector } from 'react-redux'

import { useDispatch, useSelector } from 'react-redux'

//<div style={style}>
//{notification}
//</div>

const Notification = () => {

  console.log('notification occurred')

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const dispatch = useDispatch()
  const notification = useSelector(({ notification }) => {
  //console.log('notification', notification)
    return notification
  })

  return (
    <div className="ok">
      {notification}
    </div>
  )
}

export default Notification
