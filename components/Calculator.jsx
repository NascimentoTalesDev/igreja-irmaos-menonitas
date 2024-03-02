import { useState } from "react";
import TitleH2 from "./TitleH2";
import TitleH3 from "./TitleH3";

const Add = ({ option }) => {
    const [initialState, setInitialState] = useState([0])
    const [initialState2, setInitialState2] = useState([])
    const [value, setValue] = useState()

    const addValue = (value) => {
        if (initialState[0] === 0) {
            setInitialState(initialState => {
                return [];
            });
        }
        setInitialState(initialState => {
            return [...initialState, ...value];
        });
    }
    console.log(initialState);
    const removeValue = () => {        
        initialState.pop();

        if (initialState.length === 0 ) {
            setInitialState(initialState => {
                return [0];
            });
        }else{
            setInitialState(initialState => {
                return [...initialState];
            });
        }
    }
    const clearDisplay = () => {
        setInitialState([0])
    }
    return (
        <div onKeyDown={(ev)=> console.log(ev)} className="w-full h-full flex flex-col">
            <TitleH3 className="text-center" text={`Qual o valor ${option === "Rendimentos" ? `dos seus ${option}` : `da sua ${option}`}?`} />
            <div className="mt-[80px] flex items-end">
                <b className="font-bold text-lg">R$</b>
                <TitleH2 className="ml-[10px] text-2xl " text={initialState} />
                <TitleH2 className="text-base" text={",00"} />                          
            </div>

            <div className="absolute left-0 bottom-0 mb-[20px] flex items-center w-full">
                <div className="parent mx-auto">
                    <button value={7} onKeyDown={(ev) => console.log(ev)}  onClick={(ev) => addValue(ev.target.value)} className="bg-slate-300 text-secondary div1 flex items-center justify-center">7</button>
                    <button value={8} onClick={(ev) => addValue(ev.target.value)} className="bg-slate-300 text-secondary div2 flex items-center justify-center">8</button>
                    <button value={9} onClick={(ev) => addValue(ev.target.value)} className="bg-slate-300 text-secondary div3 flex items-center justify-center">9</button>
                    <button value={4} onClick={(ev) => addValue(ev.target.value)} className="bg-slate-300 text-secondary div4 flex items-center justify-center">4</button>
                    <button value={5} onClick={(ev) => addValue(ev.target.value)} className="bg-slate-300 text-secondary div5 flex items-center justify-center">5</button>
                    <button value={6} onClick={(ev) => addValue(ev.target.value)} className="bg-slate-300 text-secondary div6 flex items-center justify-center">6</button>
                    <button value={1} onClick={(ev) => addValue(ev.target.value)} className="bg-slate-300 text-secondary div7 flex items-center justify-center">1</button>
                    <button value={2} onClick={(ev) => addValue(ev.target.value)} className="bg-slate-300 text-secondary div8 flex items-center justify-center">2</button>
                    <button value={3} onClick={(ev) => addValue(ev.target.value)} className="bg-slate-300 text-secondary div9 flex items-center justify-center">3</button>
                    <button value={0} onClick={(ev) => addValue(ev.target.value)} className="bg-slate-300 text-secondary div13 flex items-center justify-center">0</button>
                    <button onClick={( )=> removeValue()} className="bg-slate-300 text-secondary div10 flex items-center justify-center">apa</button>
                    <button onClick={( )=> clearDisplay()} className="bg-slate-300 text-secondary div11 flex items-center justify-center">AC</button>
                    <button onClick={( )=> {}} className="div12 flex items-center justify-center h-full bg-success">enter</button>
                </div>
            </div>
        </div>
    );
}
 
export default Add;