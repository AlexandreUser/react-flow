

import React, { useState, useRef, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,MiniMap,Background
} from 'react-flow-renderer';

let id = 0;
const getId = () => `dndnode_${id++}`;
const DnDFlow = (props) => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(props.initialElements);
  const onConnect = (params) => {
    setElements((els) => addEdge(params, els))

  };
  const onElementsRemove = (elementsToRemove) =>{
    setElements((els) => removeElements(elementsToRemove, els));

  }
  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';

  };
  const onDrop = (event) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const newNode = {
        id: getId(),
        type,
        position,
        data: { label:<p>node {type}</p>  },
      };
    if(type.indexOf("circle") != -1){
        newNode.style = {
            borderRadius:"999px",
            height:"70px",
            width:"70px",
            border:"1px solid black",
            textAlign:"center",
            backgroundColor:"white"
        }
    }
    setElements((es) => es.concat(newNode));

  };
  useEffect(()=>{
    props.setInitialElements(elements)
    console.log(elements)
  },[elements,reactFlowInstance])
  return (
    <div style={{ height: 600 }}>
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
          >
            <Controls />
            <MiniMap
                    nodeStrokeColor={(n) => {
                    if (n.style?.background) return n.style.background;
                    if (n.type === 'input') return '#0041d0';
                    if (n.type === 'output') return '#ff0072';
                    if (n.type === 'default') return '#1a192b';
                    if(n.type === "circle") return '#1a192b';
                    return '#eee';
                    }}
                    nodeColor={(n) => {
                    if (n.style?.background) return n.style.background;
                    return '#fff';
                    }}
                    nodeBorderRadius={2}
                />
            <Background color="#aaa" gap={16} />

          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
};
export default DnDFlow;