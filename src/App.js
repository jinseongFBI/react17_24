
import './App.css';
// import Props from './R17_33/R17_Props'
// import PropsDatatype from './R17_33/R18_PropsDatatype';
// import PropsBoolean from './R17_33/R19_PropsBoolean'
// import PropsObjVal from './R17_33/R20_PropsObjVal'
// import PropsRequired from './R17_33/R21_PropsRequired'
// import PropsDefault from './R17_33/R22_PropsDefault'
// import PropsNode from './R17_33/R23_PropsNode'
import ReactState from './R17_33/R24_ReactState'
function App() {
  return (
    <div>
    <h1>Start React</h1>
    <p>CSS 적용하기</p>
    {/* <Props props_val="THIS IS PROPS"/> */}
    {/* <PropsDatatype
    String={"react"}
    Number={200}
    Boolean={1==1}
    Array={[0,1,8]}
    Object Json={{react:"리액트",twohundred:"200"}}
    Function={console.log("FunctinoProps: function!")}
    /> */}
    {/* <PropsBoolean BooleanTrueFalse={false}/>
    <PropsBoolean BooleanTrueFalse/> */}
    {/* <PropsObjVal ObjectJson={{react:"리액트", twohundred:"200"}}/> */}
    {/* <PropsDefault ReactNumber={200}/> */}
    {/* <PropsNode>
      <span>node from App.js</span>
    </PropsNode> */}
    <ReactState></ReactState>
    </div>
  );
}

export default App;
