import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {

  const nameInputref = useRef();
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameisTouched, setEnteredNameIsTouched] = useState(false)

  useEffect(() => {
    if(enteredNameIsValid) {
      console.log('Name Input is valid');
    }
  }, [enteredNameIsValid])

  const nameInputChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameIsTouched(true);

    if(enteredUserName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameIsTouched(true);

    if(enteredUserName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredUserName)

    const enteredValue = nameInputref.current.value;
    console.log(enteredValue);

    setEnteredUserName('')

  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameisTouched;

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';



  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredUserName} ref={nameInputref} onBlur={nameInputBlurHandler} onChange={nameInputChangeHandler} />
        {nameInputIsInvalid && (<p className='error-text'>Name must not be empty</p>)}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
