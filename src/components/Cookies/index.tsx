import React from 'react'
import CookieConsent from 'react-cookie-consent'
import Link from 'next/link'

interface CookiesConsentProps {}

const CookiesConsent: React.FC<CookiesConsentProps> = () => {
  return (
    <>
      <CookieConsent
        buttonText="Supratau"
        style={{
          background: 'rgba(0,0,0,0.7)',
          padding: '0 15px',
          display: 'flex',
          justifyContent: 'center',
        }}
        buttonStyle={{
          background: '#ff3b6a',
          borderRadius: '30px',
          color: '#000',
          fontSize: '15px',
          fontWeight: '600',
          padding: '10px',
        }}
      >
        Šioje svetainėje naudojami slapukai (angl. cookies):{' '}
        <Link href="/privatumo-politika">
          <a style={{ color: '#fff' }}>Sužinoti daugiau</a>
        </Link>
      </CookieConsent>
    </>
  )
}

export default CookiesConsent
