/* eslint-disable jsx-a11y/alt-text */
import s from "./HomePage.module.css";
import homeImg from "../../images/home-img-1.jpg";

function HomePage() {
  return (
    <div>
      <h1>Hello!</h1>
      <img src={homeImg}></img>
    </div>
  );
}

export default HomePage;
