// Shared 3D tilt + gradient-spotlight hover effect for widget cards.
// Pairs with the `.tilt-card` styles in App.css.
export function handleTiltMove(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const px = (e.clientX - rect.left) / rect.width
  const py = (e.clientY - rect.top) / rect.height

  card.style.setProperty('--mx', `${px * 100}%`)
  card.style.setProperty('--my', `${py * 100}%`)
  card.style.setProperty('--rx', `${(0.5 - py) * 10}deg`)
  card.style.setProperty('--ry', `${(px - 0.5) * 10}deg`)
}

export function handleTiltLeave(e) {
  const card = e.currentTarget
  card.style.setProperty('--rx', '0deg')
  card.style.setProperty('--ry', '0deg')
}
