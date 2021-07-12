import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  return (
    <html>
      <div>
        <Header />
        <Footer
          name="Home"
          hasVacancy={true}
          Alert={function Alert() {
            alert("Estamos em Home");
          }}
        />
      </div>
    </html>
  );
}

export default Home;
