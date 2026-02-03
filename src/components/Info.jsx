import profilePic from '../assets/IMG_0781.jpg';

export default function Info() {
  return (
    <>
      <img src={profilePic} alt="" />
      <header className="container">
        <div className="about-info">
          <h1 className="about-title">Coconut Pointer</h1>
          <h4 className="about-job">Fluffy Cat</h4>
          <span className="about-email">coconut2018@gmail.com</span>
          <div className="buttons">
            <a href="#" className="email-btn btn">
              <i className="fa-solid fa-envelope"></i>Email
            </a>
            <a href="#" className="linkedin-btn btn">
              <i className="fa-brands fa-linkedin"></i>
              LinkedIn
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
