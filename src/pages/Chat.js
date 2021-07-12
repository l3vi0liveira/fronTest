import Header from "../components/Header";
import Footer from "../components/Footer";

function Chat() {
  return (
    <html>
      <div>
        <Header />
        <Footer
          name="Chat"
          hasVacancy={false}
          Alert={function Alert() {
            alert("Estamos em Chat");
          }}
        />
      </div>
    </html>
  );
}

export default Chat;
