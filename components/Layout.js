import { Fragment } from "react"
import Link from "next/link"
import Head from 'next/head'

import Footer from './Footer'


const Layout = ({ children, title }) => {
  return(
    <Fragment>
      <Head>
        <title>{ title }</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <header className='Header'>
        <img className='Header-logo' src='/platzi-logo.png'/>
        <Link href='/'>
          <a className='Header-link'><h2 className='Header-title'>Platzi Podcasts</h2></a>
        </Link>
      </header>

      <div className='Container'>
        { children }
      </div>


      <Footer/>

      <style jsx>{`
        .Container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2em;
        }

        .Header {
          background: #000A25;
          padding: 15px;
          margin-bottom: 2em;
          color: #FFF;
          display: flex;
          justify-content: center;
          align-center: center;
        }

        .Header-logo {
          width: 25px;
          margin-right: .5em;
        }

        .Header-link {
          text-decoration: none;
        }

        .Header-title {
          font-weight: bold;
          color: #fff;
          margin: 0;
          font-size: 20px;
        }

        :global(body) {
          margin: 0;
          font-family: system-ui;
          background: #EEE;
          padding: 0;
        }
      `}</style>
    </Fragment>
  )
}

export default Layout