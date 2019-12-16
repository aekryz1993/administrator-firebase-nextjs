import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPager, faUserCircle, faUsers, faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import sidenaveStyle from "../stylesheet/components/sidebar.css";
import LogoutContainer from '../auth/LogoutContainer';

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
  return (
    <div className={sidenaveStyle.sidenav}>
      <ul className={sidenaveStyle.elmsSec}>
        <PostLink path='profile' name="Profile" />
        <PostLink path='landingPage' name="Landing page" />
        <PostLink path='blogs' name="Blogs" />
        <PostLink path='messages' name="Messages" />
        <PostLink path='users' name="Users" />
      </ul>
    </div>
  )
}

export default SideNav