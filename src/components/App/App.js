import './App.css';
import NameBlock from "../NameBlock/NameBlock";
import WelcomeBlock from "../WelcomeBlock/WelcomeBlock";
import Program from "../Programm/Program";
import CountDown from "../CountDown/CountDown";

function App() {
    return (
        <div className="App">
            {/*<Header/>*/}
            <NameBlock/>
            <WelcomeBlock/>
            <Program/>
            <CountDown/>
        </div>
    );
}

export default App;
