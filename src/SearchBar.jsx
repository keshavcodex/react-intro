import { useState } from "react";

const SearchBar = ({onSubmit}) =>{
    const [term, setTerm] = useState('');
    const handleChange = (e) =>{
        setTerm(e.target.value);
    }
    const handleFormSubmit  =(e)=>{
        e.preventDefault();
        onSubmit(term);
    }

    return (
        <div>
        <form onSubmit={handleFormSubmit}>
            <input onChange={handleChange} value={term}/>
            <button onClick={handleFormSubmit}>click me</button>
        </form>
        </div>
    )
}
export default SearchBar;