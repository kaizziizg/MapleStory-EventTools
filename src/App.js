import React, { useEffect, useState } from "react";
import { ArrowLeftCircleFill,ArrowUpCircleFill,ArrowRightCircleFill,ArrowDownCircleFill,Controller } from 'react-bootstrap-icons';
import "./App.css"

let index = 0 
function App() {
	let [msg,setMsg] = useState([<Controller size="1.5em" className="controller" />])
	
	useEffect(()=>{
		
		document.addEventListener('keydown',detectKeydown)
	},[])
	useEffect(()=>{
		console.log(msg)
	},[msg])

	const detectKeydown = (e)=> {
		// console.log(e.keyCode)
		// 讓onClick 裡面的值不要是參考
		let x = index
		switch(e.keyCode){
			case 37:
				setMsg( msg=>[ ...msg, <ArrowLeftCircleFill size="1.5em" className="arrow left" key={x} onClick={()=>deleteArrow(x)}/>]);
				break;
			case 38:
				setMsg(msg=>[ ...msg,<ArrowUpCircleFill size="1.5em" className="arrow up" key={x} onClick={() =>deleteArrow(x)}/>])
				break;
			case 39:
				setMsg(msg=>[...msg,<ArrowRightCircleFill size="1.5em" className="arrow right" key={x} onClick={() =>deleteArrow(x)}/>])
				break;
			case 40:
				setMsg(msg=>[...msg,<ArrowDownCircleFill size="1.5em" className="arrow down" key={x} onClick={() =>deleteArrow(x)}/>])
				break;
			case 13: // Enter
				setMsg([])
				break;
			case 8:  // BackSpace
				setMsg(msg=>msg.slice(0,msg.length-1))
				break;

			default:
				break;
			
		}
		index++

	}
	const deleteArrow = (idx)=>{
		console.log(idx)
		setMsg(msg=>msg.filter((item)=>item.key!=idx))
	}
	
	return <div className="container" height="30%">
		{msg}
	</div>
}

export { App };
