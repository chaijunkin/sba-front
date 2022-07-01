import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../Constants';

class RedeemptionHistory extends Component {

    state = {
        redeemptionList: [],
        isListLoaded: false
    }

    constructor(props) {
        super(props);

        this.state = {
            redeemptionList: [],
            isListLoaded: false
        };
    }

    async fetchRedeemptionHistoryList() {
        await axios.get(API_URL + 'history/')
            .then(response => {

                this.setState(
                    {

                        redeemptionList: response.data.body,
                        isListLoaded: true
                    }, () => {
                       
                    }
                )



            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response);

                } else if (error.request) {
                    console.log(error.request);

                } else {
                    console.log(error);

                }
            })
    }

    componentDidMount() {

        this.fetchRedeemptionHistoryList()
    }


    render() {


        let { isListLoaded, redeemptionList } = this.state;
        if (!isListLoaded) {

            return (
                <div>Loading the redeemption. Please Wait...</div>
            )
        } else {
            return (
                <div className="redeemption-catalogue">

                    <h4>Your Redeemption History</h4>
                        Total items found :- {redeemptionList.length}
                    <hr></hr>

                  <div className="">
                      {
                          redeemptionList.map( c=> (
                              <div key={c.id}>{c.item} </div>
                              
                          ))
                      }
                  </div>

                </div>
            );
        }



    }
}

export default RedeemptionHistory;