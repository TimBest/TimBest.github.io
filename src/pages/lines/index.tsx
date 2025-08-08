import * as React from 'react'
import SEO from '../../components/seo'
import Tiler from './components/Tiler'

const colors = ['#55cc94', '#9455cc', '#55c8cc', '#cc558c', '#cc9455']

const LinesPage = () => {
  // Randomly select a default color
  const [color, setColor] = React.useState(() => colors[Math.floor(Math.random() * colors.length)])

  return (
    <div>
      <SEO title="lines" />
      {/* Cyberpunk-style color input */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        background: '#1a1a2e',
        padding: '1rem',
      }}>
        <span style={{ color: '#0ff', fontWeight: 'bold', letterSpacing: '2px' }}>
          Color
        </span>
        {colors.map((c) => (
          <label key={c} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
        <input
          type="radio"
          name="color-radio"
          value={c}
          checked={color === c}
          onChange={() => setColor(c)}
          style={{ accentColor: c, width: '20px', height: '20px', margin: 0, position: 'absolute', opacity: 0, pointerEvents: 'none' }}
        />
        <span
          style={{
            display: 'inline-block',
            width: '24px',
            height: '24px',
            background: c,
            borderRadius: '50%',
            border: color === c ? '2px solid #fff' : '2px solid #444',
            boxShadow: color === c ? '0 0 8px #0ff' : undefined,
            position: 'relative',
            cursor: 'pointer',
          }}
          onClick={() => setColor(c)}
        >
          <input
            type="radio"
            name="color-radio"
            value={c}
            checked={color === c}
            readOnly
            style={{
          position: 'absolute',
          opacity: 0,
          width: '100%',
          height: '100%',
          margin: 0,
          cursor: 'pointer',
            }}
          />
        </span>
          </label>
        ))}
      </div>
      <Tiler rotationCenter={200} rotationGranularity={4} color={color} />
      <Tiler rotationCenter={35} rotationGranularity={4} color={color} />
      <Tiler rotationCenter={35} rotationGranularity={360} color={color} />
    </div>
  )
}

export default LinesPage
