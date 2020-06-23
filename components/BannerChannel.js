import { Fragment } from "react"

const BannerChannel = ({ channel }) => {
  return(
    <Fragment>
      <div className='Banner'>
        <img className='Banner-img' src={ channel.urls.logo_image.original } alt="Logo"/>
        <h1 className='Title-Channel'>{ channel.title }</h1>
      </div>

      <style jsx>{`
        .Banner {
          margin-bottom: 3em;
          position: relative;
        }

        .Banner-img {
          width: 100%;
          height: 400px;
          display: block;
          border-radius: 5px;
          box-shadow: 5px 5px 15px #151724;
        }

        .Title-Channel {
          color: #FFF;
          text-align: center;
          font-size: 26px;
          font-style: italic;
          position: absolute;
          z-index: 10;
          bottom: 0;
          margin: 0;
          width: 100%;
          height: 50px;
          line-height: 50px;
          background: rgba(255, 255, 255, .1);
        }
      `}</style>
    </Fragment>
  )
}

export default BannerChannel