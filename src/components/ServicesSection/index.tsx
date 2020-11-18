import React from 'react'
import MainButton from '../MainButton'
import { FaHandHoldingHeart, FaGift, FaCommentMedical } from 'react-icons/fa'
import { IconContext } from 'react-icons'

import {
  ServicesContainer,
  ServicesH1,
  ServicesCard,
  ServicesH2,
  ServicesP,
  ServicesWrapper,
  BtnWrapper,
  ServicesSubtitle,
} from './ServicesElements'

import { BlackH1, MainP, RedSpan } from '../Utilities/TextElements'

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  return (
    <ServicesContainer id="services">
      <BlackH1>
        Ką aš galiu Jums <RedSpan>pasiūlyti</RedSpan> ?
      </BlackH1>
      <MainP>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor impedit est cumque!
        Numquam excepturi sapiente voluptatum nobis ad quam totam itaque optio enim mollitia quaerat
        commodi, voluptates deleniti pariatur?
      </MainP>
      <IconContext.Provider value={{ size: '3em', style: { margin: '20px' } }}>
        <ServicesWrapper>
          <ServicesCard>
            <FaHandHoldingHeart />

            <ServicesH2>Masažai</ServicesH2>
            <ServicesP>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis optio commodi
              fugit adipisci? Officia voluptatem reiciendis eius sint nobis impedit ducimus debitis
              quod. Accusamus facere ex sint? Dolor, animi ipsum!
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <FaCommentMedical />

            <ServicesH2>Konsultacijos</ServicesH2>
            <ServicesP>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis optio commodi
              fugit adipisci? Officia voluptatem reiciendis eius sint nobis impedit ducimus debitis
              quod. Accusamus facere ex sint? Dolor, animi ipsum!
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <FaGift />

            <ServicesH2>Dovanų kuponai</ServicesH2>
            <ServicesP>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis optio commodi
              fugit adipisci? Officia voluptatem reiciendis eius sint nobis impedit ducimus debitis
              quod. Accusamus facere ex sint? Dolor, animi ipsum!
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </IconContext.Provider>
      <BtnWrapper>
        <MainButton href="about" label="Plačiau" />
      </BtnWrapper>
    </ServicesContainer>
  )
}

export default Services
