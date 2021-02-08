import * as React from 'react';

const withActiveItem = (Component) => {
  const WithActiveItem = (props) => {
    const [activeItem, setActiveItem] = React.useState(null);

    return (
      <Component
        {...props}
        activeItem={activeItem}
        onActiveItemChange={setActiveItem}
      />
    );
  };

  return WithActiveItem;
};

export default withActiveItem;
