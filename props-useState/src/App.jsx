import "./App.css";
import PersonProfile from "./compontents/PersonProfile";

function App() {
  return (
    <>
      <div className="personlist">
        <PersonProfile
          firstName="Yuri"
          lastName="Givens"
          age={27}
          hairColor="Brown"
        />
        <PersonProfile
          firstName="June"
          lastName="Bell"
          age={35}
          hairColor="Black"
        />
      </div>
    </>
  );
}

export default App;
