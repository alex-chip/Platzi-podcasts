import { Fragment } from 'react'
import Link from 'next/link'

const AudioClips = ({ audioClips }) => {
  return(
    <Fragment>
      { audioClips.length > 0 &&
        <>
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
        </>
      }

      <style jsx>{`
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
      `}</style>
    </Fragment>
  )

}

export default AudioClips