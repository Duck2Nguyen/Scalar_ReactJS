import './App.css';
import { Example } from './component/Example';


function App() {
  window.Buffer = window.Buffer || require("buffer").Buffer;

  return (
    <div className="App">
      <Example />
    </div>
  );
}

export default App;
