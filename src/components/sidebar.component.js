import React,{useState} from 'react';
import DashboardDougnut from "./doughnut.component"
export default (props) => {
  const [input,setInput] = useState(0)
  const [def,setDefault] = useState(0)
  const [output,setOutput] = useState(0)
  const [circle,setCircle] = useState(0)
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  return (<>
    {props.selected === 1 && <>
    <div className="description">This is just a proof of concept, if you find a bug or issue, you can report at    <a href="https://github.com/AlexandreUser/react-flow"> my Github</a>
 </div>
    <DashboardDougnut/>
    </>
    }
    {props.selected === 0 &&  <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="dndnode input" onDragStart={(event) => {
          onDragStart(event, `input ${input}`);
          setInput(input+1)
          }} draggable>
          <p>
          Input Node

          </p>

      </div>
      <div className="dndnode" onDragStart={(event) => {
          onDragStart(event, `default ${def}`);
          setDefault(def+1)
          }} draggable>
      <p>
      Default Node

          </p>
      </div>
      <div className="dndnode output" onDragStart={(event) => {
          onDragStart(event, `output ${output}`);
            setOutput(output+1)
      }} draggable>
      <p>
      Output Node

          </p>
      </div>
      <div className="dndnode" onDragStart={(event) => {
          onDragStart(event, `circle ${circle}`);
          setCircle(circle+1)
          }} draggable>
      <p>
        Custom format Node

          </p>
      </div>
    </aside>}
   </>
  );
};