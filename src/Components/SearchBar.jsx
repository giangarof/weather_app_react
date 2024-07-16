import { useState } from "react"

export default function SearchBar({lookup}) {
    const [term, setTerm] = useState('')

    const style = {
        style:{
            display:'flex', 
            flexDirection:'row',
            justifyContent:'center',
            gap:'10px',
            margin:"20px 0 20px 0"
            
        },
        input:{
            border:'none', borderBottom:'1px solid #000',
            outline:'none'
        },
    }

    const onsubmit = (e) => {
        e.preventDefault()
        lookup(term)
    }
    return (
        <>  
            <form onSubmit={onsubmit}>

                <div style={style.style}>
                    <input
                        onChange={e => setTerm(e.target.value)}
                        value={term}
                        style={style.input} 
                        type="text" />
                    <button>Search</button>
                </div>
            </form>
        </>
    )
}