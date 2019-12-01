import Head from 'next/head';
import '../stylesheet/variables/color.css'
import rootStyle from '../stylesheet/base/index.css'

const Layout = (props) => {
  return (
    <div className={rootStyle.html}>
      <Head>
        <title>Administrator</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <div className={rootStyle.body}>
        {props.children}
      </div>
    </div>
  );
}
export default Layout;