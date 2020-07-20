import React, {useState} from "react";
import ToDoList from "./ToDoList";

const App = () => {
	const [item, setItem] = useState("");
	const [item2, setItem2] = useState([]);
	
	const inputEvent = (event) => {
		setItem(event.target.value);
	};
	
	const listItems = () => {
		setItem2((oldItems) => {
			return [...oldItems, item]
		});
		setItem("");
	};
	
	const deleteItems = (id) => {
		setItem2((oldItems) => {
			return oldItems.filter((arrElem, index) => {
				return index !== id;
			});
		});
	}
	
	return (
	<>
		<div className="outer">
			<div className="inner">
				<h1>To Do List</h1><br />
				<input placeholder="Add items" onChange={inputEvent} value={item}/>
				<button onClick={listItems}>+</button>
				<ol>
				{
					item2.map((itemval, index) => {
						return <ToDoList text={itemval} key={index} id={index} onSelect={deleteItems}/>
					})
				}
				</ol>
			</div>
		</div>
	</>
	);
};

export default App;