import { useState, useEffect, cloneElement, Children, forwardRef } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import sidebarStyle from "../stylesheet/components/sidebar.css";

const ActiveLink = ({ children, ...props }) => {
  const router = useRouter()
  const child = Children.only(children)
  return (
    <Link {...props}>
      {cloneElement(child, { active: router.pathname === props.href, href: props.href })}
    </Link>
  )
}

const NavLink = ({active, current, href}) => {
  
  const isActive = (active) => active ? sidebarStyle.active : ''

  return (
    <a href={href} className={`${sidebarStyle.navLink} ${isActive(active)}`}>{current}</a>
  )
}

const MyLink = forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

const Sidebar = () => {
  return (
    <div className={sidebarStyle.sidenav}>
      <ul>
        <li className={`${sidebarStyle.navItem}`}>
          <ActiveLink href="/dashboard/landingPage"><MyLink current={'Landing page'} /></ActiveLink>
        </li>
        <li className={`${sidebarStyle.navItem}`}>
          <ActiveLink href="/dashboard/blogs"><MyLink current={'blogs'} /></ActiveLink>
        </li>
        <li className={`${sidebarStyle.navItem}`}>
          <ActiveLink href="/dashboard/users"><MyLink current={'users'} /></ActiveLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar