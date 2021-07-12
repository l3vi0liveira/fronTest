import { useHistory } from "react-router";

function Header() {
  let history = useHistory();

  const Redirect = (locale) => {
    history.push(locale);
  };

  return (
    <html>
      <button onClick={() => Redirect(`/home`)}> Home</button>
      <button onClick={() => Redirect(`/chat`)}> Chat</button>
      <button onClick={() => Redirect(`/login`)}> Login</button>
      <button onClick={() => Redirect(`/user`)}> User</button>
    </html>
  );
}

export default Header;
