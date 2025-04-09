import { useState } from 'react';
import { styled } from 'styled-components';
import InputLabel from './Input';
import Button from './Button';

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <InputLabel
          label="Email"
          invalid={emailNotValid}
          onChange={event => handleInputChange('email', event.target.value)}
        />
        <InputLabel
          label="Password"
          invalid={passwordNotValid}
          onChange={event => handleInputChange('password', event.target.value)}
        />
        {/* <p>
          <Label $invalid={emailNotValid}>Email</Label>
          <Input
            type="email"
            $invalid={emailNotValid}
            // style={{
            //   backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db',
            // }}
            onChange={event => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <Label $invalid={passwordNotValid}>Password</Label>
          <Input
            type="password"
            $invalid={passwordNotValid}
            onChange={event =>
              handleInputChange('password', event.target.value)
            }
          />
        </p> */}
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button className="button" onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
