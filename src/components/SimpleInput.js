import { useState } from "react";

const SimpleInput = (props) => {

  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredInputisTouched, setEnteredInputIsTouched] = useState(false);

  const enteredNameIsValid = enteredUserName.trim() !== '';
  const enteredEmailIsValid = enteredEmail.includes('@');
  const nameInputIsInvalid = !enteredNameIsValid && enteredInputisTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredInputisTouched;

  let formIsValid = false;

    if(enteredNameIsValid && enteredEmailIsValid) {
      formIsValid = true;
    }
    

  const nameInputChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const nameInputBlurHandler = (event) => {
    setEnteredInputIsTouched(true);
  }

  const emailInputBlurHandler = (event) => {
    setEnteredInputIsTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredInputIsTouched(true);

    if(!enteredNameIsValid) {
      return;
    }

    console.log(enteredUserName)

    setEnteredUserName('');
    setEnteredEmail('');
    setEnteredInputIsTouched(false);

  };


  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';




  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredUserName} onBlur={nameInputBlurHandler} onChange={nameInputChangeHandler} />
        {nameInputIsInvalid && (<p className='error-text'>Name must not be empty</p>)}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" value={enteredEmail} onBlur={emailInputBlurHandler} onChange={emailInputChangeHandler} />
        {emailInputIsInvalid && (<p className='error-text'>Enter a valid email</p>)}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
