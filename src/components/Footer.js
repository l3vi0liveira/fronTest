function Footer(props) {
  return (
    <html>
      <button onClick={props.Alert}>Clique em mim</button>
      {props.hasVacancy ? (
        <h1>Estamos em {props.name}</h1>
      ) : (
        console.log(props.hasVacancy)
      )}
    </html>
  );
}

export default Footer;
