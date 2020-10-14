import * as React from 'react';

const withActiveOffer = (Component) => {
  const WithActiveOffer = (props) => {
    const [activeOffer, setActiveOffer] = React.useState(null);

    const onActiveOfferChange = (item) => {
      setActiveOffer(item);
    };

    return (
      <Component
        {...props}
        activeOffer={activeOffer}
        onActiveOfferChange={onActiveOfferChange}
      />
    );
  };

  return WithActiveOffer;
};

export default withActiveOffer;
