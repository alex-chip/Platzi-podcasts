import { Fragment } from 'react'
// import Link from 'next/link'
import { Link } from '../routes'
import slug from '../helpers/slug'

const ChannelGrid = ({ channels }) => {
  return (
    <Fragment>
      <div className="Channels">
        { channels.map((channel, key) => (
          <Link key={key} route='channel' params={{
            slug: slug(channel.title),
            id: channel.id
          }}>
          {/* <Link key={key} href={`/channel?id=${ channel.id }`} prefetch> */}
            <a className="Channel" key={ channel.id }>
              <img className='Channel-img' src={ channel.urls.logo_image.original } alt="Logo"/>
              <h2 className='Channel-title'>{ channel.title }</h2>
            </a>
          </Link>
        )) }
      </div>

      <style jsx>{`
        .Channels {
          display: grid;
          grid-gap: 25px;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          margin-bottom: 3em;
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
    </Fragment>
  )
}

export default ChannelGrid