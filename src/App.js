import React, { useState } from 'react';
import './App.css';
import Arrow from './components/arrows';
import Slider from './components/slider';
import NavLines from './components/navLines';
import {slidePrev} from './arrows-scrolling/index.js';
import {getSuperArr, getSuperHeroeInfo} from './getSuperArr.js';

function App() {
  const superArr = getSuperArr();
//устанавливаем стартовое значение состояния компонента (0)
  const [slideNumber, setSlideNumber] = useState(0);

  function slideNext() {
    //зацикливание слайдов 
    //когда текущий индекс (переменная index) доходит до конца массива, то текущий индекс (переменная index) становится нулевым (index = 0)
    if (slideNumber === superArr.length-1) {
      setSlideNumber(0);
    // в других случаях текущий индекс (переменная index) станет следующим слайдом (index+1)
    } else (setSlideNumber(slideNumber+1));
}

const heroeInfo = getSuperHeroeInfo(slideNumber);

  return (
    <div class="main-container">
      <div class="slider-container">
        <Arrow onclick={slidePrev} isLeft={true} />
        <div id="super-slider-card" class="slider-card">
          <Slider 
            heroeName={heroeInfo.superHeroeCharacter}
            universe={heroeInfo.comicsUniverse}
            alterEgo={heroeInfo.alterEgo}
            activity={heroeInfo.activity}
            friends={heroeInfo.friends}
            powers={heroeInfo.powers}
            description={"по популярности ... бла бла бла"}
            image={heroeInfo.superHeroePic} 
          />
        </div>
        <Arrow onclick={() => slideNext()} isLeft={false} />
      </div>
      {superArr.map(item => (
        <div class="lines-container">
        <div class="lines">
          <NavLines 
            linesNames={item}
          />
        </div>
      </div>
      ))}
  
    </div>
  );
}

export default App;