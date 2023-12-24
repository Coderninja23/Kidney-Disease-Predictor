import { useReducer } from "react";
import classes from "./FormData.module.css";
import Button from "./UI/Button";
import { diseaseActions } from "../store/KidneyData";
import { useState } from "react";
import axios from 'axios';

const initialState = {
  age: 0,
  bp: 0,
  sg: 0,
  al: 0,
  su: 0,
  rbc: 0,
  pc: 0,
  pcc: 0,
  ba: 0,
  bgr: 0,
  bu: 0,
  sc: 0,
  // sod: 0,
  // pot: 0,
  hemo: 0,
  pcv: 0,
  wc: 0,
  rc: 0,
  htn: 0,
  dm: 0,
  cad: 0,
  pe: 0,
  ape: 0,
  ane: 0,
  classification: "",
};

const reducer = (state, action) => {
  if (action.type === "age") state.age = action.payload;
  else if (action.type === "bp") state.bp = action.payload;
  else if (action.type === "sg") state.sg = action.payload;
  else if (action.type === "al") state.al = action.payload;
  else if (action.type === "su") state.su = action.payload;
  else if (action.type === "rbc") state.rbc = action.payload;
  else if (action.type === "pc") state.pc = action.payload;
  else if (action.type === "pcc") state.pcc = action.payload;
  else if (action.type === "ba") state.ba = action.payload;
  else if (action.type === "bgr") state.bgr = action.payload;
  else if (action.type === "bu") state.bu = action.payload;
  else if (action.type === "sc") state.sc = action.payload;
  // else if (action.type === "sod") state.sod = action.payload;
  // else if (action.type === "pot") state.pot = action.payload;
  else if (action.type === "hemo") state.hemo = action.payload;
  else if (action.type === "pcv") state.pcv = action.payload;
  else if (action.type === "wc") state.wc = action.payload;
  else if (action.type === "rc") state.rc = action.payload;
  else if (action.type === "htn") state.htn = action.payload;
  else if (action.type === "dm") state.dm = action.payload;
  else if (action.type === "cad") state.cad = action.payload;
  else if (action.type === "pe") state.pe = action.payload;
  else if (action.type === "epe") state.ape = action.payload;
  else if (action.type === "ane") state.ane = action.payload;
  else if (action.type === "classification")
    state.classification = action.payload;
  return { ...state };
};

const FormData = () => {
  const [isLoading, setIsLoading]=useState(false);
  const [state, dispatchFn] = useReducer(reducer, initialState);
  const [show, setShow] = useState(false);
  const [prediction, setPrediction] = useState("");

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    // console.log(state);
    diseaseActions.setDisease(state);
    setShow(true);

    const data = {'features': [
      state.age,
      state.bp,
      state.sg,
      state.al,
      state.su,
      state.bgr,
      state.bu,
      state.sc,
      state.hemo,
      state.pcv,
      state.wc,
      state.rc,
      state.rbc,
      state.pc,
      state.pcc,
      state.ba,
      
      
      
      // state.// sod,
      // state.// pot,

      state.htn,
      state.dm,
      state.cad,
      state.ape,
      state.pe,
      state.ane,
    ]};



    // const sample={'features':[71, 60, 1.025, 0, 0, 107.72, 32.8, 0.9, 15.2, 42, 7700, 5.5, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]};
    // const sample2={'features': [45, 60, 1.01, 2.0, 0, 268, 86, 4, 10, 29, 9200, 3.94, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0]};

    console.log(data);
    // console.log(state.rc);
  //   const response = await fetch("http://localhost:5000/predict", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   console.log(response);
  //   const res = await response.json();
  //   console.log(res);
  //   if(!response.ok){
  //     console.log("Network error");
  //   }
  // };

  try {
    setIsLoading(true);
    const response = await axios.post('http://localhost:5000/predict' , data);
    setIsLoading(false);
    setPrediction(response.data.prediction);
    console.log(prediction);
    if(!response.ok)console.log("Not Right");
    console.log(response)
  } catch (error) {
    console.error('Error:', error);
  }

};


  const closeShowHandler = () => {
    setShow(false);
  };

  return (
    <div className={classes.formContainer}>
      <form className={classes.formInput} onSubmit={formSubmitHandler}>
        <div className={classes.formHeading}>
          Enter the details to make<pre> PREDICTION</pre>
        </div>
        <div>
          <input
            placeholder="Age"
            type="number"
            onChange={(event) =>
              dispatchFn({ type: "age", payload:  +event.target.value })
            }
          />
          <input
            placeholder="Blood Pressure"
            type="number"
            onChange={(event) =>
              dispatchFn({ type: "bp", payload: parseInt(event.target.value,10) })
            }
          />
          <input
            placeholder="Specific Gravity"
            type="number"
            step="0.01"
            onChange={(event) =>
              dispatchFn({ type: "sg", payload: +event.target.value })
            }
          />
          <input
            placeholder="Albumin"
            type="number"
            step="1"
            onChange={(event) =>
              dispatchFn({ type: "al", payload: parseInt(event.target.value,10) })
            }
          />
          <input
            placeholder="Sugar"
            type="number"
            step="1"
            onChange={(event) =>
              dispatchFn({ type: "su", payload: parseInt(event.target.value,10) })
            }
          />
          <input
            placeholder="Blood Glucose Random"
            type="number"
            onChange={(event) =>
              dispatchFn({ type: "bgr", payload: parseInt(event.target.value,10) })
            }
          />
          <input
            placeholder="Blood Urea"
            type="number"
            onChange={(event) =>
              dispatchFn({ type: "bu", payload: parseInt(event.target.value,10) })
            }
          />
          <input
            placeholder="Serum Creatinine"
            type="number"
            step="0.01"
            onChange={(event) =>
              dispatchFn({ type: "sc", payload: +event.target.value })
            }
          />
          <input
            placeholder="Haemoglobin"
            type="number"
            step="0.1"
            onChange={(event) =>
              dispatchFn({ type: "hemo", payload: +event.target.value })
            }
          />
          <input
            placeholder="Packed Cell Volume"
            type="number"
            onChange={(event) =>
              dispatchFn({ type: "pcv", payload: parseInt(event.target.value,10) })
            }
          />
          <input
            placeholder="White blood cells count"
            type="number"
            onChange={(event) =>
              dispatchFn({ type: "wc", payload: parseInt(event.target.value,10) })
            }
          />
          <input
            placeholder="Red blood cells count"
            type="number"
            step="0.01"
            onChange={(event) =>
              dispatchFn({ type: "rc", payload: event.target.value==="Normal"?1:0 })
            }
          />
          <select
            placeholder="Red Blood Cells"
            type="text"
            onChange={(event) =>
              dispatchFn({ type: "rbc", payload: event.target.value==="Normal"?1:0 })
            }
          >
            <option disabled selected>
              Red Blood Cells
            </option>
            <option>Normal</option>
            <option>Abnormal</option>
          </select>
          <select
            placeholder="Pus Cells"
            type="number"
            onChange={(event) =>
              dispatchFn({ type: "pc", payload: event.target.value==="Normal"?1:0 })
            }
          >
            <option disabled selected>
              Pus Cells
            </option>
            <option>Normal</option>
            <option>Abnormal</option>
          </select>
          <select
            placeholder="Pus Cells Clumps"
            type="number"
            onChange={(event) =>
              dispatchFn({ type: "pcc", payload: event.target.value==="Present"?1:0 })
            }
          >
            <option disabled selected>
              Pus Cells Clumps
            </option>
            <option>Present</option>
            <option>Not Present</option>
          </select>
          <select
            placeholder="Bacteria"
            type="number"
            onChange={(event) =>
              dispatchFn({ type: "ba", payload: event.target.value==="Present"?1:0 })
            }
          >
            <option disabled selected>
              Bacteria
            </option>
            <option>Present</option>
            <option>Not Present</option>
          </select>
          
          
          
          {/* <input placeholder="SOD" type="number" onChange={(event) => dispatchFn({type: 'sod', payload: event.target.value})}/>
          <input placeholder="POT" type="number" step="0.1" onChange={(event) => dispatchFn({type: 'pot', payload: event.target.value})}/> */}
          
          
          
          <select
            placeholder="Hypertension"
            type="number"
            onChange={(event) =>
              dispatchFn({ type: "htn", payload: event.target.value==="Yes"?1:0 })
            }
          >
            <option disabled selected>
              Hypertension
            </option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <select
            placeholder="Diabetes Mellitus"
            type="number"
            onChange={(event) =>
              dispatchFn({ type: "dm", payload: event.target.value==="Yes"?1:0 })
            }
          >
            <option disabled selected>
              Diabetes Mellitus
            </option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <select
            placeholder="Coronary Artery Disease"
            type="number"
            onChange={(event) =>
              dispatchFn({ type: "cad", payload: event.target.value==="Yes"?1:0 })
            }
          >
            <option disabled selected>
              Coronary Artery Disease
            </option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <select
            placeholder="Appetite"
            type="number"
            onChange={(event) =>
              dispatchFn({ type: "ape", payload: event.target.value==="Yes"?1:0 })
            }
          >
            <option disabled selected>
              Appetite
            </option>
            <option>Good</option>
            <option>Bad</option>
          </select>
          <select
            placeholder="Peda Edema"
            type="number"
            onChange={(event) =>
              dispatchFn({ type: "pe", payload: event.target.value==="Yes"?1:0 })
            }
          >
            <option disabled selected>
              Peda Edema
            </option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <select
            placeholder="Anaemia"
            type="number"
            onChange={(event) =>
              dispatchFn({ type: "ane", payload: event.target.value==="Yes"?1:0 })
            }
          >
            <option disabled selected>
              Anaemia
            </option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <input
            placeholder="Classification"
            type="number" 
            onChange={(event) =>
              dispatchFn({
                type: "classification",
                payload: event.target.value,
              })
            }
          />
        </div>
        <br/>

        {isLoading && <p>is Loading...</p>}

      {[prediction && <p className={classes.predictionData}>{prediction.toString()==="ckd"? "You are suffering from Chronic Kidney Disease":"You are not suffering from Chronic Kidney Disease"}</p>]}
        <Button>Predict!</Button>
      </form>
      {/* {show && <Testing closeShow={closeShowHandler} />} */}
    </div>
  );
};

export default FormData;
