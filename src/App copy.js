import React, { useEffect, useState } from "react";
import { ArrowLeftCircleFill,ArrowUpCircleFill,ArrowRightCircleFill,ArrowDownCircleFill } from 'react-bootstrap-icons';
import "./app.css"
function App() {
	let [msg,setMsg] = useState([])

	useEffect(()=>{
		document.addEventListener('keydown',detectKeydown)
	},[])

	useEffect(()=>{
		console.log(msg)
	},[msg])

	const detectKeydown = (e)=> {

		switch(e.keyCode){
			case 37:
				setMsg( msg=>[ msg, <ArrowLeftCircleFill size="1.5em" className="arrow left"/>]);
				break;
			case 38:
				setMsg(msg=>[ msg,<ArrowUpCircleFill size="1.5em" className="arrow up"/>])
				break;
			case 39:
				setMsg(msg=>[ msg,<ArrowRightCircleFill size="1.5em" className="arrow right"/>])
				break;
			case 40:
				setMsg(msg=>[ msg,<ArrowDownCircleFill size="1.5em" className="arrow down"/>])
				break;
			case 13: // Enter
				setMsg([])
				break;
			case 8:  // BackSpace
				setMsg(msg.slice(msg.length-1))
				break;

			default:
				break;
			
		}
		
	}
	
	return <div>
		{msg}
		</div>
}

export { App };
