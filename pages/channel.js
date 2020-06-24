// import Link from 'next/link'
import Error from 'next/error'
import Layout from '../components/Layout'
import BannerChannel from '../components/BannerChannel'
import Series from '../components/Series'
import AudioClips from '../components/AudioClips'

const Channel = ({ channel, audioClips, series, statusCode }) => {
  if (statusCode !== 200 ) {
    return <Error statusCode={ statusCode }/>
  }
  return(
    <Layout title={channel.title}>
      <BannerChannel channel ={ channel }/>
      <Series series = { series }/>
      <AudioClips audioClips = { audioClips }/>
    </Layout>
  )
}

Channel.getInitialProps = async ({ query }) => {
  let idChannel = query.id

  try {
    let [reqChannel, reqSeries, reqAudios] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
    ])

    if(reqChannel.status >= 400) {
      res.statusCode = reqChannel.status
    return { channel: null, audioClips: null, series: null, statusCode: reqChannel.status}
    }

    let dataChannel = await reqChannel.json()
    let channel = dataChannel.body.channel

    let dataAudios = await reqAudios.json()
    let audioClips = dataAudios.body.audio_clips

    let dataSeries = await reqSeries.json()
    let series = dataSeries.body.channels

    return { channel, audioClips, series, statusCode: 200 }
  } catch(err){
    return { channel: null, audioClips: null, series: null, statusCode: 503}
  }
}

export default Channel