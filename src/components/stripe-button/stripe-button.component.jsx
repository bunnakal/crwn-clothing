import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

  const priceForStripe =  price * 100;

  const publicshableKey = 'pk_test_51HLj3ABo3dlFIvGE0NslHQeYYjMHch7T8YesurqUgYO2GAm5A7HzglfwngQvyZBGT0btQ8ll9lLvhjJJsyynEFSs00mW1h0RiM';
   
  const onToken = token => {
    alert('Payment Successfull');
  }

  return(
    <StripeCheckout 
      label = 'Pay Now'
      name = 'CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image = 'https://svgshare.com/i/CUz.svg'
      description = {`Your total is $${price}`}
      amount = {priceForStripe}
      panelLabel = 'Pay Now'
      token = {onToken}
      stripeKey = {publicshableKey}
    />
  )

}

export default StripeCheckoutButton;