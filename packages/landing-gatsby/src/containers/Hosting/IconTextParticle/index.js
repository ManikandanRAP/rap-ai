import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import { FeatureItem } from '../hosting.style';
import Image from 'common/src/components/Image';
import AdditionalContentParticle from './additionalComponent';


import someimage from 'common/src/assets/image/hosting/author-1.jpg';

import costeffectiveIcon from 'common/src/assets/image/hosting/IconText/Cost-Effective.svg';
import costeffectivenessIcon from 'common/src/assets/image/hosting/IconText/Cost Effectiveness.svg';
import CostefficacyIcon from 'common/src/assets/image/hosting/IconText/Cost-efficacy.svg';
import DelightCustomersIcon from 'common/src/assets/image/hosting/IconText/Delight Customers.svg';
import EnhancedEfficacyIcon from 'common/src/assets/image/hosting/IconText/Enhanced Efficiency.svg';
import FasterFulfillmentIcon from 'common/src/assets/image/hosting/IconText/Faster Fulfillment.svg';
import FlexibilityIcon from 'common/src/assets/image/hosting/IconText/Flexibility.svg';
import FraudIcon from 'common/src/assets/image/hosting/IconText/Fraud Detection.svg';
import GreaterAccuracyIcon from 'common/src/assets/image/hosting/IconText/Greater Accuracy.svg';
import MultiLanguageIcon from 'common/src/assets/image/hosting/IconText/Multi-Language.svg';
import OmnichannelIcon from 'common/src/assets/image/hosting/IconText/Omnichannel.svg';
import PersonalizationIcon from 'common/src/assets/image/hosting/IconText/Personalization.svg';
import RobustIcon from 'common/src/assets/image/hosting/IconText/Robust.svg';
import ScalabilityIcon from 'common/src/assets/image/hosting/IconText/Scalability.svg';
import SeamlessIcon from 'common/src/assets/image/hosting/IconText/Seamless.svg';
import SpeedIcon from 'common/src/assets/image/hosting/IconText/Speed.svg';
import SteamlinedIcon from 'common/src/assets/image/hosting/IconText/Streamlined Operations.svg';


import "./icontextparticle.css";

const IconParticleSection = ({
  sectionWrapper,
  row,
  col,
  col1,
  col2,
  secTitleWrapper,
  secHeading,
  secText,
  featureItemHeading,
  featureItemDes,
}) => {
  return (
    <Box {...sectionWrapper}>
      <Container className="Icon_particle_Container DigitalExperience_Iconparticle">
        <Box {...row} className="feature_section_container">
          <Box {...col}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
                <FeatureItem
                  className="feature_sectionItem_container text_center"
                  title={
                    <Heading
                      {...featureItemHeading}
                      className="text_center"
                      content="Personalization"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      className="text_center"
                      content="Personalized offers and strategies drive greater customer retention and sales."
                    />
                  }

                  icon={
                    <Image
                      src={PersonalizationIcon}
                      alt="Personalization"
                      className="home_features_icon"
                    />
                  }
                  additionalContent={
                    <AdditionalContentParticle />
                  }

                />
              )}
          </Box>
          <Box {...col}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
                <FeatureItem
                  className="feature_sectionItem_container text_center"
                  title={
                    <Heading
                      {...featureItemHeading}
                      className="text_center"
                      content="Omnichannel"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      className="text_center"
                      content="Omnichannel engagement covers all your bases to maximize sales & profits."
                    />
                  }

                  icon={
                    <Image
                      src={OmnichannelIcon}
                      alt="Omnichannel"
                      className="home_features_icon"
                    />
                  }
                  additionalContent={
                    <AdditionalContentParticle />
                  }

                />
              )}
          </Box>
          <Box {...col}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
                <FeatureItem
                  className="feature_sectionItem_container text_center"
                  title={
                    <Heading
                      {...featureItemHeading}
                      className="text_center"
                      content="Seamless"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      className="text_center"
                      content="A truly seamless experience keeps customers delighted and returning for more."
                    />
                  }

                  icon={
                    <Image
                      src={SeamlessIcon}
                      alt="Seamless"
                      className="home_features_icon"
                    />
                  }
                  additionalContent={
                    <AdditionalContentParticle />
                  }

                />
              )}
          </Box>
          <Box {...col}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
                <FeatureItem
                  className="feature_sectionItem_container text_center"
                  title={
                    <Heading
                      {...featureItemHeading}
                      className="text_center"
                      content="Multi-Language"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      className="text_center"
                      content="Translate content into a customer’s preferred language for ease & convenience."
                    />
                  }

                  icon={
                    <Image
                      src={MultiLanguageIcon}
                      alt="Multi-Language"
                      className="home_features_icon"
                    />
                  }
                  additionalContent={
                    <AdditionalContentParticle />
                  }

                />
              )}
          </Box>
        </Box>
      </Container>
      <Container className="Icon_particle_Container CloudTransformation_Iconparticle">
        <Box {...row} className="feature_section_container">
          <Box {...col}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
                <FeatureItem
                  className="feature_sectionItem_container text_center"
                  title={
                    <Heading
                      {...featureItemHeading}
                      className="text_center"
                      content="Cost-Effective"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      className="text_center"
                      content="Personalized offers and strategies drive greater customer retention and sales."
                    />
                  }

                  icon={
                    <Image
                      src={costeffectiveIcon}
                      alt="Cost-Effective"
                      className="home_features_icon"
                    />
                  }
                  additionalContent={
                    <AdditionalContentParticle />
                  }

                />
              )}
          </Box>
          <Box {...col}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
                <FeatureItem
                  className="feature_sectionItem_container text_center"
                  title={
                    <Heading
                      {...featureItemHeading}
                      className="text_center"
                      content="Speed"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      className="text_center"
                      content="Omnichannel engagement covers all your bases to maximize sales & profits."
                    />
                  }

                  icon={
                    <Image
                      src={SpeedIcon}
                      alt="Speed"
                      className="home_features_icon"
                    />
                  }
                  additionalContent={
                    <AdditionalContentParticle />
                  }

                />
              )}
          </Box>
          <Box {...col}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
                <FeatureItem
                  className="feature_sectionItem_container text_center"
                  title={
                    <Heading
                      {...featureItemHeading}
                      className="text_center"
                      content="Scalability"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      className="text_center"
                      content="A truly seamless experience keeps customers delighted and returning for more."
                    />
                  }

                  icon={
                    <Image
                      src={ScalabilityIcon}
                      alt="Scalability"
                      className="home_features_icon"
                    />
                  }
                  additionalContent={
                    <AdditionalContentParticle />
                  }

                />
              )}
          </Box>
          <Box {...col}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
                <FeatureItem
                  className="feature_sectionItem_container text_center"
                  title={
                    <Heading
                      {...featureItemHeading}
                      className="text_center"
                      content="Robust"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      className="text_center"
                      content="Translate content into a customer’s preferred language for ease & convenience."
                    />
                  }

                  icon={
                    <Image
                      src={RobustIcon}
                      alt="Robust"
                      className="home_features_icon"
                    />
                  }
                  additionalContent={
                    <AdditionalContentParticle />
                  }

                />
              )}
          </Box>
        </Box>
      </Container>
      <Container className="Icon_particle_Container OrderManagement_Iconparticle">
        <br />
        <Box {...row} className="feature_section_container flex_center">
          <Box {...col1}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
                <FeatureItem
                  className="feature_sectionItem_container text_center"
                  title={
                    <Heading
                      {...featureItemHeading}
                      className="text_center"
                      content="Cost-efficacy"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      className="text_center"
                      content="Experience multi-fold increase in ROI and enhanced process efficiency."
                    />
                  }

                  icon={
                    <Image
                      src={CostefficacyIcon}
                      alt="Cost-efficacy"
                      className="home_features_icon"
                    />
                  }
                  additionalContent={
                    <AdditionalContentParticle />
                  }

                />
              )}
          </Box>
          <Box {...col1}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
                <FeatureItem
                  className="feature_sectionItem_container text_center"
                  title={
                    <Heading
                      {...featureItemHeading}
                      className="text_center"
                      content="Flexibility"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      className="text_center"
                      content="System can adapt to changes in your operations and business."
                    />
                  }

                  icon={
                    <Image
                      src={FlexibilityIcon}
                      alt="Flexibility"
                      className="home_features_icon"
                    />
                  }
                  additionalContent={
                    <AdditionalContentParticle />
                  }

                />
              )}
          </Box>
          <Box {...col1}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
                <FeatureItem
                  className="feature_sectionItem_container text_center"
                  title={
                    <Heading
                      {...featureItemHeading}
                      className="text_center"
                      content="Faster Fulfillment"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      className="text_center"
                      content="Speedy order fulfillment and return from anywhere, anytime across channels."
                    />
                  }

                  icon={
                    <Image
                      src={FasterFulfillmentIcon}
                      alt="Faster Fulfillment"
                      className="home_features_icon"
                    />
                  }
                  additionalContent={
                    <AdditionalContentParticle />
                  }

                />
              )}
          </Box>
          <Box {...col2}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
                <FeatureItem
                  className="feature_sectionItem_container text_center"
                  title={
                    <Heading
                      {...featureItemHeading}
                      className="text_center"
                      content="Greater Accuracy"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      className="text_center"
                      content="Real-time tracking with an integrated dashboard with order and delivery updates."
                    />
                  }

                  icon={
                    <Image
                      src={GreaterAccuracyIcon}
                      alt="Greater Accuracy"
                      className="home_features_icon"
                    />
                  }
                  additionalContent={
                    <AdditionalContentParticle />
                  }
                />
              )}
          </Box>
          <Box {...col2}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
                <FeatureItem
                  className="feature_sectionItem_container text_center"
                  title={
                    <Heading
                      {...featureItemHeading}
                      className="text_center"
                      content="Delight Customers"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      className="text_center"
                      content="Faster order processing time, significantly increases brand loyalty and customer retention."
                    />
                  }

                  icon={
                    <Image
                      src={DelightCustomersIcon}
                      alt="Delight Customers"
                      className="home_features_icon"
                    />
                  }
                  additionalContent={
                    <AdditionalContentParticle />
                  }
                />
              )}
          </Box>

        </Box>
      </Container>
      <Container className="Icon_particle_Container iotblockchain_Iconparticle">
        <Box {...row} className="feature_section_container">
          <Box {...col}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
                <FeatureItem
                  className="feature_sectionItem_container text_center"
                  title={
                    <Heading
                      {...featureItemHeading}
                      className="text_center"
                      content="Cost Effectiveness"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      className="text_center"
                      content="Thanks to IoT automation and bypassing 3rd parties for transactions expenses are significantly lower."
                    />
                  }

                  icon={
                    <Image
                      src={costeffectivenessIcon}
                      alt="Cost Effective"
                      className="home_features_icon"
                    />
                  }
                  additionalContent={
                    <AdditionalContentParticle />
                  }

                />
              )}
          </Box>
          <Box {...col}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
                <FeatureItem
                  className="feature_sectionItem_container text_center"
                  title={
                    <Heading
                      {...featureItemHeading}
                      className="text_center"
                      content="Streamlined Operations"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      className="text_center"
                      content="Supply chain functions and ecommerce transactions can be efficiently managed, with many tasks automated."
                    />
                  }

                  icon={
                    <Image
                      src={SteamlinedIcon}
                      alt="Streamlined Operations"
                      className="home_features_icon"
                    />
                  }
                  additionalContent={
                    <AdditionalContentParticle />
                  }

                />
              )}
          </Box>
          <Box {...col}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
                <FeatureItem
                  className="feature_sectionItem_container text_center"
                  title={
                    <Heading
                      {...featureItemHeading}
                      className="text_center"
                      content="Fraud Detection"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      className="text_center"
                      content="Increased layers of protection & early discovery of potential hacking for online transactions."
                    />
                  }

                  icon={
                    <Image
                      src={FraudIcon}
                      alt="Fraud Detection"
                      className="home_features_icon"
                    />
                  }
                  additionalContent={
                    <AdditionalContentParticle />
                  }

                />
              )}
          </Box>
          <Box {...col}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_sectionItem_container" />
              </Fade>
            ) : (
                <FeatureItem
                  className="feature_sectionItem_container text_center"
                  title={
                    <Heading
                      {...featureItemHeading}
                      className="text_center"
                      content="Enhanced Efficiency"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      className="text_center"
                      content="The results are astonishingly accurate, swift and error-free with IoT and Block Chain."
                    />
                  }

                  icon={
                    <Image
                      src={EnhancedEfficacyIcon}
                      alt="Enhanced Efficiency"
                      className="home_features_icon"
                    />
                  }
                  additionalContent={
                    <AdditionalContentParticle />
                  }

                />
              )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

IconParticleSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  col1: PropTypes.object,
  col2: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  featureItemHeading: PropTypes.object,
  featureItemDes: PropTypes.object,
};

IconParticleSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    id: 'feature_particle_section',
    className: 'service_section',
    pt: ['15px', '15px', '15px', '15px'],
    background: 'transparent'
    // pb: ['60px', '80px', '80px', '100px'],
  },
  secTitleWrapper: {
    mb: ['10px', '10px', '10x', '10px'],
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
    ml: '-15px',
    mr: '-15px',
  },
  col: {
    className: 'col',
    width: [1, 0.5, 0.5, 0.25],
    pr: '15px',
    pl: '15px',
    mb: '20px',
  },
  col1: {
    className: 'col1',
    width: [1, 0.5, 0.5, 0.33],
    pr: '15px',
    pl: '15px',
    mb: '20px',
  },
  col2: {
    className: 'col2',
    width: [1, 0.5, 0.5, 0.33],
    pr: '15px',
    pl: '15px',
    mb: '20px',
  },
  featureItemHeading: {
    fontSize: ['16px', '16px', '18px', '18px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: ['5px', '5px', '5px', '5px'],
    letterSpacing: '-0.020em',
    maxWidth: ['auto', 'auto', 'auto', '180px'],
  },
  featureItemDes: {
    fontSize: ['14px', '14px', '15px', '15px'],
    lineHeight: '1.75',
    color: '#343d48cc',
    mb: ['10px', '10px', '10px', '10px'],
  },
};

export default IconParticleSection;