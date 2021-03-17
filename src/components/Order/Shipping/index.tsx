import React from 'react'
import * as ShippingSummaryStyles from './styled'

const ShippingSummary = () => {
  return (
    <>
      <ShippingSummaryStyles.Description>Shipping</ShippingSummaryStyles.Description>
      <ShippingSummaryStyles.Value>${'Hello'}</ShippingSummaryStyles.Value>
    </>
  )
}

export default ShippingSummary
