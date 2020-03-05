import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import FeatureBlock from 'common/src/components/FeatureBlock';

import './ourpartners.css';

const OurPartners = ({
  sectionWrapper,
  row,
  col,
  col_par,
  secTitleWrapper,
  secHeading,
  secText,
  featureItemHeading,
  featureItemDes,
  featureBlockStyle,
  iconStyle,
  contentStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      hostingJson {
        PARTNERS {
          avatar {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Box {...sectionWrapper} id="Ourpartners">
      <Container className="BoxItemsContainer ourPartnerPage_content">
        <>
          <Box {...secTitleWrapper}>
            <Fade bottom cascade>
              {/* <Text {...secText} content="OUR PARTNERS" /> */}
              <Heading {...secHeading} content="OUR PARTNERS" />
            </Fade>
          </Box>
          <Box {...row} className="flex_center">
            {Data.hostingJson.PARTNERS.map((partnerItem, index) => (
              <Box {...col_par} key={`partner-${index}`}>
                <FeatureBlock
                  wrapperStyle={featureBlockStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  icon={
                    <Image
                      src={partnerItem.avatar.childImageSharp.fluid.src}
                      alt={`partners-${index}`}
                      className="partners_image"
                    />
                  }
                />
              </Box>
            ))}
          </Box>
        </>
      </Container>
    </Box>
  );
};

OurPartners.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  featureItemHeading: PropTypes.object,
  featureItemDes: PropTypes.object,
  featureBlockStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

OurPartners.defaultProps = {
  sectionWrapper: {
    as: 'section',
    id: 'service_section',
    className: 'service_section',
    pt: ['60px', '80px', '80px', '80px'],
    pb: ['60px', '80px', '80px', '100px'],
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
  },
  col: {
    width: [1, '46.5%', '46.5%', '31%'],
    className: 'service_col',
    bg: '#fff',
  },
  col_par: {
    width: [1, '46.5%', '46.5%', '31%'],
    className: 'service_col partner_col',
    bg: '#fff',
  },
  featureBlockStyle: {
    p: '45px 55px',
    className: 'service_item',
  },
  iconStyle: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    mb: '45px',
  },
  contentStyle: {
    textAlign: 'center',
  },
  featureItemHeading: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: '20px',
    letterSpacing: '-0.020em',
  },
  featureItemDes: {
    fontSize: '15px',
    lineHeight: '1.84',
    color: '#343d48cc',
    mb: '0',
  },
};

export default OurPartners;
