import { useState} from "react";
import "./App.css";
import Form from "./components/form/form.jsx";
import Option from "./components/Option";
import View from './components/view/view.jsx'

function App() {
  const [num, setnum] = useState("1");
  return (
    <div className='App'>
      <nav className='py-5 App-header font-bold'>
        <a href='/' className='app-name text-3xl md:text-4xl'>
          Taxon Tax Calculator
        </a>
      </nav>
      <div className='main'></div>
      {num === "1" ? (
        <Form setnum={setnum} />
      ) : num === "2" ? (
        <Option setnum={setnum} />
      ) : (
        <View setnum={setnum} />
      )}
    </div>
  );
}

export default App;
