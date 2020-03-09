import React, {useState} from 'react';

const listofBoxes = []

const BoxGenerator = () => {
    const [boxColor, setColor] = useState("");
    const [boxWidth, setWidth] = useState("");
    const [boxHeight, setHeight] = useState("");
    const [boxes, setBoxes] = useState(listofBoxes);


    const addBox = e =>{
        e.preventDefault();
        let newBox = {boxColor, boxWidth, boxHeight};
        console.log(newBox);
        setBoxes([...boxes, newBox]);
    }

    return(
        <>
        <form onSubmit = {addBox}>
            <label> Color:</label>
            <input 
            type="text" 
            name="boxColor" 
            onChange = { event =>setColor(event.target.value)} />
            <label>Box Width:</label>
            <input 
            type="text" 
            name = "boxWidth" 
            onChange = {event =>setWidth(event.target.value)}/>
            <label>Box Height:</label>
            <input 
            type="text" 
            name="boxHeight"
            onChange = { event =>setHeight(event.target.value)}
            />
            <input type= "submit"/>
        </form>

        {boxes.map((box,i) =>
            <div key = {i} 
            style={{backgroundColor:box.boxColor,
                width:box.boxWidth+"px",
                height:box.boxHeight+"px",
                display:"inline-block"}}>
            </div>
            )}
    </>
    );
}


export default BoxGenerator;