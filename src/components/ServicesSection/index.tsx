import React from 'react'
import MainButton from '../MainButton'
import { FaHandHoldingHeart, FaGift, FaCommentMedical } from 'react-icons/fa'
import { IconContext } from 'react-icons'

import {
  ServicesContainer,
  ServicesCard,
  ServicesP,
  ServicesWrapper,
  BtnWrapper,
  CardHeader,
} from './servicesSection.elements'

import { BlackH1, WhiteH1, MainP, RedSpan } from '../Utilities/TextElements'
import { RedLine } from '../Utilities/Redline'

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  return (
    <ServicesContainer id="services">
      <WhiteH1>
        Ką aš galiu Jums <RedSpan>pasiūlyti?</RedSpan>
      </WhiteH1>
      {/* <MainP>
        Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non
        mi integer non faucibus.
      </MainP> */}
      <IconContext.Provider value={{ size: '5em', color: '#ff2458' }}>
        {/* <RedLine data-aos="zoom-in"/> */}
        <ServicesWrapper>
          <ServicesCard data-aos="fade-up">
            <FaHandHoldingHeart />

            <CardHeader>Masažai</CardHeader>
            <ServicesP>
              Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor
              sem non mi integer non faucibus.
            </ServicesP>
          </ServicesCard>
          <ServicesCard data-aos="fade-up">
            <FaCommentMedical />
            <CardHeader>Kosultacijos</CardHeader>
            <ServicesP>
              Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor
              sem non mi integer non faucibus.
            </ServicesP>
          </ServicesCard>
          {/* <ServicesCard>
            <FaCommentMedical />
            <CardHeader>Gal dar kažkas</CardHeader>
            <ServicesP>
              Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor
              sem non mi integer non faucibus.
            </ServicesP>
          </ServicesCard> */}
          <ServicesCard data-aos="fade-up">
            <FaGift />
            <CardHeader>Dovanų kuponai</CardHeader>
            <ServicesP>
              Padovanok savo artimam žmogui tai ko trūksta labiausiai, poilsį ir sveikatą 🥰❤️
            </ServicesP>
          </ServicesCard>
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
