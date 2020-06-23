import { Fragment } from "react"

const Picture = ({ clip }) => {
  return(
    <Fragment>
      <picture className='Picture'>
        <div className='Picture-image' style={{ backgroundImage: `url(${clip.urls.image || clip.channel.urls.logo_image.original})` }} />
      </picture>

      <style jsx>{`
        .Picture {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1;
          flex-direction: column;
          width: auto;
          padding: 10%;
          z-index: 100;
        }
        .Picture-image {
          width: 80%;
          height: 90%;
          background-position: 50% 50%;
          background-size: cover;
          background-repeat: no-repeat;
          box-shadow: 5px 5px 15px #151724;
          border-radius: 5px;
        }
      `}</style>
    </Fragment>
  )
}

export default Picture