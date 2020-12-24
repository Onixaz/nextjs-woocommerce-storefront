import React from 'react'
import Link from 'next/link'
import {
  PrivacyList,
  PrivacyListItem,
  PrivacyContainer,
  PrivacyP,
  PrivacyH1,
  PrivacyInfo,
  PrivacyAddInfoWrapper,
} from './privacy.elements'
import { BlackH1, RedSpan } from '../Utilities/TextElements'
import { RedLine } from '../Utilities/Redline'

interface PrivacyProps {}

const Privacy: React.FC<PrivacyProps> = () => {
  return (
    <PrivacyContainer>
      <BlackH1>
        Privatumo<RedSpan> politika</RedSpan>
      </BlackH1>
      <RedLine />
      <PrivacyP>
        Aš – Roman Oleškevič, suvokiu ypatingą svarbą, tenkančią Jūsų asmens duomenų apsaugai, todėl
        rinksiu ir tvarkysiu tik tuos Jūsų duomenis, kurie reikalingi vykdant mano veiklą. Asmens
        duomenis aš tvarkysiu teisėtai, skaidriai ir sąžiningai, iš anksto nustatytais tikslais ir
        tik tokia apimtimi, kuri reikalinga tikslams pasiekti. Tvarkydamas asmens duomenis, sieksiu,
        kad jie būtų tikslūs, saugūs, konfidencialūs, tinkamai laikomi ir saugomi. Aš garantuoju,
        kad Jūsų asmens duomenys nebus parduodami kitiems asmenims be teisėto pagrindo ir Jūsų
        sutikimo. Tvarkydamas Jūsų asmens duomenis aš laikysiuos Bendrojo asmens duomenų apsaugos
        reglamento, Lietuvos Respublikos asmens duomenų teisinės apsaugos įstatymo, taip pat kituose
        teisės aktuose nustatytų asmens duomenų tvarkymo reikalavimų. „Asmeninė informacija“ – tai
        tokia informacija, pagal kurią galima identifikuoti asmenį: vardas/pavardė, pašto adresas,
        telefono numeris, el. pašto adresas. Jūsų asmeninius duomenis gaunu kai Jūs atsakote į
        specializuotą mano klausimyną ir sveikatos anketą per svetainę, el. paštu, facebook paskyrą
        – bendraujant „Messenger“ platforma arba „instagram“ platformoje.
      </PrivacyP>
      <PrivacyList>
        <PrivacyListItem>
          <PrivacyH1>Bendrosios nuostatos </PrivacyH1>
          <PrivacyP>
            Ši privatumo politika reglamentuoja www.masazuotojasromanas.lt ir
            www.masazuotojasromanas.lt kliento (toliau – Jūs, Jūsų) pagrindinius asmens duomenų
            rinkimo, tvarkymo ir saugojimo principus bei tvarką.
          </PrivacyP>
          <PrivacyP>
            Jūsų asmens duomenų rinkimą, tvarkymą ir saugojimą nustato ši privatumo politika,
            Lietuvos Respublikos Asmens duomenų teisinės apsaugos įstatymas ir kiti teisės aktai.
          </PrivacyP>
          <PrivacyP>
            Svetainėje nurodydami savo asmens duomenis, sutinkate, kad www.masazuotojasromanas.lt
            juos valdys ir tvarkys šioje privatumo politikoje bei teisės aktuose numatytais
            tikslais, priemonėmis ir tvarka.
          </PrivacyP>
        </PrivacyListItem>

        <PrivacyListItem>
          <PrivacyH1>Asmens duomenų rinkimas, tvarkymas, saugojimas</PrivacyH1>
          <PrivacyP>
            www.masazuotojasromanas.lt svetainėje asmens duomenys renkami apibrėžtais ir teisėtais
            tikslais, tvarkomi tiksliai ir sąžiningai.{' '}
          </PrivacyP>
          <PrivacyP>
            Asmens duomenys saugojami ne ilgiau, nei to reikalauja nustatyti duomenų tvarkymo
            tikslai.
          </PrivacyP>
          <PrivacyP>
            Asmens duomenis tvarko tik tie darbuotojai, kuriems suteikta tokia teisė ir visa
            informacija apie tvarkomus asmens duomenis yra konfidenciali.
          </PrivacyP>
          <PrivacyP>
            www.masazuotojasromanas.lt gerbia kiekvieno Jūsų teisę į privatumą. Jūsų asmens duomenys
            (vardas, pavardė, amžiaus grupė, adresas, telefono numeris, elektroninio pašto adresas
            ir kita kontaktinėje formoje nurodyta informacija) renkami ir tvarkomi tam, kad apdoroti
            Jūsų paslaugų užsakymus, spręsti problemas, susijusias su paslaugų pateikimu ar
            pristatymu ir vykdyti kitus sutartinius įsipareigojimus.
          </PrivacyP>
        </PrivacyListItem>
        <PrivacyListItem>
          <PrivacyH1>Asmens duomenų perdavimas trečiosioms šalims</PrivacyH1>
          <PrivacyP>
            www.masazuotojasromanas.lt turi teisę perduoti informaciją trečioms šalims, tik vykdant
            sutartinius įsipareigojimus ir tik Lietuvos Respublikos įstatymų nustatyta tvarka.
          </PrivacyP>
        </PrivacyListItem>
        <PrivacyListItem>
          <PrivacyH1>Duomenų atšaukimas</PrivacyH1>
          <PrivacyP>
            Jūs bet kada galite atšaukti teisę tvarkyti Jūsų asmens duomenis, parašius el.paštu :
            masazuotojasromanas@gmail.com, telefonu: +37068241111 arba pasinaudodami kontaktine{' '}
            <Link href="/susisiek">
              <a>forma</a>
            </Link>
            .
          </PrivacyP>
        </PrivacyListItem>
        <PrivacyListItem>
          <PrivacyH1>Slapukai (angl. cookies)</PrivacyH1>
          <PrivacyP>
            {' '}
            Informuojame, jog tam, kad galėtume pasiūlyti Jums visavertes paslaugas mūsų svetainėje,
            Jūsų kompiuteryje (įrenginyje) įrašome informaciją (slapukus, angl. “cookies”). Įrašytą
            informaciją naudosime atpažindami Jus, kaip ankstesnį svetainės naudotoją, rinkdami
            svetainės lankomumo statistiką. Jūs bet kada galite peržiūrėti, kokią informaciją
            (slapukus) įrašome, ir galite ištrinti dalį ar visus įrašytus slapukus. Taip pat turite
            teisę nesutikti, kad būtų įrašoma ir naudojama informacija (slapukai) Jūsų kompiuteryje
            (įrenginyje), tačiau tokiu atveju kai kurios svetainės funkcijos Jums gali būti
            neprieinamos. Preziumuojame, jog naudodamasis e-parduotuve sutinkame su tuo, kad Jūsų
            kompiuteryje (įrenginyje) būtų įrašoma informacija. Savo duotą sutikimą bet kada
            galėsite atšaukti, pakeisdami savo interneto naršyklės nustatymus, ar kreipdamiesi į mus
            bet kuriais svetainėje skelbiamais kontaktais.
          </PrivacyP>
          <PrivacyP>
            Mes naudojame Google Analytics naudojimuisi šia interneto svetaine analizuoti. Google
            Analytics generuoja statistinę ir kitą informaciją apie naudojimąsi svetaine panaudodama
            slapukus, kurie laikomi vartotojų kompiuteriuose. Generuojama su mūsų interneto svetaine
            susijusi informacija yra naudojama kurti ataskaitas apie naudojimąsi šia interneto
            svetaine. Šią informaciją laikys Google. Google privatumo politika prieinama čia:
            <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>
          </PrivacyP>
        </PrivacyListItem>
        <PrivacyListItem>
          <PrivacyH1>Taisyklių keitimas ir baigiamosios nuostatos</PrivacyH1>
          <PrivacyP>
            www.masazuotojasromanas.lt turi teisę iš dalies ar visiškai pakeisti Privatumo sąlygas
            apie tai pranešdami e-parduotuvėje. Tolimesnis naudojimasis mūsų tinklapio paslaugomis
            reiškia šių taisyklių laikymąsi. Visi iškilę nesutarimai ir ginčai sprendžiami derybų
            būdu. Nepavykus susitarti, ginčai sprendžiami pagal LR įstatymus. Jeigu turite klausimų
            ar pasiūlymų, rašykite mums masazuotojasromanas@gmail.com arba susisiekite telefonu:
            +37068241111, arba pasinaudodami kontaktine{' '}
            <Link href="/susisiek">
              <a>forma</a>
            </Link>
            .
          </PrivacyP>
        </PrivacyListItem>
      </PrivacyList>
      <RedLine />
      <PrivacyAddInfoWrapper>
        <PrivacyInfo>SOCIALINIS TINKLAS IR INTERAKTYVIOSIOS PRIEMONĖS</PrivacyInfo>
        <PrivacyP>
          Įrašuose, žinutėse, pokalbiuose, kai Jūs pats pateikiate šią informaciją svetainėje ar
          kitomis interaktyviomis priemonėmis, bet kokia Jūsų pateikiama informacija, įskaitant
          vardą, pavardę, el. pašto adresą, žinutes, kūno pokyčių nuotraukas (prieš ir po), gali
          būti viešai matoma. Mes neatsakome už jokią informaciją, kurią pateikiate per šias
          interaktyvias priemones, todėl rekomenduojame neatskleisti kitos, nei aukščiau minėta
          asmeninė (bendrinė) informacija. Jeigu naudojate šias priemones, Jūsų asmeninė informacija
          gali likti svetainėje ir Jums nustojus ja naudotis. Asmens kuriuo duomenys yra saugomi,
          jam paprašius jie privalo būti ištrinti.
        </PrivacyP>
        <PrivacyInfo>SVETAINĖS PRIEINAMUMAS VAIKAMS</PrivacyInfo>
        <PrivacyP>
          Asmenis, jaunesnius kaip aštuoniolika (18) metų, prašome atidžiai naudotis svetaine ir
          jokiu būdu nepateikti jokios asmeninės informacijos.
        </PrivacyP>
      </PrivacyAddInfoWrapper>
    </PrivacyContainer>
  )
}

{
  /*Šioje svetainėje www.pusynas.lt naudojami slapukai (angl. cookies): Sužinoti daugiau
   */
}
export default Privacy
