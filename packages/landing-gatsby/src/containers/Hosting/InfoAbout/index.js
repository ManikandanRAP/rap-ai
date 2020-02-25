import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Card from 'common/src/components/Card';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';

import ImageOne from 'common/src/assets/image/hosting/About/Irvine.jpg';
import ImageTwo from 'common/src/assets/image/hosting/info2.png';
import { Link } from "gatsby"


import "./infoabout.css";

const InfoAboutSection = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  imageAreaRow,
  imageWrapper,
  imageWrapperOne,
  imageWrapperTwo,
}) => {
  return (
    <Box {...sectionWrapper} id="info_about">
      <Container>
        <Box {...row} style={{alignItems: 'center', justifyContent: 'center'}}>
          <Box {...col} {...textArea}>
            <Fade bottom cascade>
              <Heading
                {...title}
                content="Disrupting Digital Commerce"
              />
              <Text
                {...description}
                content="Is Digital Commerce hard? Is the current pace innovation, the fragmentated solutions landscape, significantly undermining your customer experience? And perhaps the high implementation and maintenance costs are beginning to hurt as well? The good news is, Cnetric can change this for you."
              />
              <Text
                {...description}
                content="We are a global systems integrator, with over 16 years of experience, disrupting this hard world of digital commerce. Our core engines of change are our products, Dr. Commerce and Universal Commerce, which diagnose and unify best of enterprise-grade digital commerce software, under one contract. This offers our customers a true choice of software vendors and cloud hosting environments, at significantly reduced costs."
              />
              <Text
                {...description}
                content="Get back to innovation at speed and scale! Give us a call."
              />
              <Box style={{marginBottom: '33px'}}>
                 <Link to="/contact">
                    <Button {...button} title="Contact Us" />
                </Link>
              </Box>
            </Fade>
          </Box>
          <Box {...col} {...textArea} className="About_Image_container">
            <Fade bottom cascade>
              <Image src={ImageOne} alt="Info Image One" />
              <h4>Irvine, California</h4>
              <Text
                {...description}
                content="Based out of Irvine, California, Cnetric Global Inc., has 15 offices in as many countries. Our global presence and commitment towards localization, ensures that clients get consistent, market appropriate solutions, in the shortest turnaround time. "
              />
            </Fade>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

InfoAboutSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
  imageAreaRow: PropTypes.object,
  imageWrapper: PropTypes.object,
  imageWrapperOne: PropTypes.object,
  imageWrapperTwo: PropTypes.object,
};

InfoAboutSection.defaultProps = {
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
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
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
    height: `{5}`,
  },
};

export default InfoAboutSection;
