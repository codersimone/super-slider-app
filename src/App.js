import './App.css';
import Arrow from './components/arrows';
import Slider from './components/slider';
import NavLines from './components/navLines';
import superBase from './data/superBase';
// import './arrows-scrolling/index';


function App() {
  const universe = superBase[0].comicsUniverse;
  // const alterEgo = superBase[heroeName].alterEgo;

  const linesNames = "Супермен";
  return (
    <div class="main-container">
      <div class="slider-container">
        <Arrow isLeft={true} />
        <div id="super-slider-card" class="slider-card">
          <Slider 
            // heroeName={superHeroeCharacter}
            universe={universe}
            alterEgo={"Брюс Уэйн"}
            activity={"борец с преступностью, филантроп, миллиардер"}
            friends={"Робин, Бэтгерл"}
            powers={"интеллект, обширные познания, знания боевых искусств, ловкость"}
            description={"по популярности ... бла бла бла"}
            image={"pics/batman.jpeg"} 
          />
        </div>
        <Arrow isLeft={false} />
      </div>
      <div class="lines-container">
        <div class="lines">
          <NavLines 
            linesNames={linesNames}
          />
        </div>
        <div class="lines">
          <NavLines 
            linesNames={linesNames}
          />
        </div>
        <div class="lines">
          <NavLines 
            linesNames={linesNames}
          />
        </div>
        <div class="lines">
          <NavLines 
            linesNames={linesNames}
          />
        </div>
        <div class="lines">
          <NavLines 
            linesNames={linesNames}
          />
        </div>
      </div>
    </div>
  );
}

export default App;