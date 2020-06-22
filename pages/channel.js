import { Fragment } from "react"

import Header from '../src/components/Header'
import Link from "next/link"
import Footer from "../src/components/Footer"

const Channel = ({ channel, audioClips, series }) => {
  return(
    <Fragment>
      <Header />
      <div className='Container'>
      <div className='Banner'>
        <img className='Banner-img' src={ channel.urls.logo_image.original } alt="Logo"/>
        <h1 className='Title-Channel'>{ channel.title }</h1>
      </div>

        { series.length > 0 &&
          <div>
            <h2 className='Title'>Series</h2>
            <div className='Channels'>
              { series.map((serie, key) => (
                <Link key={key} href={`/channel?id=${serie.id}`}>
                  <a className='Channel'>
                    <img className='Channel-img' src={serie.urls.logo_image.original} alt={serie.title} />
                    <h3 className='Serie-title' key={key}>{serie.title}</h3>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        }

        <h2 className='Title'>Ultimos Podcasts</h2>
        { audioClips.map((clip, key) => (
          <Link href={`/podcast?id=${clip.id}`} key={key}>
            <ul className='Podcast-list'>
              <li className='Podcast-item'>
                <a className='Podcast-link'>
                  {clip.title}
                  <span className='Podcast-meta'>
                    { Math.ceil( clip.duration / 60 ) } minutes
                  </span>
                </a>
              </li>
            </ul>
          </Link>
          ))
        }

      </div>
      <Footer/>

      <style jsx>{`

        .Container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2em 2em;
        }

        .Banner {
          margin-bottom: 3em;
          position: relative;
        }

        .Banner-img {
          width: 100%;
          height: 400px;
          display: block;
          border-radius: 5px;
          box-shadow: 5px 5px 15px #151724;
        }

        .Title-Channel {
          color: #FFF;
          text-align: center;
          font-size: 32px;
          position: absolute;
          z-index: 10;
          bottom: 0;
          margin: 0;
          width: 100%;
          height: 50px;
          line-height: 50px;
          background: rgba(255, 255, 255, .1);
        }

        .Serie-title {
          padding: 10px 0px;
          border-radius: 0 0 5px 5px;
          font-size: 14px;
          font-weight: 600;
          margin: 0;
          text-align: center;
          background: #DCDCDC;
          color: #666;
        }

        .Title {
          margin-bottom: 1em;
          color: #444;
        }

        .Podcast-list {
          list-style: none;
          padding-left: 0;
          margin-top: 0;
          margin-bottom: 1em;
        }

        .Podcast-item {
          border-bottom: 1px solid #99B8F9;
          padding-bottom: 1em;
        }

        .Podcast-link {
          cursor: pointer;
          color: #6942D1;
          font-weight: bold;
        }

        .Podcast-meta {
          display: block;
          color: #777;
        }

        .Channels {
          display: grid;
          grid-gap: 25px;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          color: #333;
          margin-bottom: 4em;
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

Channel.getInitialProps = async ({ query }) => {
  let idChannel = query.id

  let [reqChannel, reqSeries, reqAudios] = await Promise.all([
    fetch(`https://api.audioboom.com/channels/${idChannel}`),
    fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
    fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
  ])

  let dataChannel = await reqChannel.json()
  let channel = dataChannel.body.channel

  let dataAudios = await reqAudios.json()
  let audioClips = dataAudios.body.audio_clips

  let dataSeries = await reqSeries.json()
  let series = dataSeries.body.channels

  return { channel, audioClips, series }
}

export default Channel