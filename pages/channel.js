import { Fragment } from "react"

import Header from '../src/components/Header'

const Channel = ({ channel, audioClips, series }) => {
  return(
    <Fragment>
      <Header />
      <div className='Container'>
        <h1>{ channel.title }</h1>

        <h2>Series</h2>
        { series.map((serie) => (
            <h3>{serie.title}</h3>
          ))
        }

        <h2>Ultimos Podcasts</h2>
        { audioClips.map((clip, key) => (
            <h3 key={key}>{clip.title}</h3>
          ))
        }

      </div>

      <style jsx>{`

        .Container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .Channels {
          display: grid;
          grid-gap: 25px;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
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
  )
}

Channel.getInitialProps = async ({ query }) => {
  let idChannel = query.id
  let reqChannel = await fetch(`https://api.audioboom.com/channels/${idChannel}`)
  let dataChannel = await reqChannel.json()
  let channel = dataChannel.body.channel

  let reqAudios = await fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
  let dataAudios = await reqAudios.json()
  let audioClips = dataAudios.body.audio_clips

  let reqSeries = await fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
  let dataSeries = await reqSeries.json()
  let series = dataSeries.body.channels

  return { channel, audioClips, series }
}

export default Channel