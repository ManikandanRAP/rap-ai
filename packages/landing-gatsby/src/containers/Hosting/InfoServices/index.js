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

import drcimg from 'common/src/assets/image/hosting/Home/DrCommerce.png';
import univcoming from 'common/src/assets/image/hosting/Home/UniversalCommerce.png';
import illusting from 'common/src/assets/image/hosting/Home/Illustration.png';
import { Link } from "gatsby"


import "./infoservices.css";

const InfoServiceSection = ({
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
}) => {
  return (
    <Box {...sectionWrapper} id="info_services">

      <div className="multi_sections_container CloudTransformation__info_container">

        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea} >
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Cloud Technology for eCommerce"
                />
                <Text
                  {...description}
                  content="eCommerce businesses are leveraging cloud technology and edge computing for massive benefits across their entire eCommerce ecosystem. Cnetric has the expertise and skills to integrate cloud technology and connect all your systems for a seamless, robust eCommerce system that can adapt to changes in demand with minimal infrastructure costs."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={drcimg} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    content="Greater Value at Lower Costs"
                  />
                  <Text
                    {...description}
                    content="Cloud infrastructure provides the value of the latest technology with minimal implementation and maintenance costs. Shift to cloud technology with Cnetric’s expertise and services for  greater cost efficiency & zero downtime. Purchase and its maintenance of equipment are things of the past with cloud-enabled system. This has very tangible benefits such as lower rack space, IT requirements, power consumption, risk of internal outages and the complexity of housing the network."
                  />

                </Fade>
              </Box>
              <Box {...col} {...textArea} className="InfoBanner_Image_container">
                <Fade bottom cascade>
                  <Image src={drcimg} alt="Info Image One" />
                </Fade>
              </Box>
            </Box>
          </Container>
        </Box>


        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Shift towards Open Source"
                />
                <Text
                  {...description}
                  content="Make your eCommerce business lean and agile by shifting to open source. Embracing open source provides a  competitive edge in terms of cost efficiency and speed to market. You might wonder where to start in shifting your systems to an open source cloud architecture. Cnetric’s specialized expertise in open-source DevOps tools and infrastructure platforms can help transform your systems to open source on the cloud."
                />

              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={univcoming} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    content="Rise of Edge Computing"
                  />
                  <Text
                    {...description}
                    content="Edge computing is the perfect solution for global companies that require instant access to data and computing resources to satisfy customer’s expectations. The edge is exactly what it sounds like, distributed cloud architecture that directs processes away from centralized data centers and closer to the devices worldwide. The paradigm shift to edge computing is essential for IOT, as it is required to collect and process big data in real-time and the edge delivers low latency. Bring the power of edge computing to your eCommerce ecosystem with Cnetric’s services and expertise."
                  />

                </Fade>
              </Box>
              <Box {...col} {...textArea} className="InfoBanner_Image_container">
                <Fade bottom cascade>
                  <Image src={univcoming} alt="Info Image One" />
                </Fade>
              </Box>
            </Box>
          </Container>
        </Box>

        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Transform to Serverless Microservices"
                />
                <Text
                  {...description}
                  content="In an attempt to digital transformation, businesses are shifting from monolithic applications to nimble cloud-based microservices. Break your monolithic system into discrete microservices that run in containers with Cnetric’s expertise. This gives your business increased flexibility at both speed and scale. As scale increases, orchestration between the containers becomes complicated. Our microservice mesh and expertise can help you manage hundreds or thousands of containers with ease by mediating requests inside the cloud infrastructure with the various environment-conscious components."
                />

              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={univcoming} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
        </Container>

      </div>
      {/* end of Cloud Transformation */}
    </Box>
  );
};

InfoServiceSection.propTypes = {
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
};

InfoServiceSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['25px', '25px', '25px', '30px', '30px'],
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
    fontSize: ['22px', '24px', '24px', '28px', '28px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px',
  },
  description: {
    fontSize: ['16px', '16px', '16px', '16px', '16px'],
    color: '#343d48cc',
    lineHeight: '1.5',
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

export default InfoServiceSection;