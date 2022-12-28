import ImgDulakshi from '../assets/dulakshi.jpg'

export default function Info(){
  return (
    <div className="info">
      <img src={ImgDulakshi} className="info--img" />
      <h1 className="info--name">Dulakshi Wasana</h1>
      <h3 className="info--title">Software Engineer</h3>
      <h4 className="info--website">github.com/dulakshirb</h4>
      <div>
        <a href="mailto:dulakshirb@gmail.com">
          <button className="contact_button email">
            <i className="fa-solid fa-envelope"></i>Email
          </button>
        </a>
        <a href="https://www.linkedin.com/in/dulakshirb/">
          <button className="contact_button linkedin">
            <i class="fa-brands fa-linkedin"></i>LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}
