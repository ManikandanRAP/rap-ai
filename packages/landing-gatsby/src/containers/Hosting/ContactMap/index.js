import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Container from 'common/src/components/UI/Container';

// import ReportsPage from "../ContactReactMap"

import './contactmap.css';
import { Link } from 'gatsby';

import contactMapLocation from './contactMap.svg';

const ContactMap = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      domains: file(relativePath: { eq: "image/hosting/circle.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Box
      {...sectionWrapper}
      className="Contactmap_section section_background_color"
    >
      <Heading {...title} content="Contact Us" />
      <Container className="Contactmap_container1">
        <Box {...row} className="ContactMap_container_row">
          <Box {...col} {...imageArea} className="ContactMap_container_col">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.1316523115825!2d-117.74961718494642!3d33.65375048071613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce7aab2704683%3A0x38d7352f3c8d081d!2sCnetric%20Global%20Inc.!5e0!3m2!1sen!2sin!4v1581419686076!5m2!1sen!2sin" width="600" height="450" frameborder="0" allowfullscreen=""></iframe> */}
            {/* <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1GX4_Dd7WeEzYZwSVuUOW0LPJVm8wA7eL" width="100%" height="400" id="mymap1"></iframe> */}
            {/* <ReportsPage /> */}
            <img src={contactMapLocation} alt="contact map" />
          </Box>
          <Box {...col} {...textArea} className="ContactMap_container_col2">
            <Fade bottom cascade>
              <div id="contactLocations">
                <p className="contact_addressBlock">
                  Cnetric Global Inc.
                  <br />
                  300 Spectrum Center Dr., Suite 400, Irvine, CA 92618
                  <br />
                  P: +1 (415) 806-2739‬
                  <br />
                  E: info@cnetric.com
                  <br />
                  (Dennis Menendez, SVP - Client Success, Americas)
                </p>
                <p>We are also located at:</p>
                <div className="empty_space10" />
              </div>
            </Fade>
          </Box>
          <Box className="contact_location_list">
            <ul>
              <li>
                Irvine, CA, USA
                <br />
                (800) 555-1212
              </li>
              <li>
                Austin, TX, USA
                <br />
                (415) 806-2739
              </li>
              <li>
                Toronto, ON, Canada
                <br />
                (416) 705-5128
              </li>
              <li>
                Buenos Aires, Argentina
                <br />
                +54 9 11 6941 8155
              </li>
              <li>
                Bogota, Colombia
                <br />
                +54 9 11 6941 8155
              </li>
              <li>
                Sydney, Australia
                <br />
                +61 4 3852 8176
              </li>
              <li>
                Bangalore, India
                <br />
                +91 98451 64517
              </li>
            </ul>
          </Box>
          <div className="empty_space30" />
        </Box>
      </Container>
    </Box>
  );
};

ContactMap.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
};

ContactMap.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['20px', '20px', '20px', '25px'],
    pb: ['25px', '25px', '25px', '30px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '100%', '42%', '42%'],
  },
  imageArea: {
    width: ['100%', '100%', '100%', '58%', '58%'],
    mb: ['10px', '10px', '10px', '0', '0'],
  },
  title: {
    fontSize: ['30px', '30px', '35px', '40px', '45px'],
    // color: '#0f2137',
    // letterSpacing: '-0.025em',
    mb: '25px',
    textAlign: 'center',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
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
  },
};

export default ContactMap;
