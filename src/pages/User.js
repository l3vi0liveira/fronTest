import Header from "../components/Header";
import Footer from "../components/Footer";

function User() {
  return (
    <html>
      <div>
        <Header />
        <Footer
          name="User"
          hasVacancy={false}
          Alert={function Alert() {
            alert("Estamos em User");
          }}
        />
      </div>
    </html>
  );
}

export default User;
