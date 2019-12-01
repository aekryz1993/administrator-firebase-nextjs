import React from 'react'
import App from 'next/app'
import { ProvideAuth } from "../lib/db";
import Layout from "../components/Layout";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ProvideAuth>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProvideAuth>
    )
  }
}