import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {selectIsCartOpen} from '../../store/cart/cart.selector.js';
import { ReactComponent as CompanyLogo } from '../../assets/logo.svg';
import { ReactComponent as CenterImage } from '../../assets/center-image.svg';
import CartIcon from '../../components/cart-icon/cart-icon.components.jsx';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.components.jsx';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import {NavigationContainer, LogoContainer, NavBarLinksContainer, NavBarLink, CenterContainer } from './navigationbar.styles.jsx';
import {selectCurrentUser} from '../../store/user/user.selector.js';
import { emptyItemsFromCart } from '../../store/cart/cart.action.js';
import { selectCartItems } from '../../store/cart/cart.selector.js';

const NavigationBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  
  // Following three lines and logout function will empty cart items at Sign Out
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const emptyCart = () => dispatch(emptyItemsFromCart(cartItems));

  const logOut = async () => {
    await signOutUser();  /* Must await response from Firebase to sign out user */
    emptyCart();
  }

  return (
    <Fragment>
      <NavigationContainer>
        
          <LogoContainer to= '/'>
              <CompanyLogo className='logo' />
          </LogoContainer>
          <CenterContainer>
            <CenterImage />
          </CenterContainer>
          
        <NavBarLinksContainer>
            <NavBarLink to='/aboutus'>
                <b>About Us</b>
            </NavBarLink>
            <NavBarLink to='/shop'>
                <b>SHOP</b>
            </NavBarLink>
            {currentUser ? (<NavBarLink as='span' onClick={logOut}><b>SIGN OUT</b></NavBarLink>) : (<NavBarLink to='/authentication'><b>Sign In</b></NavBarLink>)}
            <CartIcon />
        </NavBarLinksContainer>
        {isCartOpen && <CartDropDown />}  
        {/* Short circuit operators: This evaluates to a truthy statement when both items are true and returns the last item listed.  */}
      </NavigationContainer>
      
      <Outlet />

    </Fragment>
  )
}

export default NavigationBar;