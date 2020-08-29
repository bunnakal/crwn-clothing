import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import CartItem from '../../components/cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.style.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key = {cartItem.id} item = {cartItem} />
          ))
          ) : (
          <span className ="empty-message">Your cart is empty</span>
          )
      }
    </div>
    <CustomButton onClick = {
      ()=> {history.push('/checkout');
      dispatch(toggleCartHidden());
      }}>GO TO CHECKOUT</CustomButton>
  </div>
);

//// this would make re-render event nothing change in state
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems
// });

/// this would not re-rendered by using reselect
// const mapStateToProps = state => ({
//   cartItems: selectCartItems(state)
// });

// this use createStructoredSelector
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));