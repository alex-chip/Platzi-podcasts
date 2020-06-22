import { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <header className='Footer'>
        <h6 className='Footer-title'>Platzi Podcasts - Next.js</h6>
      </header>

      <style jsx>{`
        .Footer {
          background: #202543;
          padding: 15px;
          text-align: center;
          color: #FFF;
        }

        .Footer-title {
          font-weight: bold;
          color: #fff;
          margin: 0;
          font-size: 16px;
        }
      `}</style>
    </Fragment>
  )
}

export default  Footer;