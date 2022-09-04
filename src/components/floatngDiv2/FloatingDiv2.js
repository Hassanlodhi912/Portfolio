import "./FloatingDiv2.css";
const FloatingDiv2 = (
  { image, text1, text2 }) => {
  return (
    <div className="floatingDiv2">
      <img src={image} alt='' />
      <span>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  )
}


export default FloatingDiv2;
