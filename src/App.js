import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container-principal'>
      <Header/>
      <Home />
      <AboutMe />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
