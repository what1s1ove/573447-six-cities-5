import * as React from 'react';

const withActiveItem = (Component) => {
  const WithActiveItem = (props) => {
    const [activeItem, setActiveItem] = React.useState(null);

    const onActiveItemChange = (item) => {
      setActiveItem(item);
    };

    return (
      <Component
        {...props}
        activeItem={activeItem}
        onActiveItemChange={onActiveItemChange}
      />
    );
  };

  return WithActiveItem;
};

export default withActiveItem;
