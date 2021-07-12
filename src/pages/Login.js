import Header from "../components/Header";
import Footer from "../components/Footer";

function Login() {
  function handleAlert() {
    alert("Estamos em Login");
  }
  return (
    <html>
      <div>
        <Header />
        <Footer name="Login" hasVacancy={true} Alert={handleAlert} />
      </div>
    </html>
  );
}

export default Login;
