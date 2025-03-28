import { useState } from 'react'

export default function AIREFeed() {
  const [s0, setS0] = useState(0.8)
  const [tau, setTau] = useState(0.2)
  const [dp, setDp] = useState(0.3)
  const [alpha, setAlpha] = useState(0.6)
  const [beta, setBeta] = useState(0.4)
  const theta = 0.7
  const cs_c = parseFloat((s0 - alpha * tau - beta * dp).toFixed(2))
  const canPost = cs_c >= theta

  return (
    <div>
      <h1>AIRE Social</h1>
      <p>CS/C: {cs_c}</p>
      {canPost ? <button>Pubblica</button> : <p>Riallineati prima</p>}
    </div>
  )
}