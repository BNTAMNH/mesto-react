import logo from '../images/logo_vector.svg';

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Логотип"
        className="header__logo"
      />
    </header>
  );
}

export default Header;