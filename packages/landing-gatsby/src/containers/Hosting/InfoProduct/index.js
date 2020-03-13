import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';

import { Link } from 'gatsby';

import univcomsuiteImg1 from 'common/src/assets/image/hosting/Pages/Cloud Transformation/Greater Value at Lower Costs.svg';
import univcomsuiteImg2 from 'common/src/assets/image/hosting/Pages/Cloud Transformation/Greater Value at Lower Costs.svg';
import univcomsuiteImg3 from 'common/src/assets/image/hosting/Pages/Cloud Transformation/Greater Value at Lower Costs.svg';
import univcomsuiteImg4 from 'common/src/assets/image/hosting/Pages/Cloud Transformation/Greater Value at Lower Costs.svg';
import univcomsuiteImg5 from 'common/src/assets/image/hosting/Pages/Cloud Transformation/Greater Value at Lower Costs.svg';
import univcomsuiteImg6 from 'common/src/assets/image/hosting/Pages/Cloud Transformation/Greater Value at Lower Costs.svg';

import './infoproduct.css';

const InfoProductSection = ({
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
  secTitleWrapper,
  secHeading,
  secText,
  box_size,
}) => {
  return (
    <Box {...sectionWrapper} id="info_proudcts">
      <div className="multi_sections_container Univcomsuite_info_container">
        <Container>
          <Box style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="Industry-Leading Integration Capabilities"
                />
                <Text
                  {...description}
                  content="Universal Commerce Suite is an open integration platform, with universal APIs to deliver the best-of-breed enterprise-grade digital commerce platform. We enable true choice of software vendors, cloud hosting environments and powering custom experiences on a variety of devices and platforms. Universal Commerce Suite (UCS delivers monolithic single app simplicity with microservice like speed, flexibility, & scalability. It makes the process of integrations much faster and easier, drastically reducing timelines and costs for integrations. Imagine a single contract for your entire eCommerce ecosystem so that you can control and upgrade your ecosystem with confidence and ease."
                />
              </Fade>
              <div className="empty_space30" />
            </Box>
          </Box>
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box
              {...row}
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading {...title} content="No Vendor Lock-in" />
                  <Text
                    {...description}
                    content="Universal Commerce allows you to manage your entire commerce ecosystem under a single contract. Enterprise ecommerce solutions are complicated with multiple licenses and contracts. UCS delivers the ability to access a complete solution through a single simple contract. Get a full ecosystem on complements - Commerce, OMS, Marketing, CMS, Analytics, PIM, Payment, and Shipping with the flexibility of vendors and products."
                  />
                </Fade>
                <div className="empty_space30" />
              </Box>
              <Box
                {...col}
                {...textArea}
                className="InfoBanner_Image_container"
              >
                <Fade bottom cascade>
                  <Image src={univcomsuiteImg1} alt="No Vendor Lock-in" />
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
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Easy & Swift Migration to Current Version"
                />
                <Text
                  {...description}
                  content="With traditional enterprise commerce solutions, you are locked in to a particular software or vendor. Migrating to the latest version or switching platforms is time-consuming, complex, and expensive. Our pre-integrated software packages and universal APIs accelerate time to value and allow for simplified migration from one package to another."
                />
              </Fade>
              <div className="empty_space30" />
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image
                  src={univcomsuiteImg2}
                  alt="Easy & Swift Migration to Current Version"
                />
              </Fade>
            </Box>
          </Box>
        </Container>

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
                    content="Cloud Transformation Made Easy"
                  />
                  <Text
                    {...description}
                    content="UCS gives brands the ability to move to the cloud at speed with free choice of platform and transparency of process. Whether it's public, private, or hybrid we deliver quick and simple processes. You get a trusted and proven cloud configurations with built-in CI/CD process to reduce business risks."
                  />
                </Fade>
                <div className="empty_space30" />
              </Box>
              <Box
                {...col}
                {...textArea}
                className="InfoBanner_Image_container"
              >
                <Fade bottom cascade>
                  <Image
                    src={univcomsuiteImg3}
                    alt="Cloud Transformation Made Easy"
                  />
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
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Because Customer Experience is Important"
                />
                <Text
                  {...description}
                  content="UCS empowers you to integrate any device or new technology with speed and ease. This functionality in tandem with headless architecture allows highly personalized customer experiences on any channel or device, anytime, anywhere. You can provide customers with a truly world-class, seamless omnichannel experience. Enhancing customer experience is key to customer retention and increasing conversions."
                />
              </Fade>
              <div className="empty_space30" />
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image
                  src={univcomsuiteImg4}
                  alt="Because Customer Experience is Important"
                />
              </Fade>
            </Box>
          </Box>
        </Container>
        <Box className="section_background_color">
          <Container>
            <Box
              {...row}
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading {...title} content="Deploy Anytime, Anywhere" />
                  <Text
                    {...description}
                    content="Enjoy complete freedom with UCS and deploy any software of your choice as and when you choose with no hassles and restrictions. You can have your pick of any digital commerce packaged software, any digital experience platform, and any add-on packaged software, on any cloud with Universal Commerce Suite."
                  />
                </Fade>
                <div className="empty_space30" />
              </Box>
              <Box
                {...col}
                {...textArea}
                className="InfoBanner_Image_container"
              >
                <Fade bottom cascade>
                  <Image
                    src={univcomsuiteImg5}
                    alt="Deploy Anytime, Anywhere"
                  />
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
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading {...title} content="Storefronts" />
                <Text
                  {...description}
                  content="You can build your own custom eCommerce storefront by leveraging JAMStack and UCS. Cnetric’s expertise can create a headless storefront that can be swiftly deployed with out-of-the-box functionality. With security, scalability, flexibility and open-Saas, Storefronts provide powerful functionality for driving sales. Even better, you can create individual customer experiences based on data and content. Drive optimized conversion through PWA (Progressive Web App) storefronts that enable highly personalized shopper experiences. PWA Storefronts help future-proof your eCommerce business for long-term success."
                />
              </Fade>
              <div className="empty_space30" />
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={univcomsuiteImg6} alt="Storefronts" />
              </Fade>
            </Box>
          </Box>
        </Container>
      </div>
      {/* end of universal-commerce-suite */}
    </Box>
  );
};

InfoProductSection.propTypes = {
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
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  box_size: PropTypes.object,
};

InfoProductSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    // pt: ['25px', '25px', '25px', '30px', '30px'],
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
  description: {
    fontSize: ['16px', '18px', '18px', '18px', '18px'],
    // color: '#343d48cc',
    color: '#252525',
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
  box_size: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
};

export default InfoProductSection;
