import Btn from '../btn/btn';
import { useState } from 'react';

export default function Display(){

    const [valorTela, setValorTela] = useState('')
    const [resultado, setResultado] = useState(0)
    const [acumulador, setAcumulador] = useState(0)
    const [operado, setOperado] = useState(false)
    const [disable, setDisable] = useState('')

    const cssTelaOper = {
        fontSize:25,
        color:'#fff',
        height:20,
       
    }

    const cssTelaRes ={
        fontSize:50,
        color:'#fff',
    }


    const cssTela = {
        display : 'flex',
        paddingLeft:20,
        paddinRight:20,
        justfyContent:'center',
        alignItems:'flex-start',
        background:'#444',
        flexDirection:'column',
        width:260
    }

    const Tela = (valor, resultado)=>{
        return(
            <div style={cssTela}>
                <span style={cssTelaOper}>{valor}</span>
                <span style={cssTelaRes}>{resultado}</span>
            </div>
        )
    }

    <Btn/>

    
    const addDigitoTela  = (d)=>{
        if((d=='+' || d=='-'|| d=='*'||d=='/') && operado){
            
            setOperado(false)
            setValorTela(resultado + d)
            
            return
    
        }
        

        if(operado){
            
            setValorTela(d)
            setOperado(false)
            return
        }
        
        const valorDigitadoTela=valorTela + d
        setValorTela(valorDigitadoTela)

    }
    
    
    const limparMemoria = ()=>{
        setOperado(false)
        setValorTela('')
        setResultado(0)
        setAcumulador(0)
        return
    }
    
    const Operacao=(oper)=>{
        if(oper =='bs'){
            let vtela = valorTela
            vtela = vtela.substring(0,(vtela.length-1))
          
            setValorTela(vtela)
            setOperado(false)
            return
        }
        
        try{
            const r= eval(valorTela) //avalia a expressão e retorna seu valor
            setAcumulador(r)
            setResultado(r)
            setOperado(true)
        }catch{
            setResultado('ERRO')
        }

        

    }

    const cssBotoes={
        flexDirection:'row',
        flexWrap:'wrap',
    }


    const cssContainer = {
        display:'flex',
        justfyContent:'flex-start',
        alignItems: 'center',
        flexDirection:'column',
        width:300,
        border:'1px solid #000'

    }


    return(
        <>
            <div style={cssContainer}>
                <h3>Calculadora</h3>
            
                {Tela(valorTela,resultado)}
                <div style={cssBotoes}>
                  {Btn('AC', limparMemoria)}
                  {Btn('(',()=>addDigitoTela('('),disable)}
                  {Btn(')',()=>addDigitoTela(')'),disable)}
                  {Btn('/',()=>addDigitoTela('/'),disable)}
                  {Btn('7',()=>addDigitoTela('7'))}
                  {Btn('8',()=>addDigitoTela('8'))}
                  {Btn('9',()=>addDigitoTela('9'))}
                  {Btn('*',()=>addDigitoTela('*'),disable)}
                  {Btn('4',()=>addDigitoTela('4'))}
                  {Btn('5',()=>addDigitoTela('5'))}
                  {Btn('6',()=>addDigitoTela('6'))}
                  {Btn('+',()=>addDigitoTela('+'),disable)}
                  {Btn('1',()=>addDigitoTela('1'))}
                  {Btn('2',()=>addDigitoTela('2'))}
                  {Btn('3',()=>addDigitoTela('3'))}
                  {Btn('-',()=>addDigitoTela('-'),disable)}
                  {Btn('0',()=>addDigitoTela('0'))}
                  {Btn('.',()=>addDigitoTela('.'),disable)}
                  {Btn('<-',()=>Operacao('bs'))}
                  {Btn('=',()=>Operacao('='))}

                  
                </div>
            
            </div>
        </>
    )


 


    


   

   

}

