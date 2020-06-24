import 'isomorphic-fetch'
import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'
import Error from 'next/error'

const Home = ({ channels, statusCode }) => {
  if (statusCode !== 200 ) {
    return <Error statusCode={ statusCode }/>
  }
  return(
    <Layout title='Platzi-Podcasts'>
      <ChannelGrid channels={ channels } />
    </Layout>
  )
}

Home.getInitialProps = async ({ res }) => {
  try {
    let req = await fetch('https://api.audioboom.com/channels/recommended')
    let { body: channels } = await req.json()
    return { channels, statusCode: 200 }
  } catch(err) {
    res.statusCode = 503
    return { channels: null, statusCode: 503}
  }
}

export default Home