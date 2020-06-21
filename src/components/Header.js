import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <header className='Header'>
        <h2 className='Header-title'>Podcasts</h2>
      </header>

      <style jsx>{`
        .Header {
          background: #1B55D0;
          padding: 15px;
          text-align: center;
          margin-bottom: 2em;
          color: #FFF;
        }

        .Header-title {
          font-weight: bold;
          color: #fff;
          margin: 0;
          font-size: 32px;
        }
      `}</style>
    </Fragment>
  )
}

export default  Header;