import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Need Some Help?</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <div>
          <input type="text" placeholder="Your Email" />
        </div>
        <div>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default MailList