import React from 'react';
import {questionPropsType} from './../types/quiz_types';
import {Button, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel} from '@material-ui/core/';
import {ABC} from "./../App"
import  "./../animation.css"

let errorLabel:string=""
const QuestionsCard:React.FC<questionPropsType>=({question, options, callback})=>{
    const [value, setValue] = React.useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    React.useEffect(()=>{
        console.log(value)
    })
    if(value === "You must choose an option."){
        errorLabel = value
        console.log(errorLabel)
    }
    else if(value !== "You must choose an option."){
        errorLabel = ""
        console.log(errorLabel)
    }
    return (
        <div className="question-container" style={{
            margin: "0 auto",
            wordWrap: "break-word",
            boxShadow:"0 0 5px gray",
            display: "flex",
            flexWrap: "wrap",
            minHeight: "450px",
            justifyContent: "center",
            backgroundColor: "#fffff"
            }}>
            <form onSubmit={callback}>
                <FormControl component="fieldset" style={{marginTop: "30px"}}>
                    <FormLabel id="questionBox" className="animate__animated animate__bounce" style={{
                        boxShadow:"0 0 5px gray",
                        padding: "10px 15px",
                        fontWeight:"bold"
                        }} component="legend">{question}</FormLabel>
                    {options.map((opt:string, ind: number)=>{
                        return(
                            <div key={ind} style={{justifyContent:"space-around", fontWeight:"bold"}}>
                                <RadioGroup aria-label="gender" name="mcqs" value={value} onChange={handleChange}>
                                    <FormControlLabel value={opt} control={<Radio />} label={opt} />
                                </RadioGroup>
                            </div>
                        )
                    })}
                    <Button style={{width:"200px"}} variant="contained" color="secondary" type="submit" onClick={()=>{
                       setValue(ABC(value))
                    }}>Submit</Button>
                </FormControl>
                <br/> <br/>
            <h4 style={{
                textAlign:"center", color: "red"
                }}>{errorLabel}</h4>
            </form>
        </div>
    )
}
export default QuestionsCard;