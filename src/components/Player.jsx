import { useState } from "react";

export default function Player({name,symbol,isActive}){
    const [isEditing, setIsEditing] = useState(false);
    const [userName , setUserName] = useState(name);

    function handleChange(event){
        setUserName(event.target.value);
    }

    function handleClick(){
        setIsEditing((editing) => !editing);
    }
    let playerName = <span className="player-name">{userName}</span>;
    let btnCaption = "Edit";
    if(isEditing){
        playerName = <input type="text" required value={userName} onChange={handleChange}/>
        btnCaption="Save"
    }
    return(

        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {playerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => handleClick()}>{btnCaption}</button>
          </li>
    );
}