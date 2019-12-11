import nextCookie from 'next-cookies'
import Router from "next/router";

export function notLoggedin(ctx) {
  const { token_id } = nextCookie(ctx)

  const user = ctx.req && ctx.req.session ? ctx.req.session.decodedToken : null

  if (!user) {
    if (typeof window === 'undefined') {
      ctx.res.writeHead(302, { Location: '/' })
      ctx.res.end()
    } else {
      if(!token_id) Router.push('/')
    }
  }

  return { user, token_id }
}

export function Loggedin(ctx) {

  const { token_id } = nextCookie(ctx)
  const user = ctx.req && ctx.req.session ? ctx.req.session.decodedToken : null

  if (user) {
    if (typeof window === 'undefined') {
      // if(ctx.req && ctx.req.session) console.log(ctx.req.session.decodedToken.user)
      ctx.res.writeHead(302, { Location: '/dashboard/profile' })
      ctx.res.end()
    } else {
      Router.push('/dashboard/profile')
    }
  }

  return { user, token_id }
}