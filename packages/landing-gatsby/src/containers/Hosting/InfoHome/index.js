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
        <Heading
          {...title}
          className="text_center"
          content="eCommerce is hard but your technology shouldn’t be"
        />
        <Box
          {...row}
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Box
            {...col1}
            className="Home_Image_container"
            style={{ paddingTop: 0 }}
          >
            <Fade bottom cascade>
              <Image
                src={illusting}
                alt="eCommerce is hard but your technology shouldn’t be"
              />
            </Fade>
          </Box>
          <Box {...col2} className="info_order_change">
            <Fade bottom cascade>
              <Text
                {...description}
                content="Are you looking for a partner who can fix and modernize your eCommerce ecosystem, and at the same time will help you elevate your brand well beyond household and industry standards? Cnetric is successfully achieving these goals for our clients including retailers, bankers, insurers, grocers, educators, telecommunicators, and government agencies."
              />
              <Text
                {...description}
                content="Our online commerce expertise is based on the real-life experiences of our flourishing clients. Many of them had initial concerns about business objectives, restrictions and bottlenecks in their current platform. Some challenges even included missing or underperforming critical features, needed system integrations, and future-proofing. We will transfer all of our knowledge and experience to help you crush your obstacles."
              />
              <Text
                {...description}
                content="The people at Cnetric are experts in many of the cardinal platforms and have partnered up with the key innovative companies in the eCommerce space. With our collective know-how we can guide your business to prosperity at scale."
              />
            </Fade>
          </Box>
          <br />
        </Box>
        <div className="empty_space40" />
      </Container>

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
                  content="A personal touch to heal your eCommerce woes"
                />
                <Text
                  {...description}
                  content="You want to be at the top of the eCommerce game, but maybe your platform isn’t up to speed. Count on Dr. Commerce to heal your e-commerce woes and prescribe the latest digital innovation that supercharges your eCommerce technology increasing engagement, reducing churn and uncovering hidden insights. Our personalized expertise is tailored to optimize, modernize and maximize your eCommerce ecosystem."
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
