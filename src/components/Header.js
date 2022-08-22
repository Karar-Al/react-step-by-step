const menuStyle = {
  display: "flex",
  gap: "1rem",
};

const Header = () => {
  return (
    <nav style={menuStyle}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Header;
