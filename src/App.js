import './App.css';
import Arrow from './components/arrows';
import Slider from './components/slider';
import NavLines from './components/navLines';
import superBase from './data/superBase';
// import {slideNext, slidePrev} from './arrows-scrolling/index';

function App() {
  const universe = superBase[0].comicsUniverse;
  const alterEgo = superBase[0].alterEgo;
  const activity = superBase[0].typeOfActivity;
  const friends = superBase[0].friends;
  const powers = superBase[0].superPowers;
  // const description = superBase[0].moreDetailed;
  const image = superBase[0].superHeroePic;

  const linesNames = "Супермен";
  return (
    <div class="main-container">
      <div class="slider-container">
        <Arrow isLeft={true} />
        <div id="super-slider-card" class="slider-card">
          <Slider 
            heroeName={"Бэтмен"}
            universe={universe}
            alterEgo={alterEgo}
            activity={activity}
            friends={friends}
            powers={powers}
            description={"по популярности ... бла бла бла"}
            image={image} 
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