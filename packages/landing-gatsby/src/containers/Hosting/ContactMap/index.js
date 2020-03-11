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
      <Heading {...title} content="10+ Branches Across The World" />
      <Container className="Contactmap_container1">
        <Box {...row} className="ContactMap_container_row">
          <Box {...imageArea} className="ContactMap_container_single">
            <img src={contactMapLocation} alt="contact map" />
          </Box>
          {/* <Box {...col} {...imageArea} className="ContactMap_container_col">
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
          </Box> */}
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
