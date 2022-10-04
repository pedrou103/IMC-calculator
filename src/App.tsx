import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weigthField, setWeigthField] = useState<number>(0);

  const handleCalculateButton = () => {
    if (heightField && weigthField ) {
      
    } else {
      alert("Digite todos os campos.");
    }
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input
            type="number"
            placeholder="Digite a sua altura, Ex 1.5 (em metros)"
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
          />

          <input
            type="number"
            placeholder="Digite a sua altura, Ex 75.3 (em kg)"
            value={weigthField > 0 ? weigthField : ''}
            onChange={e => setWeigthField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculateButton}>Calcular</button>
          </div>
        <div className={styles.rightSide}>...</div>
      </div>
    </div>
  );
}

export default App;