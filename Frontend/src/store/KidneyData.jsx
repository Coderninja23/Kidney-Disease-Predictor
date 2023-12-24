import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  age: 0,
  bp: 0,
  sg: 0,
  al: 0,
  su: 0,
  rbc: "",
  pc: "",
  pcc: "",
  ba: "",
  bgr: 0,
  bu: 0,
  sc: 0,
  // sod: 0,
  // pot: 0,
  hemo: 0,
  pcv: 0,
  wc: 0,
  rc: 0,
  htn: "",
  dm: "",
  cad: "",
  pe: "",
  ane: "",
  classification: "",
};

const diseaseSlice = createSlice({
  name: "disease",
  initialState: initialState,
  reducers: {
    setDisease(state, { payload }) {
      state.age = payload.age;
      state.bp = payload.bp;
      state.sg = payload.sg;
      state.al = payload.al;
      state.su = payload.su;
      state.rbc = payload.rbc;
      state.pc=payload.pc;
      state.pcc=payload.pcc;
      state.ba=payload.ba;
      state.bgr=payload.bgr;
      state.bu=payload.bu;
      state.sc=payload.sc;
      // state.sod=payload.sod;
      // state.pod=payload.pod;
      state.hemo=payload.hemo;
      state.pcv=payload.pcv;
      state.wc=payload.wc;
      state.rc=payload.rc;
      state.htn=payload.htn;
      state.dm=payload.dm;
      state.cad=payload.cad;
      state.pe=payload.pe;
      state.ane=payload.ane;
      state.classification=payload.classification;
    },
  },
});

export default diseaseSlice;

export const diseaseActions = diseaseSlice.actions;