import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Social from './components/Social';


function App() {
  return (
    <div className="App">
      {/* <header> */}
        <Header/>
      {/* </header> */}
      <section>
        <About/>

        <Experience/>

        <Social/>
      </section>

      <footer>
        <h2>Welcome, and do come again</h2>
        <h3> © Chibuzo Franklin Odigbo 2022</h3>
      </footer>
    </div>
  );
}

export default App;
