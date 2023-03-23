import HomePage from './components/Homepage';
import Welcome from './components/Welcome';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import SavedTeamPage from './components/SavedTeamsPage';
import SummaryPage from './components/SummaryPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/live" element={<SummaryPage />} />
        <Route path="/saved" element={<SavedTeamPage />} />
      </Routes>
    </Router>
  );
}

export default App;