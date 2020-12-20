import React from 'react'

interface PrivacyProps {}

const Privacy: React.FC<PrivacyProps> = () => {
  return (
    <div>
      <ol>
        <li>Bendrosios nuostatos</li>
        <li>Asmens duomenų rinkimas, tvarkymas, saugojimas</li>
        <li>Asmens duomenų perdavimas trečiosioms šalims</li>
        <li>Duomenų atšaukimas</li>
        <li>Slapukai (angl. cookies)</li>
        <li>Taisyklių keitimas ir baigiamosios nuostatos</li>
      </ol>
    </div>
  )
}

export default Privacy
