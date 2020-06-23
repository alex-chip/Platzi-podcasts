const { Fragment } = require("react")

const Player = ({ clip }) => {
  return(
    <Fragment>
      <div className='Player'>
        <h3 className='Player-title'>{ clip.title }</h3>
        <h6 className='Player-subtitle'>{ clip.channel.title }</h6>
        <audio controls autoPlay={true}>
          <source src={clip.urls.high_mp3} type='audio/mpeg' />
        </audio>
      </div>

      <style jsx>{`
        .Player {
          /* border-radius: 0 0 1em 1em; */
          padding: 30px;
          /* background: rgba(0,0,0,0.3); */
          text-align: center;
          z-index: 100;
        }
        .Player-title {
          margin: 0;
        }
        .Player-subtitle {
          margin: 0;
          margin-top: 1em;
        }
        audio {
          margin-top: 2em;
          width: 100%;
          outline: none;
        }
      `}</style>
    </Fragment>
  )
}

export default Player