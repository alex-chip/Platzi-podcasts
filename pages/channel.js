import Link from 'next/link'
import Layout from '../components/Layout'
import BannerChannel from '../components/BannerChannel'
import Series from '../components/Series'
import AudioClips from '../components/AudioClips'

const Channel = ({ channel, audioClips, series }) => {
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