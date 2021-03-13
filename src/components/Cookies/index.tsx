import React from 'react'
import CookieConsent from 'react-cookie-consent'

interface CookiesConsentProps {}

const CookiesConsent: React.FC<CookiesConsentProps> = () => {
  return (
    <>
      <CookieConsent
        buttonText="Yes!"
        style={{
          background: 'rgba(0,0,0,0.7)',
          padding: '0px',
          display: 'flex',
          justifyContent: 'center',
        }}
        buttonStyle={{
          textAlign: 'center',
          background: '#b5e896',
          borderRadius: '30px',
          color: '#000',
          fontSize: '18px',
          fontWeight: '600',
          padding: '10px 30px',
        }}
      >
        Want cookies?
      </CookieConsent>
    </>
  )
}

export default CookiesConsent
