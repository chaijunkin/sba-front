import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { API_URL } from '../../Constants';
import RedeemptionHistoryItem from './RedeemptionHistoryItem';


function RedeemptionHistoryPage() {

    const [redeemptionHistory, setredeemptionHistory] = useState([]);
    const [redeemptionHistoryLoaded, setredeemptionHistoryLoaded] = useState(false);


    const fetchredeemptionHistory = async () => {

        setredeemptionHistoryLoaded(false);
        await axios.get(API_URL + 'history/')
            .then(response => {
                console.log(response);
                setredeemptionHistory(response.data.body);
                setredeemptionHistoryLoaded(true);
            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response);
                    setredeemptionHistoryLoaded(true);

                } else if (error.request) {
                    console.log(error.request);
                    setredeemptionHistoryLoaded(true);

                }
            })
    }

    useEffect(() => {
        fetchredeemptionHistory()
    }, []);


    return (
        <div className="reward-history">
            <h3><i className="fas fa-gift" style={{color:'green'}}></i>&nbsp;Welcome to Rewards History </h3>

            <hr></hr>
            <div className="reward-history">

                {
                    redeemptionHistoryLoaded ?
                        (
                            <div className="row" >
                                {redeemptionHistory.map(h => (

                                    <div className="col-md-4" key={h.id}>
                                        <RedeemptionHistoryItem history={h} />
                                        
                                        <br></br>
                                    </div>


                                ))
                                }
                            </div>
                        ) :
                        (
                            <div className="loading-list">
                                <h5>Loading history items... </h5>
                            </div>
                        )
                }


            </div>

        </div>
    );
}

export default RedeemptionHistoryPage;