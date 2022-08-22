import image from "../assets/dankG.gif";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <p>Hey there, this is my about page.</p>
      <img
        src={image}
        alt="A vividly green dank frog with a light green pointy hat taking some notes."
      ></img>
    </>
  );
};

export default About;
