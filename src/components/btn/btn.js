const number = ({clique, numero, nome })=>{


    return(
        <>
            <div>
                <button name= {nome} onClick={clique}>{numero}</button>  
            </div>
        </>
    )
}

export default number

// Aquui estpu passando um EVENTO POR PROPS