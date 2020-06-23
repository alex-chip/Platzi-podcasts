import 'isomorphic-fetch'
import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'

const Home = ({ channels }) => {
  return(
    <Layout title='Platzi-Podcasts'>
      <ChannelGrid channels={ channels } />
    </Layout>
  )
}

Home.getInitialProps = async() => {
  let req = await fetch('https://api.audioboom.com/channels/recommended')
  let { body: channels } = await req.json()
  return { channels }
}

export default Home