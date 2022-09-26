import React from 'react'

const Volume = () => {
    const [volume, setVolume] = React.useState(1)
    const [muted, setMuted] = React.useState(false)
    const finalVolume = muted ? 0 : volume ** 2
  
    return (
      <main>
        <section>
          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={volume}
            onChange={event => {
              setVolume(event.target.valueAsNumber)
            }}
          />
          <button onClick={() => setMuted(m => !m)}>
            {muted ? "muted" : "unmuted"}
          </button>
        </section>
        <section>
          <p>final volume: {finalVolume.toFixed(3)}</p>
        </section>
      </main>
    )
}

export default Volume