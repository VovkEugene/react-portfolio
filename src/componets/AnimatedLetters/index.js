import './index.scss'

function AnimatedLetters({ letterClass, stringArray, index }) {
  return (
    <span>
      {stringArray.map((char, idx) => (
        <span key={char + idx} className={`${letterClass} _${idx + index}`}>
          {char}
        </span>
      ))}
    </span>
  )
}
export default AnimatedLetters
