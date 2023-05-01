export const Image = (props) => {
  return (
    <div className="photo">
      <img src={props.src} alt={props.alt} />
    </div>
  )
}