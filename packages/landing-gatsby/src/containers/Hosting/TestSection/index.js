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

import drcimg from 'common/src/assets/image/hosting/Home/drc.svg';
import univcoming from 'common/src/assets/image/hosting/Home/uc.svg';
import illusting from 'common/src/assets/image/hosting/Home/illustration.svg';
import { Link } from 'gatsby';

import IconParticleSection from '../IconTextParticle';

import B2BImage1 from 'common/src/assets/image/hosting/Pages/B2B/The Modern B2B Customer.svg';
import B2BImage2 from 'common/src/assets/image/hosting/Pages/B2B/Headless Commerce.svg';
import B2BImage3 from 'common/src/assets/image/hosting/Pages/B2B/Influence and Social Proof.svg';
import B2BImage4 from 'common/src/assets/image/hosting/Pages/B2B/Big Data and AI.svg';

const InfoSolutionTestSection = ({
  sectionWrapper,
  row,
  col,
  col1,
  col2,
  title,
  subtitle,
  centertext,
  description,
  button,
  textArea,
  imageArea,
  imageAreaRow,
  imageWrapper,
  imageWrapperOne,
  imageWrapperTwo,
  secTitleWrapper,
  secHeading,
  secText,
  content,
}) => {
  function testfunction1(props) {
    return <h1>Test Function 1</h1>;
  }
  function testfunction2(props) {
    return <h1>Test Function 2</h1>;
  }
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <testfunction1 />;
    }
    return <testfunction2 />;
  }

  return (
    <>
      <Greeting isLoggedIn={false} />
      <Box {...sectionWrapper} id="info_solutions">
        <div className="multi_sections_container B2c_info_container">
          <Container>
            <Box>
              <Box>
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    className="text_center"
                    content="Sample B2C page"
                  />
                  <Text
                    {...description}
                    className="text_center intro_text_container"
                    content="Lorem ipsum"
                  />
                </Fade>
              </Box>
            </Box>
          </Container>
        </div>
        {/* end of b2c */}
        <div className="multi_sections_container B2b_info_container">
          <Container>
            <Box>
              <Box>
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    className="text_center"
                    content="Sample B2B page"
                  />
                  <Text
                    {...description}
                    className="text_center intro_text_container"
                    content="Lorem ipsum"
                  />
                </Fade>
              </Box>
            </Box>
          </Container>
        </div>
        {/* end of b2b */}
      </Box>
    </>
  );
};

InfoSolutionTestSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  col1: PropTypes.object,
  col2: PropTypes.object,
  title: PropTypes.object,
  subtitle: PropTypes.object,
  centertext: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
  imageAreaRow: PropTypes.object,
  imageWrapper: PropTypes.object,
  imageWrapperOne: PropTypes.object,
  imageWrapperTwo: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  secTitleWrapper: PropTypes.object,
};

InfoSolutionTestSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    // pt: ['15px', '15px', '15px', '15px', '15px'],
    // pb: ['60px', '80px', '40px', '80px', '80px'],
    id: 'info_section',
  },
  secTitleWrapper: {
    mb: ['50px', '60px', '60px', '75px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#eb4d4b',
    mb: '10px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
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
  col1: {
    // width: '60%',
    width: ['100%', '100%', '100%', '45%', '45%'],
  },
  col2: {
    // width: '40%',
    width: ['100%', '100%', '100%', '55%', '55%'],
  },
  col3: {
    width: '70%',
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
    fontSize: ['30px', '30px', '35px', '40px', '45px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '25px',
    pt: '25px',
  },
  subtitle: {
    fontSize: ['20px', '22px', '22px', '22px', '22px'],
    color: '#5E7086',
    lineHeight: '1.5',
    fontWeight: '500',
    mb: '10px',
    mt: '-10px',
    fontFamily: 'RobotoSlab-SemiBold',
  },
  centertext: {
    textAlign: 'center',
  },
  description: {
    fontSize: ['16px', '18px', '18px', '18px', '18px'],
    color: '#343d48cc',
    lineHeight: '1.5',
    mb: '15px',
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

export default InfoSolutionTestSection;
