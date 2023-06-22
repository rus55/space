import './App.css';
import {Container} from "react-bootstrap";
import {Route, Routes} from "react-router";
import Header from "./components/header/Header";
import Main from "./routes/main/Main";
import Technology from "./routes/technology/Technology";
import Contacts from "./routes/contacts/Contacts";
import Company from "./routes/company/Company";
import Guarantees from "./routes/guarantees/Guarantees";
import FlightSchedule from "./routes/flightSchedule/FlightSchedule";

function App() {
  return (
    <div className="App">
        <Container className='container'>
            <Header />
            <Routes>
                <Route path={'/space'} element={<Main />} />
                <Route path={'/technology'} element={<Technology />} />
                <Route path={'/flight-schedule'} element={<FlightSchedule />} />
                <Route path={'/guarantees'} element={<Guarantees />} />
                <Route path={'/company'} element={<Company />} />
                <Route path={'/contacts'} element={<Contacts />} />
            </Routes>
        </Container>
    </div>
  );
}

export default App;