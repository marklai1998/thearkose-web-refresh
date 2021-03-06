import React, { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'

import background from '../../assets/contactBackground.png'
import chest from '../../assets/chest.png'
import { Section } from '../../components/Section'
import { Title } from '../../components/Title'
import { Button } from '../../components/Button'
import styled from 'styled-components'

const config = {
  origin: 'left',
  duration: 1000,
  delay: 150,
  distance: '300px',
  opacity: 0,
  easing: 'ease',
  reset: true,
}
export const Contact = () => {
  const contactParagraphRef = useRef<HTMLElement>(null)
  const contactListRef = useRef<HTMLUListElement>(null)
  const chestRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!contactParagraphRef.current) return
    ScrollReveal().reveal(contactParagraphRef.current, config)
  }, [contactParagraphRef])

  useEffect(() => {
    if (!contactListRef.current) return
    ScrollReveal().reveal(contactListRef.current, config)
  }, [contactListRef])

  useEffect(() => {
    if (!chestRef.current) return
    ScrollReveal().reveal(chestRef.current, config)
  }, [chestRef])

  return (
    <div id='Contact'>
      <Wrapper backgroundImg={background}>
        <div className='row justify-content-around'>
          <div className='col-10 col-sm-12 col-md-8 col-lg-6 col-xl-5'>
            <Title>Contact Us</Title>
            <br />
            <b ref={contactParagraphRef}>
              If you interested in our services, feel free to contact us
            </b>
            <br />
            <br />
            <ContactList ref={contactListRef}>
              <li>
                <Button
                  href='https://discord.gg/qcTv6nQ'
                  icon='fa-discord'
                  text='The Arkose Network'
                />
              </li>
              <li>
                <Button
                  href='https://www.facebook.com/MrMatchesExMark/Q'
                  icon='fa-facebook'
                  text='火柴人Ex改'
                />
              </li>
            </ContactList>
          </div>
          <div className='col-8 col-md-4'>
            <Chest src={chest} alt='chest' ref={chestRef} />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

const ContactList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Chest = styled.img`
  margin-top: 70px;
  width: 100%;
  -webkit-filter: drop-shadow(30px 10px 0px rgba(194, 207, 91, 0.7));
  filter: drop-shadow(30px 0px 0px rgba(194, 207, 91, 0.7));
`

const Wrapper = styled(Section)`
  color: #fff;
`
