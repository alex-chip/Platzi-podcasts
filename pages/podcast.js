import Layout from '../components/Layout'
import BackPodcast from '../components/podcast/BackPodcast'
import Picture from '../components/podcast/Picture'
import Player from '../components/podcast/Player'

const Podcast = ({ clip }) => {
  return(
    <Layout title={clip.title}>
      <div className='Container-clip'>
        <div className='clip'>
          <div className='Picture-backImage' style={{ backgroundImage: `url(${clip.urls.image || clip.channel.urls.logo_image.original})` }} />
          <BackPodcast clip = { clip } />
          <Picture clip = { clip }/>
          <Player clip = { clip }/>
        </div>
      </div>

      <style jsx>{`
        .Container-clip {
          max-width: 600px;
          height: 80vh;
          margin: 0 auto;
          padding: 0 2em 3em;
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
      `}</style>
    </Layout>
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