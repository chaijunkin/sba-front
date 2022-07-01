import React, { useContext, useEffect } from 'react';
import { LoginContext } from '../../contexts/LoginContext';


const RedeemptionHistoryItem = ({ redeemptionHistory }) => {

    // const {
    //     id,
    //     quantity,
    //     catalogue,
    //     orderDate
    // } = redeemptionHistory

    /**
     *  Fetch the login and history details from Context
     */
    const { isLoggedIn } = useContext(LoginContext);

    return (
        
        <div className="history-item">

            <div className="card-item">

                <div className="row">
                    <div className="col-md-3">
                        <br /><br />
                        <div className="item-worth">
                            <h5>
                                <i className="fas fa-rupee-sign" style={{ color: "green" }}></i>&nbsp;
                                {/* {redeemptionHistory.id} */}
                            </h5>

                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-8">
                        {/* <h5 style={{color:"#0e912c"}}> {redeemptionHistory.id}</h5> */}
                        <hr></hr>
                        <h6>
                            {/* Redeemption Item : {redeemptionHistory.id} */}
                        </h6><br />

                    </div>

                </div>

            </div>
            <br></br><br></br>

        </div>
    );
}

export default RedeemptionHistoryItem;