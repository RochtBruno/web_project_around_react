import logo from '../../images/logo.png'

function Header() {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={logo} alt="logo do website" />
      </header>
    </>
  );
}

export default Header
