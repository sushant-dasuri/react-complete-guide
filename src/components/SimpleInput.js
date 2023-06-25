import { useState } from "react";

const SimpleInput = (props) => {

  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredNameisTouched, setEnteredNameIsTouched] = useState(false);

  const enteredNameIsValid = enteredUserName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameisTouched;

  let formIsValid = false;

    if(enteredNameIsValid) {
      formIsValid = true;
    }
    

  const nameInputChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameIsTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameIsTouched(true);

    if(!enteredNameIsValid) {
      return;
    }

    console.log(enteredUserName)

    setEnteredUserName('');
    setEnteredNameIsTouched(false);

  };


  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';



  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredUserName} onBlur={nameInputBlurHandler} onChange={nameInputChangeHandler} />
        {nameInputIsInvalid && (<p className='error-text'>Name must not be empty</p>)}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
