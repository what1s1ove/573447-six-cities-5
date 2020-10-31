import * as React from 'react';
import {extendObject} from '~/helpers/object';

const withFormEditing = (Component) => {
  const WithFormEditing = (props) => {
    const [formState, setFormState] = React.useState({});

    const handleFormState = (key, value) => {
      setFormState(
          extendObject(formState, {
            [key]: value,
          })
      );
    };

    const handleFormReset = () => setFormState({});

    return (
      <Component
        {...props}
        formState={formState}
        onFormStateChange={handleFormState}
        onFormReset={handleFormReset}
      />
    );
  };

  return WithFormEditing;
};

export default withFormEditing;
