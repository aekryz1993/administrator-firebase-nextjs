import nextCookie from 'next-cookies'
import Router from "next/router";

export function notLoggedin(ctx) {
  const { token } = nextCookie(ctx)

  if (!token) {
    if (typeof window === 'undefined') {
      ctx.res.writeHead(302, { Location: '/' })
      ctx.res.end()
    } else {
      Router.push('/')
    }
  }

  return { token }
}

export function Loggedin(ctx) {

  const { token } = nextCookie(ctx)

  if (token) {
    if (typeof window === 'undefined') {
      ctx.res.writeHead(302, { Location: '/dashboard/profile' })
      ctx.res.end()
    } else {
      Router.push('/dashboard/profile')
    }
  }

  return { token }
}