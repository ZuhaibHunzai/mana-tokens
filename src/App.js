import "./App.css";
import Audited from "./components/Audited/Audited";
import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Roadmap from "./components/Roadmap/Roadmap";
import RobotEra from "./components/RobotEra/RobotEra";
import Steps from "./components/Steps/Steps";
import System from "./components/System/System";
import Team from "./components/Team/Team";
import Whitepaper from "./components/Whitepaper/Whitepaper";
import { useCheckWalletConnection } from "./hook/web3.utils";

function App() {
  useCheckWalletConnection();
  return (
    <div className="App">
      <Header />
      <Hero />
      <Featured />
      <Audited />
      <Steps />
      <System />
      <Roadmap />
      <RobotEra />
      <Whitepaper />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
