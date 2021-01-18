import './App.css';
import FlowChart from "./components/flowchart.component"
import Selector from "./components/selector.component"
import Sidebar from "./components/sidebar.component"
import Navbar from "./components/navbar.component"
import Dashboard from "./components/dashboard.component"
import { useState } from 'react';
function App() {
  const [initialElements,setInitialElements] = useState([
    {
      id: '1',
      type: 'input',
      data: { label: <p>initial node</p> },
      position: { x: 250, y: 5 },
    },
  ]);
  const [selected,setSelected] = useState(0)
  return (
    <>
    <div className="App">
      <Navbar/>
      <div className="mainFrame">
        <div className="actionContainer">
          <Sidebar selected={selected}/>
        </div>
        <div className="interactiveInterface">
          <Selector selected={selected} setSelected={setSelected}/>
          <div style={selected === 0?{display:"block"}:{display:"none"}}>
          <FlowChart initialElements={initialElements} setInitialElements={setInitialElements}/>

          </div>
          {selected === 1 && <Dashboard/>}
        </div>
      </div>
      
    </div>
    <div className="footer">
    <p className="footerText">Copyright @ Alexandre Vieira 2021</p>
    </div>
   </>
  );
}

export default App;
