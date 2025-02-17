import './App.css';
import ResponsiveAppBar from './components/appbar/AppBar';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';
import Section3 from './components/section3/Section3';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Section1 />
      <Section2/>
      <Section3/>
    </div>
  );
}

export default App;
