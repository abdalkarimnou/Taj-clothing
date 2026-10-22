import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51UIVKORhIkx9OUIJLxE0XSXsQnYFL4xGbntOLe6hRej9FDhM0yLisK9NUYTFwFHsmcrtC9aGqxWDANpCy7HK8QaI00GKzIDOhp';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  // Use the deployed app's public PNG so Stripe can load the logo directly.
  const checkoutLogo = `${window.location.origin}/taj-clothing-checkout-logo.png`;

  return (
    <StripeCheckout
      label="Pay Now"
      name="Taj Clothing"
      billingAddress
      shippingAddress
      image={checkoutLogo}
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
