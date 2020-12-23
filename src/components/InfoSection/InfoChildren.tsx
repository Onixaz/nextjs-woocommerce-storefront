import {
  InfoPlainText,
  Heading,
  BtnWrap,
  ListItem,
  ServiceList,
  ConsultCard,
  ConsultCardHeader,
  ConsultCardText,
  ConsultCardWrapper,
  ServicesInfoWrapper,
} from './InfoElements'
import { RedSpan } from '../Utilities/TextElements'
import { FaBeer } from 'react-icons/fa'
import MainButton from '../MainButton'

interface AboutInfoProps {}

interface IndexInfoProps {}

export const IndexInfoChild: React.FC<IndexInfoProps> = () => {
  const headingScale = 2
  return (
    <>
      <Heading headingScale={headingScale}>
        Masažuotojas<RedSpan> Romanas</RedSpan>
      </Heading>
      <InfoPlainText>
        Sveiki 😊 Mano vardas Romanas ir esu visada pasirengęs padėti žmonėms, kurie kasdieniame
        gyvenime patiria daug streso, įtampos, jaučia fizinį skausmą ir nežino, kaip su tuo kovoti
        ar tiesiog nori atitrūkti nuo darbų ir skirti laiko sau.
      </InfoPlainText>
      <BtnWrap>
        <MainButton label="Plačiau" href="/apie" />
        <MainButton label="Susisiek" href="/susisiek" />
      </BtnWrap>
    </>
  )
}

export const AboutInfoChild: React.FC<AboutInfoProps> = () => {
  const headingScale = 1
  return (
    <>
      <Heading headingScale={headingScale}>Kodel verta rinktis mane ?</Heading>
      <InfoPlainText>
        Mano tikslas - tvarkyti raumenų disbalansus, fizinį bei stresinį jų nuovargį. Nemeluosiu,
        mano masažai - tai ne poilsio ar relax'o procesas. Mano masažai - tai procedūra, kurioje
        gali tekti šiek tiek pasikankinti vardan to, kad visa likusį laiką - skraidytumėte kaip ant
        sparnų. Neprireiks ir Red Bull. Man svarbus ir malonus mano darbas, todėl esu visada pilnai
        atsidavęs klientui. Todėl neabejotinai darbus atlieku kokybiškai. Ir visa tai vien todėl -
        kad padėčiau Jums. Neslėpsiu - geram masažuotojui pirmiau svarbu klientas, o tik poto –
        atlygis. Kodel? Nes Jūsų geras atsiliepimas savo draugams ir artimisiems, man yra didžiausia
        padėka, kuri generuoja klientus ir augimą savo srityje.
      </InfoPlainText>
    </>
  )
}

export const ServicesInfoChildOne = () => {
  const headingScale = 2
  return (
    <ServicesInfoWrapper>
      <Heading headingScale={headingScale}>Masažai</Heading>
      {/* <InfoPlainText>Atlieku šiuos kūno masažus:</InfoPlainText> */}
      <ServiceList>
        <ListItem>
          Giliųjų audinių/raumenų nugaros masažas (nugara, pečiai, kaklas): 30 min.
        </ListItem>
        <ListItem>Giliųjų audinių/raumenų viso kūno masažas: 60 min.</ListItem>
        <ListItem>
          Sportinis nugaros masažas (kaklas, pečiai, nugara, juosmuo, sėdmenys): 45-60 min.
        </ListItem>
        <ListItem>Viso kūno sportinis masažas: 60-90 min.</ListItem>
      </ServiceList>
      <InfoPlainText style={{ fontWeight: 'bolder' }}>
        Kiekvienu atveju prisitaikau prie kūno, parenku tinkama metodiką, bei jos atlikimo techniką.
      </InfoPlainText>
    </ServicesInfoWrapper>
  )
}

export const ServicesInfoChildTwo = () => {
  const headingScale = 2
  return (
    <ServicesInfoWrapper>
      <Heading headingScale={headingScale}>Konsultacijos</Heading>
      {/* <ConsultCardWrapper>
        <ConsultCard>
          <ConsultCardHeader>Masažo klausimais</ConsultCardHeader>
          <ConsultCardText>
            Atlieku kūno diagnostikas bei pridedu rekomendacijas kaip dar galima būtų sau padėti,
            norint pasiekti greitesnius ir geresnius rezultatus.
          </ConsultCardText>
        </ConsultCard>
        <ConsultCard>
          <ConsultCardHeader>Sveikatingumo klausimais</ConsultCardHeader>
          <ConsultCardText>
            Viskas kas liečia sveika gyvenseną, fizinį aktyvumą, ekstra papildai kūno/odos
            priežiūros būklei ir savijautai pagerinti.
          </ConsultCardText>
        </ConsultCard>
      </ConsultCardWrapper> */}

      <ServiceList>
        <ListItem>
          Atlieku kūno diagnostikas bei pridedu rekomendacijas kaip dar galima būtų sau padėti,
          norint pasiekti greitesnius ir geresnius rezultatus.
        </ListItem>
        <ListItem>
          Viskas kas liečia sveika gyvenseną, fizinį aktyvumą, ekstra papildai kūno/odos priežiūros
          būklei ir savijautai pagerinti.
        </ListItem>
        <ListItem>
          Individualūs mitybos planai, asmeninės treniruotės bei jų sudarymas, kūno linijų pokyčiai,
          bendra geresnė fizinė forma link ir jos asmeninė priežiūra.
        </ListItem>
      </ServiceList>
    </ServicesInfoWrapper>
  )
}

export const ServicesInfoChildThree = () => {
  const headingScale = 2
  return (
    <ServicesInfoWrapper>
      <Heading headingScale={headingScale}>Dovanų kuponai</Heading>
      <ServiceList>
        <ListItem>Atliekami/teikiami masažai pagal jūsų pageidavimus.</ListItem>
        <ListItem>Galiojimas 2 mėn. nuo įsigijimo/pirkimo dienos.</ListItem>
        <ListItem>Susisiekimas yra įrašytas dovanų kupone.</ListItem>
        <InfoPlainText style={{ fontWeight: 'bolder' }}>
          Atsiėmimas gyvai. Kaina individuali nuo 30 iki 70 Eur.
        </InfoPlainText>
      </ServiceList>
    </ServicesInfoWrapper>
  )
}
