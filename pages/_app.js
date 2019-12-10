import React from 'react'
import { Provider } from 'react-redux'
import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import makeStore from '../store/index'
import Layout from "../components/Layout";
import { assignCheckSession } from "../auth/apis-auth";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

      return { pageProps }
  }

  unsubscribe = null;

  componentDidMount() {
    this.unsubscribe = assignCheckSession()
  }
  
  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  }
}

export default withRedux(makeStore)(MyApp)