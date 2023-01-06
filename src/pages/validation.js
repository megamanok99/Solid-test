import { createStore } from 'solid-js/store';

export function useForm({ errorClass }) {
  const [errors, setErrors] = createStore({});

  const formSubmit = (ref, accessor) => {
    const callback = accessor() || (() => {});
    ref.setAttribute('novalidate', '');
    ref.onsubmit = async (e) => {
      e.preventDefault();
      let errored = false;

      // for (const k in fields) {
      //   const field = fields[k];
      //   await checkValid(field, setErrors, errorClass)();
      //   if (!errored && field.element.validationMessage) {
      //     field.element.focus();
      //     errored = true;
      //   }
      // }
      !errored && callback(ref);
    };
  };

  return { formSubmit, errors };
}
