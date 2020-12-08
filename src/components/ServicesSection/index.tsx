import React from 'react'
import Link from 'next/link'
import { IconContext } from 'react-icons'

import {
  ServicesContainer,
  ServicesCard,
  ServicesP,
  ServicesWrapper,
  CardHeader,
  CustomFaCommentMedical,
  CustomFaGift,
  CustomFaHandHoldingHeart,
} from './servicesSection.elements'

import { WhiteH1, RedSpan } from '../Utilities/TextElements'

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  return (
    <ServicesContainer id="paslaugos-trumpai">
      <WhiteH1>
        Ką aš galiu Jums <RedSpan>pasiūlyti?</RedSpan>
      </WhiteH1>
      {/* <MainP>
        Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non
        mi integer non faucibus.
      </MainP> */}
      <IconContext.Provider value={{ size: '5em' }}>
        {/* <RedLine data-aos="zoom-in"/> */}
        <ServicesWrapper>
          <Link href="/paslaugos#masazai" passHref>
            <ServicesCard data-aos="fade-up">
              <CustomFaHandHoldingHeart />

              <CardHeader>Masažai</CardHeader>
              <ServicesP>
                Masažuoju pagal jūsų pageidavimus ir iškylusias problemas. Prisitaikau prie kūno,
                parenku tinkama metodiką, bei jos atlikimo techniką.
              </ServicesP>
            </ServicesCard>
          </Link>
          <Link href="/paslaugos#konsultacijos" scroll={false} passHref>
            <ServicesCard data-aos="fade-up">
              <CustomFaCommentMedical />
              <CardHeader>Kosultacijos</CardHeader>
              <ServicesP>Masazai, sportas, mityba, sveikatingumas, gyvensena, laikysena.</ServicesP>
            </ServicesCard>
          </Link>

          <Link href="/paslaugos#dovanu-kuponai">
            <ServicesCard data-aos="fade-up">
              <CustomFaGift />
              <CardHeader>Dovanų kuponai</CardHeader>
              <ServicesP>
                Padovanok savo artimam žmogui tai ko trūksta labiausiai, poilsį ir sveikatą 🥰❤️
              </ServicesP>
            </ServicesCard>
          </Link>
        </ServicesWrapper>
        {/* <RedLine data-aos="zoom-in"/> */}
        {/* <RedLine /> */}
      </IconContext.Provider>
      {/* <BtnWrapper>
        <MainButton href="about" label="Plačiau" />
      </BtnWrapper> */}
    </ServicesContainer>
  )
}

export default Services
