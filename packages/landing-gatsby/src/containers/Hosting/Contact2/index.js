import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Input from 'common/src/components/Input';
import Container from 'common/src/components/UI/Container';

import ContactFromWrapper2 from './contact2.style';
import "./contact2.css";
import ContactMap from '../ContactMap';

const ContactSection2 = ({
  sectionWrapper,
  row,
  contactForm,
  secTitleWrapper,
  secHeading,
  secText,
  button,
  note,
}) => {
  return (
    <Box {...sectionWrapper} className="contactForm2_container">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="CONTACT US" className="contact_header" />
        </Box>
        {/* <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1GX4_Dd7WeEzYZwSVuUOW0LPJVm8wA7eL" width="100%" height="400" id="mymap1"></iframe> */}
        <Box {...row} className="contactform_flex">
          <Box className="contactmap_col">
            <ContactMap />
          </Box>

          <Box {...contactForm} className="contact_col2">
            {/* <Heading
              content="Fill in the short form and we will get back to you at the earliest"
            /> */}
            <h3>Fill in the short form and we will get back to you at the earliest</h3>
            <form id="contactForm2" action="#" method="POST">
              <div className="fieldsWrapper_flex">
                <Input
                  inputType="text"
                  placeholder="Your name"
                  iconPosition="left"
                  isMaterial={false}
                  className="name_input"
                  aria-label="name"
                  required
                />
                <Input
                  inputType="email"
                  placeholder="Email address"
                  iconPosition="right"
                  isMaterial={false}
                  className="email_input"
                  aria-label="email"
                  required
                />
              </div>
              <textarea
                placeholder="Your message"
                rows="4"
                style={{ width: '100%' }}
                required
              />
              <Button {...button} title="SEND ENQUIRY" />
            </form>
            <br />
            {/* <Text
              {...note}
              content="Note: Give us a call, drop us an email, or fill out the form below to get in touch. We endeavour to answer all enquiries within 24 hours on business days."
            /> */}
            <br />
            <br />
            <Box>
              <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1GX4_Dd7WeEzYZwSVuUOW0LPJVm8wA7eL" width="100%" height="250" id="mymap1"></iframe>
            </Box>
            
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

ContactSection2.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  contactForm: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  button: PropTypes.object,
  note: PropTypes.object,
};

ContactSection2.defaultProps = {
  sectionWrapper: {
    id: 'contact_section',
    as: 'section',
    pt: ['0px', '10px', '20px', '80px'],
    pb: ['0px', '0px', '0px', '0px', '80px'],
    bg: '#f9fbfd',
  },
  secTitleWrapper: {
    mb: ['45px', '50px', '60px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: `${2}`,
    letterSpacing: '0.15em',
    fontWeight: `${6}`,
    color: 'primary',
    mb: `${3}`,
  },
  secHeading: {
    textAlign: 'center',
    fontSize: [`${6}`, `${8}`],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: `${0}`,
  },
  row: {
    flexBox: true,
    justifyContent: 'center',
  },
  contactForm: {
    width: [1, 1, 1, 1 / 2],
  },
  button: {
    type: 'button',
    fontSize: `${2}`,
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: `${4}`,
  },
  note: {
    fontSize: ['13px', '14px', '15px', '15px', '15px'],
    color: '#5d646d',
    lineHeight: '1.87',
    textAlign: 'center',
  },
};

export default ContactSection2;
