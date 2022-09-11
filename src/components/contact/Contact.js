import "./Contact.css"
const Contact = () => {
  return (
    <div className="contact-form" id="contact">
    <div className="w-left">
      <div className="awesome">
        <span >Get in Touch</span>
        <span>Contact me</span>
        <div
          className="blur s-blur1"
         
        ></div>
      </div>
    </div>
    {/* right side form */}
    <div className="c-right">
      <form >
        <input type="text"  className="user"  placeholder="Name"/>
        <input type="email" className="user" placeholder="Email"/>
        <textarea name="message" className="user" placeholder="Message"/>
        <input type="submit"  className="button"/>
        <span >"Thanks for Contacting me"</span>
        <div
          className="blur c-blur1"
          
        ></div>
      </form>
    </div>
  </div>
  )
}

export default Contact
