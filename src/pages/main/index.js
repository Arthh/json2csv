/* eslint-disable array-callback-return */
import React, {useState} from 'react';
import {ContainerTitulo, CodeArea } from './styles'

function Main() {
  const [jsonData, setJsonData ] = useState({});
  const [showCsv, setShowCsv ] = useState(false);

  function getValueOfTextArea() {
    setShowCsv(false);
    let jsonCode = document.getElementById("json").value;

    // verificar se o json esta vazio
    if(!jsonCode){
      alert('Json vazio!');
      return;
    }

    //verifica formato do json
    const jsonFormat = verifyJsonFormat(jsonCode);
     if(!jsonFormat){
       return;
     }
     
     // verifica se json é aninhado
     const verifyNested = verifyNestedJson(jsonFormat);
      if(verifyNested){
        return alert("Json aninhado não é aceito!")
      }

      setJsonData(jsonFormat);
      setShowCsv(!showCsv)
      return;
  }

  // VERIFICA SE O JSON É ANINHADO OU NÃO
  function verifyNestedJson(data){
    var isNested = 0;
    if(data.length > 1){
      data.map( (obj) => {
        Object.keys(obj).some((key) => {
           if(obj[key] && typeof obj[key] === 'object')
             return isNested = 1;
      })})
    }
    else {
      isNested = Object.keys(data).some((key) => {
        return data[key] && typeof data[key] === 'object';
    })}; 

    //LEMBRANDO QUE 1 É CONSIDERADO TRUE, LOGO ESSA VERIFICAÇÃO É "INUTIL"
    (isNested > 0 ) ? isNested = true : isNested = false;
    return isNested;
    }

  // VERIFICA SE O FORMATO DO JSON É CORRETO
  function verifyJsonFormat(data){
    try {
      JSON.parse(data);
  } catch (er) {
      alert("Formato do Json invalido!")
      return false;
  }
  return JSON.parse(data);
  }

  // EXIBE O JSON RECEBIDO SE FOR UM ARRAY
  function csvShowDataArray(data){
    if(!showCsv) return; 
      return (
        <>
         {
           jsonData.map( (data) => {
             const keys = Object.keys(data);
             return(
               <table>
                 <thead>
                   <tr>
                   {keys.map( (key) => {
                     let randomKey = Math.floor((Math.random() * 100) + 1);
                     return <th key={randomKey} > {key} </th>
                   })}
                   </tr>
                 </thead>
                 <tbody>
                 <tr>
                 {keys.map( (key) => {
                   let randomKey = Math.floor((Math.random() * 100) + 1);
                     return <th key={randomKey} > {data[key]} </th>
                   })}
                   </tr>
                   </tbody>
               </table>
             )
           } )
         }
        </>
      )
  }

  // EXIBE O JSON RECEBIDO SE FOR UM UNICO OBJETO
  function csvShowDataSingle(data) {
    if(!showCsv) return; 
    const keys = Object.keys(data);
    const values = Object.values(data);
      return (
        <h1>  
          <table>
          <thead>
            <tr>
            {keys.map((key) => {
              return <th key={key}>{key}</th>
            })}
            </tr>
          </thead>
          <tbody>
          <tr>
            {values.map((value) => {
                return <th key={value}>{value}</th>
              })}
          </tr>
          </tbody>
        </table> 
          </h1>
         )    
     }

  // VERIFICA SE O JSON É UM ARRAY OU NÃO, E FAZ A CHAMADA PRA EXIBIR
  function csvShowData(data) {
    if(!showCsv) return; 
    return (jsonData.length > 1) ? csvShowDataArray(data) : csvShowDataSingle(data);
  }

  // LIMPA A ENTRADA DO JSON E SAIDA DO CSV
  function clearJsonData(){
    document.getElementById("json").value = "";
    setShowCsv(false);
    return;
  }

  return ( 
    <>
     <ContainerTitulo>
      <h1>Conversor de Json para CSV </h1>
    </ContainerTitulo>

    <CodeArea>
    <div className='box'>
      <h1>JSON</h1>
      <textarea spellCheck="false" name="jsonCode" id="json" />
    </div>

  <div className='buttons'>
    <button onClick={() => getValueOfTextArea()}> Converter </button>
    <button onClick={() => clearJsonData()} > Limpar </button>
  </div>

  <div className='box'>
    <h1>CSV</h1>
    <div className="csvBox" id="csv" > 

      {csvShowData(jsonData)}

    </div> 
  </div>

    </CodeArea> 
    
    </>   
  )
  
}
export default Main;