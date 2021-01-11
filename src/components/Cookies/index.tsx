import React from 'react'
import CookieConsent from 'react-cookie-consent'
import Link from 'next/link'

interface CookiesConsentProps {}

const CookiesConsent: React.FC<CookiesConsentProps> = () => {
  return (
    <>
      <CookieConsent
        buttonText="Got it"
        debug={true}
        style={{
          background: 'rgba(0,0,0,0.7)',
          padding: '0 15px',
          display: 'flex',
          justifyContent: 'center',
        }}
        buttonStyle={{
          background: '#b5e896',
          borderRadius: '30px',
          color: '#000',
          fontSize: '15px',
          fontWeight: '600',
          padding: '10px',
        }}
      >
        We se cookies:{' '}
        <Link href="/">
          <a style={{ color: '#fff' }}>Learn More</a>
        </Link>
      </CookieConsent>
    </>
  )
}

export default CookiesConsent
