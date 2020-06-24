import Layout from '../components/Layout'
import Link from 'next/link'

const Error = ({ statusCode }) => {
  return(
    <Layout title='Error 404'>
      { statusCode === 404 ?
        <div className='Message-404'>
          <h1 className='Message-title'>Esta pagina no existe :(</h1>
            <Link href='/'><a className='Message-link'>Volver al Home</a></Link>
        </div>
        :
        <div className='Message-404'>
          <h1 className='Message-title'>Hubo un problema</h1>
          <p>Intenta nuevamente en unos segundos</p>
        </div>
      }
      <style jsx>{`
        .Message-404 {
          color: #333;
          height: calc(100vh - 140px);
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .Message-link {
          text-decoration: none;
          color: #FFF;
          background: #91C93C;
          padding: .7em 2em;
          border-radius: 5px;
          font-weight: bold;
          cursor: pointer;
        }
      `}</style>
    </Layout>
  )
}

Error.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null
  return { statusCode }
}

export default Error