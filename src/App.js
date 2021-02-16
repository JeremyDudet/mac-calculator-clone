import React, {useState, useEffect} from 'react';
import img from './img/plusandminus.png'
import {FaGithub} from 'react-icons/fa';

// Styled Components
import {Calculator, Display, NumberContainer, Buttons, Button, Img, SocialIcon, LinkContainer, SocialIconLink} from './App.elements';


/* 
  TODO: 
  handle operations and modifiers
  handle outline when operator is selected. 
  handle display change of AC and C button.
*/



const App = () => {
  
  const [ displayedNumber, setDisplayedNumber ] = useState('0');
  const [ firstVariable, setFirstVariable ] = useState('');
  const [ selectedOperation, setSelectedOperation ] = useState('');
  const [ secondVariable, setSecondVariable ] = useState('');
  const [ previousFirstVariable, setPreviousFirstVariable ] = useState('');
  const [ previousSelectedOperation, setPreviousSelectedOperation ] = useState('');
  const [ previousSecondVariable, setPreviousSecondVariable ] = useState('');
  
  useEffect(() => {
    console.log('-----------------------------');
    console.log(`displayedNumber: ${displayedNumber}`);
    console.log(`previous firstVariablee: ${previousFirstVariable}`);
    console.log(`previous selectedOperation: ${previousSelectedOperation}`);
    console.log(`previous secondVariable: ${previousSecondVariable}`);
    console.log(`firstVariable: ${firstVariable}`);
    console.log(`selectedOperation: ${selectedOperation}`);
    console.log(`secondVariable: ${secondVariable}`);
  });

  useEffect(() => {
    handleSetDisplay();
  });

  // working
  function handleNumberClick(event) {
    if (selectedOperation === '') {
      if (firstVariable === '' || firstVariable === '0') {
        if (event.currentTarget.textContent === "0") {
          return setFirstVariable('0');
        } else if (event.currentTarget.textContent === ".") {
          return setFirstVariable('0.')
        } else if (event.currentTarget.textContent !== "0"){
          return setFirstVariable(event.currentTarget.textContent);
        };
      } else if (firstVariable !== '' && firstVariable !== '0') {
        if (event.currentTarget.textContent === '.') {
          return (firstVariable?.includes('.') ? firstVariable : setFirstVariable(firstVariable.concat(event.currentTarget.textContent)));
        }
        return setFirstVariable(firstVariable.concat(event.currentTarget.textContent));
      };
    } else {
      if (secondVariable === '' || secondVariable === '0') {
        if (event.currentTarget.textContent === "0") {
          setSecondVariable('0');
        } else if (event.currentTarget.textContent === ".") {
          setSecondVariable('0.');
        } else if (event.currentTarget.textContent !== "0"){
          setSecondVariable(event.currentTarget.textContent);
        };
      } else if (secondVariable !== '' || secondVariable !== '0') {
        if (event.currentTarget.textContent === '.') {
          return secondVariable.includes('.') ? null : setSecondVariable(secondVariable.concat(event.currentTarget.textContent));
        }
        return setSecondVariable(secondVariable.concat(event.currentTarget.textContent));
      };
    };
  };

  // initial value -> operator (outline selected operator) -> imposedValue -> operator (display new current value) -> imposedValue
  //                                                       -> equals (display new current value) -> equals (reapply last operator and imposed value and show new result)

  // missing the change on the button effect when operation is clicked
  function handleOperationClick(event) {
    if (firstVariable === '') {
      setFirstVariable('0');
      setPreviousSelectedOperation(selectedOperation);
      setSelectedOperation(event.currentTarget.textContent);
    } else if (firstVariable !== '' && selectedOperation !== '' && secondVariable !== '') {
      if (selectedOperation === "+") {
        setSecondVariable('');
        setFirstVariable((parseFloat(firstVariable) + parseFloat(secondVariable)).toString());
        setPreviousSelectedOperation(selectedOperation);
        setSelectedOperation(event.currentTarget.textContent);
      } else if (selectedOperation === "−") {
        setSecondVariable('');
        setFirstVariable((parseFloat(firstVariable) - parseFloat(secondVariable)).toString());
        setPreviousSelectedOperation(selectedOperation);
        setSelectedOperation(event.currentTarget.textContent);
      } else if (selectedOperation === "×") {
        setSecondVariable('');
        setFirstVariable((parseFloat(firstVariable) * parseFloat(secondVariable)).toString());
        setPreviousSelectedOperation(selectedOperation);
        setSelectedOperation(event.currentTarget.textContent);
      } else if (selectedOperation === "÷") {
        setSecondVariable('');
        setFirstVariable((parseFloat(firstVariable) / parseFloat(secondVariable)).toString());
         setPreviousSelectedOperation(selectedOperation);
        setSelectedOperation(event.currentTarget.textContent);
      } else {
        setPreviousSelectedOperation(selectedOperation);
        setSelectedOperation(event.currentTarget.textContent);
      }
      // setSelectedOperation(event.currentTarget.textContent);
    } else if (firstVariable !== "" && selectedOperation !== '' && (secondVariable === '' || secondVariable === "0")) {
      setPreviousSelectedOperation(selectedOperation);
      setSelectedOperation(event.currentTarget.textContent);
    } else {
      setPreviousSelectedOperation(selectedOperation);
      setSelectedOperation(event.currentTarget.textContent);
    }
  };

  function handleClearClick() {
    if (firstVariable !== '' && (secondVariable === '' || secondVariable === "0")) {
      setFirstVariable('');
      setSecondVariable('');
      setSelectedOperation('');     
    } else if (firstVariable !== '' && (secondVariable !== '' || secondVariable !== "0")) {
      setSecondVariable('0');
    };
  };

  function handleClearButtonDisplay() {
    if (firstVariable === "" || firstVariable === "0") {
      return "AC"
    }else if (firstVariable !== '' && selectedOperation !== '' && (secondVariable === '' || secondVariable === "0")) {
      return "C"
    }else if (firstVariable !== '' || secondVariable !== '') {
      return "C"
    } else if (firstVariable !== "" || (secondVariable === '' || secondVariable === "0")) {
      return "AC"
    }  
  }

  function handleEquals() {
    if (firstVariable !== '' && selectedOperation !== '' && secondVariable === '') {
      if (selectedOperation === "+") {
        setPreviousSecondVariable(firstVariable);
        setFirstVariable((parseFloat(firstVariable) + parseFloat(firstVariable)).toString()); 
        setPreviousSelectedOperation(selectedOperation);
        setSelectedOperation('');
      } else if (selectedOperation === "−") {
        setPreviousSecondVariable(firstVariable);
        setFirstVariable((parseFloat(firstVariable) - parseFloat(firstVariable)).toString());
        setPreviousSelectedOperation(selectedOperation);
        setSelectedOperation('');
      } else if (selectedOperation === "×") {
        setPreviousSecondVariable(firstVariable);
        setFirstVariable((parseFloat(firstVariable) * parseFloat(firstVariable)).toString());
        setPreviousSelectedOperation(selectedOperation);
        setSelectedOperation('');
      } else if (selectedOperation === "÷") {
        setPreviousSecondVariable(firstVariable);
        setFirstVariable((parseFloat(firstVariable) / parseFloat(firstVariable)).toString());
        setPreviousSelectedOperation(selectedOperation);
        setSelectedOperation('');
      };
    } else if (firstVariable !== '' && selectedOperation === '' && previousSelectedOperation !== "" && previousSecondVariable !== '') {
      if (previousSelectedOperation === "+") {
        setFirstVariable((parseFloat(firstVariable) + parseFloat(previousSecondVariable)).toString()); 
      } else if (previousSelectedOperation === "−") {
        setFirstVariable((parseFloat(firstVariable) - parseFloat(previousSecondVariable)).toString());
      } else if (previousSelectedOperation === "×") {
        setFirstVariable((parseFloat(firstVariable) * parseFloat(previousSecondVariable)).toString());
      } else if (previousSelectedOperation === "÷") {
        setFirstVariable((parseFloat(firstVariable) / parseFloat(previousSecondVariable)).toString());
      };
    } else {
      if (selectedOperation === "+") {
        setFirstVariable((parseFloat(firstVariable) + parseFloat(secondVariable)).toString()); 
        setPreviousSelectedOperation(selectedOperation);
        setSelectedOperation('');
        setPreviousSecondVariable(secondVariable);
        setSecondVariable('');
      } else if (selectedOperation === "−") {
        setFirstVariable((parseFloat(firstVariable) - parseFloat(secondVariable)).toString());
        setPreviousSelectedOperation(selectedOperation);
        setSelectedOperation('');
        setPreviousSecondVariable(secondVariable);
        setSecondVariable('');
      } else if (selectedOperation === "×") {
        setFirstVariable((parseFloat(firstVariable) * parseFloat(secondVariable)).toString());
        setPreviousSelectedOperation(selectedOperation);
        setSelectedOperation('');
        setPreviousSecondVariable(secondVariable);
        setSecondVariable('');
      } else if (selectedOperation === "÷") {
        setFirstVariable((parseFloat(firstVariable) / parseFloat(secondVariable)).toString());
        setPreviousSelectedOperation(selectedOperation);
        setSelectedOperation('');
        setPreviousSecondVariable(secondVariable);
        setSecondVariable('');
      };
    };
  };

  function handlePercentageClick() {
    if (selectedOperation === '') {
      if (firstVariable === '' || parseFloat(firstVariable) === 0) {
        return setFirstVariable('');
      } else if (firstVariable !== '' || firstVariable !== '0') {
        return setFirstVariable((parseFloat(firstVariable) / 100).toString());
      };
    } else if (previousSelectedOperation !== '' && firstVariable !== '' && secondVariable !== '') {
      setFirstVariable((parseFloat(firstVariable) / 100).toString());
    } else {
      if (secondVariable === '' || secondVariable === '0') {
        return;
      } else if (secondVariable !== '' || secondVariable !== '0') {
        return setSecondVariable((parseFloat(secondVariable) / 100).toString());
      };
    };
  };

  function handleChangeSignClick() {
    if (selectedOperation === '') {
      if (firstVariable === '' || parseFloat(firstVariable) === 0) {
        return setFirstVariable('');
      } else if (firstVariable !== '' || firstVariable !== '0') {
        if (firstVariable[0] !== "-") {
          return setFirstVariable("-" + firstVariable);
        } else if (firstVariable[0] === "-") {
          return setFirstVariable(firstVariable.slice(1));
        }
      };
    } else {
      if (secondVariable === '' || secondVariable === '0') {
        return;
      } else if (secondVariable !== '' || secondVariable !== '0') {
        if (secondVariable[0] !== "-") {
          return setFirstVariable("-" + secondVariable);
        } else if (secondVariable[0] === "-") {
          return setFirstVariable(secondVariable.slice(1));
        }
      };
    };
  }

  function handleSetDisplay() {
    if ((firstVariable === '' || firstVariable === '0') && selectedOperation === '' && secondVariable === '') {
      setDisplayedNumber('0');
    } else if (firstVariable !== '' && (selectedOperation === '') && secondVariable !== '') {
      setDisplayedNumber(firstVariable);
    } else if (firstVariable !== '' && (selectedOperation === '' || selectedOperation !== '') && secondVariable === '') {
      setDisplayedNumber(firstVariable);
    } else if (firstVariable !== '' && selectedOperation !== '' && secondVariable !== '') {
      setDisplayedNumber (secondVariable);
    }
    // return displayedNumber;
  }

  const handleDisplayFontSize = () => {
    const numberLength = displayedNumber.length;
    console.log(`numberLength = ${numberLength}`);
    if (numberLength < 9) {
      return {fontSize: '40px'};
    } else if (numberLength < 11) {
      return {fontSize: '33px'};
    } else if (numberLength < 13) {
      return {fontSize: '28px'};
    } else if (numberLength < 15) {
      return {fontSize: '24px'};
    } else if (numberLength < 18) {
      return {fontSize: '20px'};
    } else if (numberLength < 20) {
      return {fontSize: '18px'};
    } else if (numberLength < 24) {
      return {fontSize: '15px'};
    } else if (numberLength >= 24) {
      return {fontSize: '13px'};
    } else {
      return {fontSize: '40px'};
    }
  };
  

  return (
    <>
      <SocialIcon>
        <SocialIconLink href='https://github.com/JeremyDudet/mac-calculator-clone' target="_blank" aria-label="GitHub">
          <FaGithub size={'1.2em'}/>
        </SocialIconLink>
      </SocialIcon>
      <Calculator>
      <Display><NumberContainer style={handleDisplayFontSize()}>{displayedNumber}</NumberContainer></Display>
      <Buttons>
        <Button onClick={handleClearClick} className="modifier AC">{handleClearButtonDisplay()}</Button>
        <Button onClick={handleChangeSignClick} className="modifier changeSign"><Img src={img} /></Button>
        <Button onClick={handlePercentageClick} className="modifier %">%</Button>
        <Button onClick={(event) => handleOperationClick(event)} selected={(selectedOperation === '÷')} className="operation /">÷</Button>
        <Button onClick={(event) => handleNumberClick(event)} className="number seven">7</Button>
        <Button onClick={(event) => handleNumberClick(event)} className="number eight">8</Button>
        <Button onClick={(event) => handleNumberClick(event)} className="number nine">9</Button>
        <Button onClick={(event) => handleOperationClick(event)} selected={(selectedOperation === '×')} className="operation x">×</Button>
        <Button onClick={(event) => handleNumberClick(event)} className="number four">4</Button>
        <Button onClick={(event) => handleNumberClick(event)} className="number five">5</Button>
        <Button onClick={(event) => handleNumberClick(event)} className="number six">6</Button>
        <Button onClick={(event) => handleOperationClick(event)} selected={(selectedOperation === '−')} className="operation minus">−</Button>
        <Button onClick={(event) => handleNumberClick(event)} className="number one">1</Button>
        <Button onClick={(event) => handleNumberClick(event)} className="number 2">2</Button>
        <Button onClick={(event) => handleNumberClick(event)} className="number three">3</Button>
        <Button onClick={(event) => handleOperationClick(event)} selected={(selectedOperation === '+')} className="operation plus">+</Button>
        <Button onClick={(event) => handleNumberClick(event)} className="number zero">0</Button>
        <Button onClick={(event) => handleNumberClick(event)} className="number dot">.</Button>
        <Button onClick={handleEquals} className="operation equals">=</Button>
      </Buttons>
      </Calculator>
    </>
  );
};

export default App;
