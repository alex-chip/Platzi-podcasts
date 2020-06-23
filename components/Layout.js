import { Fragment } from "react"
import Link from "next/link"
import Head from 'next/head'

import Footer from './Footer'


const Layout = ({ children, title }) => {
  return(
    <Fragment>
      <Head>
        <title>{ title }</title>
      </Head>
      <header className='Header'>
        <Link href='/'>
          <a className='Header-link'><h2 className='Header-title'>Podcasts</h2></a>
        </Link>
      </header>

      { children }

      <Footer/>

      <style jsx>{`
        .Header {
          background: #000A25;
          padding: 15px;
          text-align: center;
          margin-bottom: 2em;
          color: #FFF;
        }

        .Header-link {
          text-decoration: none;
        }

        .Header-title {
          font-weight: bold;
          color: #fff;
          margin: 0;
          font-size: 26px;
        }
      `}</style>

      <style jsx global>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
      `}</style>
    </Fragment>
  )
}

export default Layout