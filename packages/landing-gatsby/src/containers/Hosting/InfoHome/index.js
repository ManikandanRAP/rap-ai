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
import IconTextHoverSection from '../IconTextHover';

import drcimg from 'common/src/assets/image/hosting/Home/drc.svg';
import univcoming from 'common/src/assets/image/hosting/Home/uc.svg';
import illusting from 'common/src/assets/image/hosting/Home/illustration.svg';
import { Link } from 'gatsby';

import './infohome.css';

const InfoHomeSection = ({
  sectionWrapper,
  row,
  col,
  col1,
  col2,
  col3,
  title,
  description,
  subtitle,
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
}) => {
  return (
    <Box {...sectionWrapper} id="info_home">
      <Container>
        <Heading {...title} className="text_center" content="The Platform" />
        <Box className="HomeSection1">
          <Box className="info_order_change">
            <Fade bottom cascade>
              <Text
                {...description}
                className="intro_text_container2"
                content="The RAP AI platform with its core engines – EyeMagic and ResponseGenie automates a range of tasks and processes across various industries with extremely high efficiency and accuracy. IPA (Intelligent Process Automation) combines the power of business process automation, RPA and AI to extract structured content from a range of sources."
              />
            </Fade>
          </Box>
          <IconTextHoverSection />
        </Box>
        <div className="empty_space30" />
      </Container>

      {/* Start of Maximize Process Efficiency */}

      <Box className="section_background_color">
        <div className="empty_space10" />
        <Container>
          <Heading
            {...title}
            className="text_center"
            content="Maximize Process Efficiency"
          />
          <Box className="HomeSection2">
            <Box className="info_order_change">
              <Fade bottom cascade>
                <Text
                  {...description}
                  className="intro_text_container2"
                  content="The RAP AI platform is a cutting-edge, AI-powered content intelligence platform that automates extraction of structured data from unstructured content – ranging from emails, images, support tickets, documents, contracts, checks, pretty much anything."
                />
              </Fade>
            </Box>
            <br />
            <IconTextHoverSection />
          </Box>
          <div className="empty_space40" />
        </Container>
      </Box>

      {/* End of Maximize Process Efficiency */}

      {/* <Box {...secTitleWrapper}>
        <Fade bottom cascade>
          <Text {...secText} content="Lorem" />
          <Heading
            {...secHeading}
            content="Lorem ipsum"
          />
        </Fade>
      </Box> */}

      <Box className="section_background_color">
        <Container>
          <Box
            {...row}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box {...col} {...textArea} className="info_order_change">
              <Fade bottom cascade>
                <Heading
                  {...title}
                  style={{ marginBottom: '5px' }}
                  content="Dr. Commerce"
                />
                <Text
                  {...subtitle}
                  style={{ fontWeight: '500' }}
                  content="For Your eCommerce Health Today and Tomorrow"
                />
                <Text
                  {...description}
                  content="Are you hitting your target eCommerce KPIs and realizing the available omnichannel opportunity in your industry? Dr. Commerce can look at your current symptoms and prescribe remedies to meet your short term online business goals. Furthermore, with a more comprehensive review, Dr. Commerce can help you prioritize longer-term actions that will bring you to peak omnichannel performance."
                />
                <Link to="/contact">
                  <Button {...button} title="Learn More" />
                </Link>
              </Fade>
              <div className="empty_space40" />
            </Box>
            <Box {...col} {...textArea} className="Home_Image_container">
              <Fade bottom cascade>
                <Image src={drcimg} alt="Info Image One" />
                {/* <h4>Irvine, California</h4>
              <Text
                {...description}
                content="Based out of Irvine, California, Cnetric Global Inc., has 15 offices in as many countries. Our global presence and commitment towards localization, ensures that clients get consistent, market appropriate solutions, in the shortest turnaround time. "
              /> */}
              </Fade>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container>
        <Box
          {...row}
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <Box {...col} {...textArea} className="Home_Image_container">
            <Fade bottom cascade>
              <Image src={univcoming} alt="Info Image One" />
            </Fade>
          </Box>
          <Box {...col} {...textArea} className="info_order_change">
            <Fade bottom cascade>
              <Heading
                {...title}
                style={{ marginBottom: '5px' }}
                content="Universal Commerce"
              />
              <Text
                {...subtitle}
                style={{ fontWeight: 500 }}
                content="Best of Breed Innovation and Disruption on a Single Platform"
              />
              <Text
                {...description}
                content="Rule your eCommerce empire with ease and confidence through a single platform. That’s right, a single window to your entire eCommerce ecosystem, no matter how big. No more silos that slow things down. Jump to light speed with the sophisticated power of Universal Commerce that unifies all your eCommerce operations."
              />
              <Link to="/contact" className="LinkButton">
                <Button {...button} title="Learn More" />
              </Link>
              <br />
            </Fade>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

InfoHomeSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  col1: PropTypes.object,
  col2: PropTypes.object,
  col3: PropTypes.object,
  title: PropTypes.object,
  subtitle: PropTypes.object,
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

InfoHomeSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    // pt: ['25px', '25px', '25px', '30px', '10px'],
    pb: ['25px', '25px', '25px', '25px', '25px'],
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
    alignItems: 'center',
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
    width: ['100%', '100%', '100%', '49%', '49%'],
  },
  col2: {
    // width: '40%',
    width: ['100%', '100%', '100%', '49%', '49%'],
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
    color: '#0F2137',
    letterSpacing: '-0.025em',
    mb: '25px',
    mt: '25px',
  },
  subtitle: {
    fontSize: ['20px', '22px', '22px', '22px', '22px'],
    fontFamily: 'RobotoSlab-SemiBold',
    mb: '25px',
    color: '#5E7086',
  },
  description: {
    fontSize: ['16px', '18px', '18px', '18px', '18px'],
    // color: '#343d48cc',
    color: '#252525',
    // color: '#000',
    lineHeight: '1.5',
    mb: '10px',
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
    marginTop: '14px',
  },
};

export default InfoHomeSection;
