import { Fragment } from 'react'
import Link from 'next/link'

const BackPodcast = ({ clip }) => {
  return(
    <Fragment>
      <nav className='Menu-back'>
        <Link href={`/channel?id=${clip.channel.id}`}>
          <a className='Button-back'>&#11013;</a>
        </Link>
        <span>Volver</span>
      </nav>

      <style jsx>{`
        .Menu-back {
          background: none;
          z-index: 100;
          height: 50px;
          display: flex;
          justify-content: left;
          align-items: center;
        }
        .Button-back {
          /* display: inline-block; */
          /* padding: 15px; */
          color: white;
          cursor: pointer;
          text-decoration: none;
          font-size: 1.5em;
          background: #2DBDD8;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          margin-left: 1em;
          text-align: center;
          line-height: 25px;
        }
        span {
          font-size: .7em;
          font-weight: bold;
          margin-left: .5em;
        }
      `}</style>
    </Fragment>
  )
}

export default BackPodcast