import { Fragment } from "react"

import Header from '../src/components/Header'
import Link from "next/link"

const Podcast = ({ clip }) => {
  return(
    <Fragment>
      <Header />
      <div className='Container'>

          <div className='clip'>
            <div className='Picture-backImage' style={{ backgroundImage: `url(${clip.urls.image || clip.channel.urls.logo_image.original})` }} />
            <nav className='Menu-back'>
              <Link href={`/channel?id=${clip.channel.id}`}>
                <a className='Button-back'>&#11013;</a>
              </Link>
              <span>Volver</span>
            </nav>

            <picture className='Picture'>
              <div className='Picture-image' style={{ backgroundImage: `url(${clip.urls.image || clip.channel.urls.logo_image.original})` }} />
            </picture>

            <div className='Player'>
              <h3 className='Player-title'>{ clip.title }</h3>
              <h6 className='Player-subtitle'>{ clip.channel.title }</h6>
              <audio controls autoPlay={true}>
                <source src={clip.urls.high_mp3} type='audio/mpeg' />
              </audio>
            </div>
          </div>
      </div>

      <style jsx>{`
        .Container {
          max-width: 600px;
          height: 80vh;
          margin: 0 auto;
          padding: 0 2em 2em;
        }
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
        .clip {
          display: flex;
          height: 100%;
          flex-direction: column;
          background-image: linear-gradient(to top, #151724 20%, #6942D1);
          color: white;
          border-radius: 1em;
          position: relative;
          overflow: hidden;
        }
        .Picture {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1;
          flex-direction: column;
          width: auto;
          padding: 10%;
          z-index: 100;
        }
        .Picture-backImage {
          position: absolute;
          width: 100%;
          height: 100%;
          background-position: 50% 50%;
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: .3em;
          filter: blur(100px);
        }

        .Picture-image {
          width: 80%;
          height: 90%;
          background-position: 50% 50%;
          background-size: cover;
          background-repeat: no-repeat;
          box-shadow: 5px 5px 15px #151724;
          border-radius: 5px;
        }

        .Player {
          /* border-radius: 0 0 1em 1em; */
          padding: 30px;
          /* background: rgba(0,0,0,0.3); */
          text-align: center;
          z-index: 100;
        }
        .Player-title {
          margin: 0;
        }
        .Player-subtitle {
          margin: 0;
          margin-top: 1em;
        }
        audio {
          margin-top: 2em;
          width: 100%;
          outline: none;
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

Podcast.getInitialProps = async ({ query }) => {
  let id = query.id

  let fetchClip = await fetch(`https://api.audioboom.com/audio_clips/${id}.mp3`)

  let data = await fetchClip.json()
  let clip = data.body.audio_clip

  return { clip }
}

export default Podcast