import React, { Component } from 'react'
import { WebView } from 'react-native'

export default class ChargeWebView extends Component {
  render() {
    return (
      <WebView
        source={{ html:`<form action="your-server-side-code" method="POST">
        <script
          src="https://checkout.stripe.com/checkout.js" class="stripe-button"
          data-key="pk_test_1raXLhTJ8kR7EPXRCDJxj9YA"
          data-amount="999"
          data-name="RMM"
          data-description="Widget"
          data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
          data-locale="auto">
        </script>
      </form>`
        }}
        style={{margin:20}}
      />
    )
  }
}
