import styles from "./App.module.css";
import { About } from "./Components/About/About.jsx";
import { Contacts } from "./Components/Contacts/Contacts.jsx";
import { Experience } from "./Components/Experience/Experience.jsx";
import { Navbar } from "./Components/Navbar/Navbar.jsx";
import { Projects } from "./Components/Projects/Projects.jsx";
import { Sidebar } from "./Components/Sidebar/Sidebar.jsx";
import { Skills } from "./Components/Skills/Skills.jsx";
function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Sidebar />
        <About />
        <Skills/>
        <Experience/>
        <Projects/>
        <Contacts/>
      </div>
    </>
  );
}

export default App;
