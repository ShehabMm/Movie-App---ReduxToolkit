
import {Auth} from './Context'
import {Navigate} from 'react-router-dom'


// eslint-disable-next-line react/prop-types
const RequiredAuth = ({children}) => {

const {userName} = Auth()

if (userName!=="cc@gmail.com") {
  return <Navigate to='/sign-up'/>
}
return children

}

export default RequiredAuth;
