// @ts-nocheck
import { render } from 'solid-js/web';
import { createStore } from 'solid-js/store';
import { useForm } from './validation';

const Auth: Component = ({ setAuth, navigate }) => {
  const EMAILS = [];

  function fetchUserName(name) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(EMAILS.indexOf(name) > -1), 200);
    });
  }

  const ErrorMessage = (props) => <span class="error-message">{props.error}</span>;
  const { validate, formSubmit, errors } = useForm({
    errorClass: 'error-input',
  });
  const [fields, setFields] = createStore();
  const fn = (form) => {
    // form.submit()
    console.log(fields.email);
    console.log('Done');
    setAuth(true);
    navigate('/homepage');
  };

  return (
    <form use:formSubmit={fn}>
      <h1>Sign Up</h1>
      <div class="field-block">
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          onInput={(e) => setFields('email', e.target.value)}
          // use:validate={[userNameExists]}
        />
        {errors.email && <ErrorMessage error={errors.email} />}
      </div>
      <div class="field-block">
        <input
          type="password"
          name="password"
          placeholder="Password"
          required=""
          // minlength="8"
          onInput={(e) => setFields('password', e.target.value)}
          // use:validate
        />
        {errors.password && <ErrorMessage error={errors.password} />}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
export default Auth;
