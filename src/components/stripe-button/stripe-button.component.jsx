import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51UIVKORhIkx9OUIJLxE0XSXsQnYFL4xGbntOLe6hRej9FDhM0yLisK9NUYTFwFHsmcrtC9aGqxWDANpCy7HK8QaI00GKzIDOhp';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Taj Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/en/0b01785c59"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      submitButtonLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;