export default function Details({condition, tempC, tempF, tempLikeC, tempLikeF}) {
    const style = {
        textAlign:'start'

    }
  return (
    <> 
        <p>{condition}</p>
        <div style={style}>
            <p>Actual: {tempC} C - Feels Like: {tempLikeC} C </p>
            <p>Actual: {tempF} F - Feels Like: {tempLikeF} F </p>
        </div>
    </>
  )
}
