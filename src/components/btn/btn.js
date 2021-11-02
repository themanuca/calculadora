const Btn = (label, onClick)=>{
    return(
        <button style={cssBtn} onClick={onClick}>{label}</button>
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