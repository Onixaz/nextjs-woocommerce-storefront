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
} from './ServicesElements'

import { BlackH1, MainP, RedSpan } from '../Utilities/TextElements'
import { DivBreaker } from '../../styles/utility'
import { RedLine } from '../InfoSection/InfoElements'

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  return (
    <ServicesContainer id="services">
      <BlackH1>
        Ką aš galiu Jums <RedSpan>pasiūlyti?</RedSpan>
      </BlackH1>
      <MainP>
        Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non
        mi integer non faucibus.
      </MainP>
      <IconContext.Provider value={{ size: '6em', color: '#ff2458' }}>
        <ServicesWrapper>
          <ServicesCard>
            <FaHandHoldingHeart />

            <CardHeader>Masažai</CardHeader>
            <ServicesP>
              Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor
              sem non mi integer non faucibus.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
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
          <ServicesCard>
            <FaGift />
            <CardHeader>Dovanų kuponai</CardHeader>
            <ServicesP>
              Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor
              sem non mi integer non faucibus.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
        <RedLine />
      </IconContext.Provider>
      {/* <BtnWrapper>
        <MainButton href="about" label="Plačiau" />
      </BtnWrapper> */}
    </ServicesContainer>
  )
}

export default Services
