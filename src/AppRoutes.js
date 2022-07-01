import React from 'react';
import {Route} from 'react-router-dom';
import Homepage from './modules/Homepage';
import LoginPage from './modules/login/LoginPage';
import CartPage from './modules/cart/CartPage';
import RewardCataloguePage from './modules/rewards/RewardCataloguePage';
import ConfirmOrder from './modules/order-confirm/ConfirmOrderPage';
import RedeemptionHistoryPage from './modules/redeemption-history/RedeemptionHistoryPage';


const AppRoute = () => {
    return ( 
        <div>
            <Route path="/" exact component={Homepage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/rewards" component={RewardCataloguePage} />
            {/* <Route path="/redeemption-history" component={RedeemptionHistoryPage} /> */}
            <Route path="/order-confirm" component={ConfirmOrder} />
        </div>
     );
}
 
export default AppRoute;