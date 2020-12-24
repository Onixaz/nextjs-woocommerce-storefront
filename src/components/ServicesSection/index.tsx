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

      {/* <RedLine data-aos="zoom-in"/> */}
      <ServicesWrapper>
        <Link href="/paslaugos#masazai" passHref>
          <ServicesCard data-aos="fade-up">
            <CustomFaHandHoldingHeart />

            <CardHeader>Masažai</CardHeader>
            <ServicesP>Masažuoju pagal jūsų pageidavimus ir iškylusias problemas.</ServicesP>
          </ServicesCard>
        </Link>
        <Link href="/paslaugos#konsultacijos" scroll={false} passHref>
          <ServicesCard data-aos="fade-up">
            <CustomFaCommentMedical />
            <CardHeader>Konsultacijos</CardHeader>
            <ServicesP>Masazai, sportas, mityba, sveikatingumas, gyvensena, laikysena.</ServicesP>
          </ServicesCard>
        </Link>

        <Link href="/paslaugos#dovanu-kuponai">
          <ServicesCard data-aos="fade-up">
            <CustomFaGift />
            <CardHeader>Dovanų kuponai</CardHeader>
            <ServicesP>
              Padovanok savo artimam žmogui tai ko trūksta labiausiai, poilsį ir sveikatą.
            </ServicesP>
          </ServicesCard>
        </Link>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
