import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';

import CountUp, { startAnimation } from 'react-countup';
// import CountUp, { useCountUp } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import './stats.css';

const StatsSection = ({
  sectionWrapper,
  row,
  col,
  secTitleWrapper,
  secHeading,
  secText,
  featureItemHeading,
  featureItemImage,
  featureItemDes,
  featureBlockStyle,
  iconStyle,
  contentStyle,
  props,
}) => {
  return (
    <Box {...sectionWrapper}>
      <Container>
        <>
          <Box {...secTitleWrapper}>
            <Fade bottom cascade>
              <Text {...secText} content="Our Story So Far" />
              <Heading
                {...secHeading}
                content="Here are a few numbers that illustrate the scale of Cnetric’s experience and clientele."
              />
            </Fade>
          </Box>

          <Box {...row} className="cols">
            <Box {...col}>
              <Box className="stats_box">
                <Box>
                  <span>
                    <CountUp
                      end={100}
                      duration={1}
                      redraw={true}
                      preserveValue={true}
                    >
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall once>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    +
                  </span>

                  <Text content="Clients" />
                </Box>
              </Box>
            </Box>

            <Box {...col}>
              <Box className="stats_box">
                <Box>
                  <span>
                    <CountUp end={16} duration={1} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    +
                  </span>
                  <Text content="years of experience" />
                </Box>
              </Box>
            </Box>

            <Box {...col}>
              <Box className="stats_box">
                <Box>
                  <span>
                    <CountUp end={150} duration={1} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    +
                  </span>
                  <Text content="projects" />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="empty_space40" />
        </>
      </Container>
    </Box>
  );
};

StatsSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  featureItemHeading: PropTypes.object,
  featureItemImage: PropTypes.object,
  featureItemDes: PropTypes.object,
  featureBlockStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

StatsSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    id: 'stats_section',
    className: 'circles dark',
    pt: ['20px', '20px', '30px', '40px'],
    // pb: ['60px', '80px', '80px', '100px'],
  },
  secTitleWrapper: {
    mb: ['20px', '20px', '30px', '35px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: ['30px', '30px', '35px', '40px', '45px'],
    fontWeight: '300',
    color: '#fff',
    mb: '25px',
    pt: '25px',
  },
  secHeading: {
    fontSize: ['18px', '18px', '20px', '22px', '24px'],
    fontWeight: '300',
    textAlign: 'center',
    color: '#fff',
    mb: '25px',
    pt: '25px',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  col: {
    width: [1, 1, 0.25, 0.25],
    className: 'stats_col',
    bg: '#fff',
    margin: '1%',
  },
  featureBlockStyle: {
    p: '20px 20px',
    className: 'service_item',
  },
  iconStyle: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    mb: '10px',
  },
  contentStyle: {
    textAlign: 'center',
  },
  featureItemHeading: {
    fontSize: ['16px', '18px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: '20px',
    letterSpacing: '-0.020em',
  },
  featureItemImage: {
    width: '120px !important',
    height: '120px !important',
  },
  featureItemDes: {
    fontSize: '15px',
    lineHeight: '1.84',
    color: '#343d48cc',
    mb: '10px',
  },
};

export default StatsSection;
