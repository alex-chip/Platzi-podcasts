import 'isomorphic-fetch'
import { Fragment } from 'react'
import Link from 'next/link'

export default class extends React.Component {

  static async getInitialProps() {
    let req = await fetch('https://api.audioboom.com/channels/recommended')
    let { body: channels } = await req.json()
    return { channels }
  }

  render() {
    const { channels } = this.props

    return <Fragment>
      <header className='Header'>
        <h1 className='Header-title'>Podcasts</h1>
      </header>

      <div className="Channels">
        { channels.map((channel) => (
          <Link href="/channel" prefetch>
            <a className="Channel" key={ channel.id }>
              <img className='Channel-img' src={ channel.urls.logo_image.original } alt="Logo"/>
              <h2 className='Channel-title'>{ channel.title }</h2>
            </a>
          </Link>
        )) }
      </div>

      <style jsx>{`
        .Header {
          background: #1B55D0;
          padding: 15px;
          text-align: center;
          margin-bottom: 2em;
        }

        .Header-title {
          font-weight: bold;
          color: #fff;
          margin: 0;
          font-size: 32px;
        }

        .Channels {
          display: grid;
          grid-gap: 25px;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          max-width: 1200px;
          margin: 0 auto;
        }

        .Channel {
          display: block;
          color: #333;
          text-decoration: none;
          cursor: pointer;
        }

        .Channel-img {
          border-radius: 5px 5px 0 0;
          box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
          max-width: 100%;
          display: block;
        }

        .Channel-title {
          padding: 10px 0px;
          border-radius: 0 0 5px 5px;
          font-size: 14px;
          font-weight: 600;
          margin: 0;
          text-align: center;
          background: #DCDCDC;
          color: #666;
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
  }
}