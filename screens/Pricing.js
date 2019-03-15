import React, { Component } from 'react';
import {  SafeAreaView, ScrollView, WebView } from 'react-native';
import { PricingCard, Overlay } from 'react-native-elements';



export default class Pricing extends Component {
  constructor(props){
    super(props)
    this.state={
      isVisible: false
    }
  }
  

  render() {
    return (
        <ScrollView>
            <SafeAreaView>
                <PricingCard
                color="rgb(249, 15, 28)"
                title="Basic Maker"
                price="$40/Month"
                info={['Access to space during open hours', 'Early Discounts on classes and workshops', 'Join Maker community']}
                button={{ title: 'Become a Maker',  color: "rgb(249, 15, 28)" }}
                onButtonPress={() => this.setState({ isVisible: true })}
                />
                <PricingCard
                color="rgb(249, 15, 28)"
                title="Full Maker"
                price="$80/month"
                info={['24/7 key access to makerspace', 'Eligibility to submit issues before the board of directors', 'Eligibility to vote for officers and directors', 'Eligibility to vote on issues put before the membership']}
                button={{ title: 'Become a Maker', color: "rgb(249, 15, 28)" }}
                onButtonPress={() => this.setState({ isVisible: true })}
                />
                <Overlay
                isVisible={this.state.isVisible}
                onBackdropPress={() => this.setState({ isVisible: false })}
                >
                  <WebView
                      source={{ html:`<form action="your-server-side-code" method="POST">
                      <script
                        src="https://checkout.stripe.com/checkout.js" class="stripe-button"
                        data-key="pk_test_1raXLhTJ8kR7EPXRCDJxj9YA"
                        data-amount="8000"
                        data-name="RMM"
                        data-description="Widget"
                        data-zip-code="true"
                        data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
                        data-locale="auto">
                      </script>
                    </form>`
                      }}
                    />
                </Overlay>
                
            </SafeAreaView>
        </ScrollView>
    )
  }
}