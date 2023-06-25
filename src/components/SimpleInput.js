import { useState, useRef } from "react";

const SimpleInput = (props) => {

  const nameInputref = useRef();

  const [enteredUserName, setEnteredUserName] = useState('');

  const nameInputChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    console.log(enteredUserName)

    const enteredValue = nameInputref.current.value;
    console.log(enteredValue);

    setEnteredUserName('')

  }



  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredUserName} ref={nameInputref} onChange={nameInputChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
