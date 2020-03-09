import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Image from 'common/src/components/Image';
import Input from 'common/src/components/Input';
import Container from 'common/src/components/UI/Container';

import contactMap from './contactMap.svg';

import { Link } from 'gatsby';

import './contactform.css';

const ContactFormSection = ({
  sectionWrapper,
  row,
  col,
  title,
  subtitle,
  description,
  description2,
  button,
  textArea,
  imageArea,
  imageAreaRow,
  imageWrapper,
  imageWrapperOne,
  imageWrapperTwo,
}) => {
  return (
    <Box {...sectionWrapper} id="Contact_Form">
      <Container>
        {/* <Heading
          {...title}
          content="Contact Us"
          className="text_center"
        /> */}
        <div className="empty_space20" />
        <Box
          {...row}
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <Box {...col} {...textArea}>
            <Fade bottom cascade>
              <Box id="contactLocations">
                <Image src={contactMap} alt="Contact map" />
                <div className="empty_space25" />
                <Text {...description2} content="Cnetric Global Inc." />
                <Text
                  {...description2}
                  content="300 Spectrum Center Dr., Suite 400, Irvine, CA 92618"
                />
                <Text {...description2} content="P: +1 (415) 806-2739‬" />
                <Text {...description2} content="E: info@cnetric.com" />
                <Text
                  {...description}
                  content="(Dennis Menendez, SVP - Client Success, Americas)"
                />
                <Text {...description2} content="(We are also located at:)" />
                <div className="empty_space10" />
              </Box>
              <Box className="contact_location_list sm">
                <ul>
                  <li>Irvine, CA, USA</li>
                  <li>Austin, TX, USA</li>
                  <li>Toronto, ON, Canada</li>
                  <li>Buenos Aires, Argentina</li>
                  <li>Bogota, Colombia</li>
                  <li>Sydney, Australia</li>
                  <li>Bangalore, India</li>
                  <li>London, UK</li>
                  <li>Dubai, UAE</li>
                  <li>Milan, Italy</li>
                  <li>San Palo, Brazil</li>
                </ul>
                <div className="empty_space30" />
              </Box>
            </Fade>
          </Box>
          <Box {...col} {...textArea}>
            <Text
              {...subtitle}
              content="Fill in the short form and we will get back to you at the earliest"
            />
            <Fade bottom cascade>
              <form id="contactForm2" name="contact" method="POST" action="#">
                <Box className="form_fields">
                  <Input
                    inputType="text"
                    placeholder="Your name"
                    iconPosition="left"
                    isMaterial={false}
                    aria-label="name"
                    name="name"
                    required
                  />
                  <Input
                    inputType="email"
                    placeholder="Email address"
                    iconPosition="right"
                    isMaterial={false}
                    aria-label="email"
                    name="email"
                    required
                  />
                  <Input
                    inputType="tel"
                    placeholder="Phone number"
                    iconPosition="right"
                    isMaterial={false}
                    aria-label="phone"
                    name="phone"
                  />
                  <Input
                    inputType="text"
                    placeholder="Company name"
                    iconPosition="right"
                    isMaterial={false}
                    aria-label="phone"
                    name="phone"
                  />
                  <Input
                    inputType="text"
                    placeholder="Country or Region"
                    iconPosition="right"
                    isMaterial={false}
                    aria-label="phone"
                    className="country_input"
                    name="country"
                  />
                </Box>
                <Input
                  inputType="textarea"
                  placeholder="Your message"
                  iconPosition="right"
                  isMaterial={false}
                  aria-label="phone"
                  name="message"
                  style={{ width: '100%', height: '30px' }}
                  className="messagebox"
                />
                <div className="empty_space20" />
                <Button {...button} title="SUBMIT" type="submit" />
                <div className="empty_space20" />
              </form>
            </Fade>
          </Box>
          <Box className="contact_location_list">
            <ul>
              <li>Irvine, CA, USA</li>
              <li>Austin, TX, USA</li>
              <li>Toronto, ON, Canada</li>
              <li>Buenos Aires, Argentina</li>
              <li>Bogota, Colombia</li>
              <li>Sydney, Australia</li>
              <li>Bangalore, India</li>
              <li>London, UK</li>
              <li>Dubai, UAE</li>
              <li>Milan, Italy</li>
              <li>San Palo, Brazil</li>
            </ul>
          </Box>
        </Box>
        <div className="empty_space30" />
      </Container>
    </Box>
  );
};

ContactFormSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  subtitle: PropTypes.object,
  description: PropTypes.object,
  description2: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
  imageAreaRow: PropTypes.object,
  imageWrapper: PropTypes.object,
  imageWrapperOne: PropTypes.object,
  imageWrapperTwo: PropTypes.object,
};

ContactFormSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['25px', '25px', '25px', '30px', '30px'],
    // pb: ['60px', '80px', '40px', '80px', '80px'],
    id: 'info_section',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '100%', '49%', '49%'],
  },
  imageArea: {
    width: ['100%', '100%', '50%'],
    flexBox: true,
    flexDirection: 'row-reverse',
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  imageWrapperOne: {
    ml: '-200px',
  },
  imageWrapperTwo: {
    alignSelf: 'flex-end',
    mb: '-60px',
  },
  title: {
    fontSize: ['30px', '38px', '38px', '48px', '48px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px',
  },
  subtitle: {
    fontSize: ['20px', '22px', '22px', '22px', '22px'],
    fontFamily: 'RobotoSlab-SemiBold',
    mb: '25px',
    color: '#5E7086',
  },
  description: {
    fontSize: ['16px', '18px', '18px', '18px', '18px'],
    color: '#343d48cc',
    lineHeight: '1.5',
    mb: '15px',
  },
  description2: {
    fontSize: ['16px', '18px', '18px', '18px', '18px'],
    color: '#343d48cc',
    lineHeight: '1.5',
    mb: '5px',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: `{5}`,
  },
};

export default ContactFormSection;
