import React, { useEffect, useState } from "react";
import { ArrowLeftCircleFill,ArrowUpCircleFill,ArrowRightCircleFill,ArrowDownCircleFill } from 'react-bootstrap-icons';

export default function Game(){
    let [current,setCurrent] = useState([])
    let displayCurrent=[]
    useEffect(()=>{
		document.addEventListener('keydown',detectKeydown)
	},[])

    useEffect(()=>{
        console.log(current)
		console.log(current.length)
	},[current])
    
    const detectKeydown = (e)=>{
        switch(e.keyCode){
			case 37: //Left
                setCurrent(current=>[...current,'left']);
				break;
			case 38: //Up
                setCurrent(current=>[...current,'up']);
                break;
			case 39: //Right
                setCurrent(current=>[...current,'right']);
				break;
			case 40: //Down
                setCurrent(current=>[...current,'down']);
				break;
			case 13: // Enter
                setCurrent([])
				break;
			case 8:  // BackSpace
                setCurrent(current=>current.slice(0,current.length-1))
				break;
			default:
				break;
		}
        
    }


    return (<div>
    </div>)
}