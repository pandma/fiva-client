import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./routes/AppRoutes";
import Navigation from "./components/Navigation/Navigation";
import UserMessage from "./components/UserMessage/UserMessage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navigation />
      <AppRoutes />
      <UserMessage />
      <Footer />
    </>
  );
}

export default App;
