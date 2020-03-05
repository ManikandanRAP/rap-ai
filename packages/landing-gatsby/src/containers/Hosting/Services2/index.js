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

const ServicesSection2 = ({
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
}) => {
  const Data = useStaticQuery(graphql`
    query {
      hostingJson {
        SERVICESS_DATA {
          title
          description
          icon {
            publicURL
          }
        }
      }
    }
  `);

  return (
    <Box {...sectionWrapper}>
      <Container>
        <>
          <Box {...secTitleWrapper}>
            <Fade bottom cascade>
              <Text {...secText} content="OUR SERVICES" />
              <Heading
                {...secHeading}
                content="What Featured Service that We Provide"
              />
            </Fade>
          </Box>
          <Box {...row} style={{justifyContent: 'center'}}>
            {Data.hostingJson.SERVICESS_DATA.map((featureItem, index) => (
              <Box {...col} key={`service-${index}`}>
                <FeatureBlock
                  wrapperStyle={featureBlockStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={
                    <Heading
                      {...featureItemHeading}
                      content={featureItem.title}
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      content={featureItem.description}
                    />
                  }
                  icon={
                    <Image
                      {...featureItemImage}
                      src={featureItem.icon.publicURL}
                      alt={`icon-${index}`}
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

ServicesSection2.propTypes = {
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

ServicesSection2.defaultProps = {
  sectionWrapper: {
    as: 'section',
    id: 'service_section',
    className: 'service_section',
    pt: ['20px', '20px', '30px', '40px'],
    // pb: ['60px', '80px', '80px', '100px'],
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
    fontSize: ['16px', '16px'],
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
    width: [1, 0.45, 0.45, 0.3],
    className: 'service_col',
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

export default ServicesSection2;