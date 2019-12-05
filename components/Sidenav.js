import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPager, faUserCircle, faUsers, faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../lib/db'
import sidenaveStyle from "../stylesheet/components/sidebar.css";

const icons = {
  'profile': faUserCircle,
  'landingPage': faPager,
  'users': faUsers,
  'blogs': faFileAlt,
  'messages': faEnvelope,
}

const PostLink = ({ path, name }) => {
  return (
    <li className={sidenaveStyle.secItem}>
      <Link href={`/dashboard/${path}`} >
        <a><FontAwesomeIcon icon={icons[path]} size="lg" /><span>{name}</span></a>
      </Link>
    </li>
  )
}

const SideNav = () => {

  const auth = useAuth()

  const handleClick = () => {
    if (auth.user) {
      auth.signout()
    } else {
      console.log('there is not user signed in')
    }
  }

  return (
    <div className={sidenaveStyle.sidenav}>
      <ul className={sidenaveStyle.elmsSec}>
        <PostLink path='profile' name="Profile" />
        <PostLink path='landingPage' name="Landing page" />
        <PostLink path='blogs' name="Blogs" />
        <PostLink path='messages' name="Messages" />
        <PostLink path='users' name="Users" />
      </ul>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default SideNav