import Home from "../components/Home";

export default function home() {
  const handleClick=()=>{
    localStorage.clear();
    window.location.reload();
}
    return (
      <div>
        <Home />
        <button onClick={handleClick}>Logout</button>
      </div> 
    );
}