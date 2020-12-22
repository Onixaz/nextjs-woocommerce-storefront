import React, { useRef, useEffect, useCallback } from 'react'
import {
  ModalContainer,
  ModalBackground,
  ModalImg,
  ModalContent,
  CloseModalButton,
  ModalText,
} from './modal.elements'

interface ModalProps {
  prev: boolean
  showModal: boolean
  setShowModal: (prev: any) => void
  imgSrc: string
  imgDesc: string
  showDescription: boolean
}

const PhotoModal: React.FC<ModalProps> = ({
  showModal,
  setShowModal,
  imgSrc,
  imgDesc,
  showDescription,
}) => {
  const modalRef = useRef()
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }
  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false)
      }
    },
    [setShowModal, showModal],
  )

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  useEffect(() => {
    if (showModal) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = ''
    }
  }, [setShowModal, showModal])

  return (
    <>
      {showModal ? (
        <ModalBackground ref={modalRef} onClick={closeModal}>
          <ModalContainer showDescription={showDescription}>
            <ModalImg src={imgSrc} alt={imgSrc} />
            <ModalContent showDescription={showDescription}>
              <ModalText>{imgDesc}</ModalText>
            </ModalContent>
            <CloseModalButton aria-label="Close Modal" onClick={() => setShowModal(false)} />
          </ModalContainer>
        </ModalBackground>
      ) : null}
    </>
  )
}

export default PhotoModal
