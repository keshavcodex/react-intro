import "./App.css";
import SearchBar from "./SearchBar";
// import ImageList from "./ImageList";
import searchImages from "./api"


const App= ()=> {
  const handleSubmit = async(term) =>{
    console.log(term)
  }
  
  return (
    <div className="App">
    <SearchBar onSubmit={handleSubmit}/>
    {/* <ImageList image={images}/> */}
    </div>
  );
}

export default App;
