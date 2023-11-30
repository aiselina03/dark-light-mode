import "./style.scss";

function App() {
  function handleToggle() {
    document.body.classList.toggle("dark");
  }
  return (
    <div className="App">
      <h2>hello</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro illum delectus voluptatum nam, itaque libero corrupti enim similique odit iusto quos exercitationem tempore eos quas rem architecto? Nihil qui illum delectus beatae neque corrupti suscipit nemo, consectetur voluptatum asperiores quos eaque officiis laudantium minus enim numquam! Excepturi corporis aspernatur rerum?</p>
      <button onClick={()=>handleToggle()}>click me</button>
    </div>
  );
}

export default App;
