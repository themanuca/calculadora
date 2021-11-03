const Btn = (label, onClick, disabled)=>{
    return(
        <button style={cssBtn} onClick={onClick} disabled={disabled} >{label}</button>
    )
}

const cssBtn={
    fontSize:30,
    height:75,
    width:75,
    padding:20,
    backgroundColor:'#000',
    color:'#fff',
    borderColor:'#000',
    textAlign:'center',
    outline:'none'
}

export default Btn