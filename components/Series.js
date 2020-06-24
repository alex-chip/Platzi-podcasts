import { Fragment } from 'react'
import { Link } from '../routes'
import slug from '../helpers/slug'

const Series = ({ series }) => {
  return(
    <Fragment>
      { series.length > 0 &&
        <div>
          <h2 className='Title'>Series</h2>
          <div className='Channels'>
            { series.map((serie, key) => (
              <Link key={key} route='channel' params={{
                slug: slug(serie.title),
                id: serie.id
              }}>
                <a className='Channel'>
                  <img className='Channel-img' src={serie.urls.logo_image.original} alt={serie.title} />
                  <h3 className='Serie-title' key={key}>{serie.title}</h3>
                </a>
              </Link>
            ))}
          </div>
        </div>
      }

      <style jsx>{`
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
    </Fragment>
  )
}

export default Series