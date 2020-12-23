import React from 'react'
import { PrivacyList, PrivacyListItem, PrivacyContainer } from './privacy.elements'

interface PrivacyProps {}

const Privacy: React.FC<PrivacyProps> = () => {
  return (
    <PrivacyContainer>
      <PrivacyList>
        <PrivacyListItem>
          <h1>Bendrosios nuostatos </h1>
          <p>
            Ši privatumo politika reglamentuoja www.masazuotojasromanas.lt ir
            www.masazuotojasromanas.lt kliento (toliau – Jūs, Jūsų) pagrindinius asmens duomenų
            rinkimo, tvarkymo ir saugojimo principus bei tvarką.
          </p>
          <p>
            Jūsų asmens duomenų rinkimą, tvarkymą ir saugojimą nustato ši privatumo politika,
            Lietuvos Respublikos Asmens duomenų teisinės apsaugos įstatymas ir kiti teisės aktai.
          </p>
          <p>
            Svetainėje nurodydami savo asmens duomenis, sutinkate, kad www.masazuotojasromanas.lt
            juos valdys ir tvarkys šioje privatumo politikoje bei teisės aktuose numatytais
            tikslais, priemonėmis ir tvarka.
          </p>
        </PrivacyListItem>

        <PrivacyListItem>Asmens duomenų rinkimas, tvarkymas, saugojimas</PrivacyListItem>
        <PrivacyListItem>Asmens duomenų perdavimas trečiosioms šalims</PrivacyListItem>
        <PrivacyListItem>Duomenų atšaukimas</PrivacyListItem>
        <PrivacyListItem>Slapukai (angl. cookies)</PrivacyListItem>
        <PrivacyListItem>Taisyklių keitimas ir baigiamosios nuostatos</PrivacyListItem>
      </PrivacyList>
    </PrivacyContainer>
  )
}

export default Privacy
