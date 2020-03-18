import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import { FeatureItem } from '../hosting.style';
import Image from 'common/src/components/Image';

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

import AccelerateProcessIcon from 'common/src/assets/image/hosting/IconText/Home/Accelerate Processes.svg';
import BFSIIcon from 'common/src/assets/image/hosting/IconText/Home/BFSI.svg';
import BuildYourOwnIcon from 'common/src/assets/image/hosting/IconText/Home/Build Your Own.svg';
import CaseDeflectionIcon from 'common/src/assets/image/hosting/IconText/Home/Case Deflection.svg';
import CheckRecognitionIcon from 'common/src/assets/image/hosting/IconText/Home/Check Recognition.svg';
import CrossIndustryIcon from 'common/src/assets/image/hosting/IconText/Home/Cross Industry.svg';
import EnhanceAccuracyIcon from 'common/src/assets/image/hosting/IconText/Home/Enhance Accuracy.svg';
import EyeMagicIcon from 'common/src/assets/image/hosting/IconText/Home/EyeMagic.svg';
import FormRecognitionIcon from 'common/src/assets/image/hosting/IconText/Home/Form Recognition.svg';
import FreeUpCriticalResourcesIcon from 'common/src/assets/image/hosting/IconText/Home/Free Up Critical Resources.svg';
import HealthcareIcon from 'common/src/assets/image/hosting/IconText/Home/Healthcare.svg';
import IDVerificationIcon from 'common/src/assets/image/hosting/IconText/Home/ID Verification.svg';
import IntelligentEmailResponseIcon from 'common/src/assets/image/hosting/IconText/Home/Intelligent Email Response.svg';
import InvoiceProcessingIcon from 'common/src/assets/image/hosting/IconText/Home/Invoice Processing.svg';
import LeaseAbstractionIcon from 'common/src/assets/image/hosting/IconText/Home/Lease Abstraction.svg';
import LogisticsIcon from 'common/src/assets/image/hosting/IconText/Home/Logistics.svg';
import QuoteProcessingIcon from 'common/src/assets/image/hosting/IconText/Home/Quote Processing.svg';
import RealEstateIcon from 'common/src/assets/image/hosting/IconText/Home/Real Estate.svg';
import ReduceOperatingCostsIcon from 'common/src/assets/image/hosting/IconText/Home/Reduce Operating Costs.svg';
import ResponseGenieIcon from 'common/src/assets/image/hosting/IconText/Home/ResponseGenie.svg';
import RPAIcon from 'common/src/assets/image/hosting/IconText/Home/RPA.svg';
import ScaleUpWithEaseIcon from 'common/src/assets/image/hosting/IconText/Home/Scale Up With Ease.svg';

import './icontexthover.css';

const IconTextHoverSection = ({
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
  featureItemSubHeading,
}) => {
  return (
    <Box {...sectionWrapper}>
      <Container className="Icon_Hover_Container HomePlatform_IconHover">
        <Box {...row} className="feature_hover_section_container">
          <Box {...col2}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_hover_sectionItem_container" />
              </Fade>
            ) : (
              <FeatureItem
                className="feature_hover_sectionItem_container text_center"
                title={
                  <Heading
                    {...featureItemHeading}
                    className="text_center"
                    content="EyeMagic"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Speed up document processing using computer vision capabilities including advanced handwriting recognition."
                  />
                }
                icon={
                  <Image
                    src={EyeMagicIcon}
                    alt="EyeMagic"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
          <Box {...col2}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_hover_sectionItem_container" />
              </Fade>
            ) : (
              <FeatureItem
                className="feature_hover_sectionItem_container text_center"
                title={
                  <Heading
                    {...featureItemHeading}
                    className="text_center"
                    content="ResponseGenie"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Improve response time and enhance customer engagement with content, intent analysis and entity extraction."
                  />
                }
                icon={
                  <Image
                    src={ResponseGenieIcon}
                    alt="ResponseGenie"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
          <Box {...col2}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_hover_sectionItem_container" />
              </Fade>
            ) : (
              <FeatureItem
                className="feature_hover_sectionItem_container text_center"
                title={
                  <Heading
                    {...featureItemHeading}
                    className="text_center"
                    content="RPA"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Reduce costs by automating business workflows with the combined power of AI, RPA and IPA for greater efficiency."
                  />
                }
                icon={
                  <Image
                    src={RPAIcon}
                    alt="RPA"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
        </Box>
      </Container>

      {/* Start of Home Page Maximize Process Efficiency */}

      <Container className="Icon_Hover_Container HomeMaximizeProcessEfficiency_IconHover">
        <Box {...row} className="feature_hover_section_container">
          <Box {...col2}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_hover_sectionItem_container" />
              </Fade>
            ) : (
              <FeatureItem
                className="feature_hover_sectionItem_container text_center"
                title={
                  <Heading
                    {...featureItemHeading}
                    className="text_center"
                    content="Accelerate Processes"
                  />
                }
                description={
                  <Text
                    {...featureItemSubHeading}
                    className="text_center"
                    content="From days to minutes"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Speed up document processing using computer vision capabilities including advanced handwriting recognition."
                  />
                }
                icon={
                  <Image
                    src={AccelerateProcessIcon}
                    alt="Accelerate Process"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
          <Box {...col2}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_hover_sectionItem_container" />
              </Fade>
            ) : (
              <FeatureItem
                className="feature_hover_sectionItem_container text_center"
                title={
                  <Heading
                    {...featureItemHeading}
                    className="text_center"
                    content="Scale-up with Ease"
                  />
                }
                description={
                  <Text
                    {...featureItemSubHeading}
                    className="text_center"
                    content="Unlimited Capacity"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Augment capacity with automation and scale-up volumes with greater accuracy and efficiency."
                  />
                }
                icon={
                  <Image
                    src={ScaleUpWithEaseIcon}
                    alt="Scaleup with ease"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
          <Box {...col2}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_hover_sectionItem_container" />
              </Fade>
            ) : (
              <FeatureItem
                className="feature_hover_sectionItem_container text_center"
                title={
                  <Heading
                    {...featureItemHeading}
                    className="text_center"
                    content="Reduce Operating Costs"
                  />
                }
                description={
                  <Text
                    {...featureItemSubHeading}
                    className="text_center"
                    content="30% – 70% Reduction"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Cut down Opex with automation powered by AI that provides accurate results faster at lesser cost."
                  />
                }
                icon={
                  <Image
                    src={ReduceOperatingCostsIcon}
                    alt="Reduce Operating Costs"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
          <Box {...col2}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_hover_sectionItem_container" />
              </Fade>
            ) : (
              <FeatureItem
                className="feature_hover_sectionItem_container text_center"
                title={
                  <Heading
                    {...featureItemHeading}
                    className="text_center"
                    content="Enhance Accuracy"
                  />
                }
                description={
                  <Text
                    {...featureItemSubHeading}
                    className="text_center"
                    content="Reduction in errors"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Guaranteed accurate outputs and results through intelligent automation that minimizes errors."
                  />
                }
                icon={
                  <Image
                    src={EnhanceAccuracyIcon}
                    alt="Enhance Accuracy"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
          <Box {...col2}>
            {FeatureItem.animation ? (
              <Fade bottom delay={120}>
                <FeatureItem className="feature_hover_sectionItem_container" />
              </Fade>
            ) : (
              <FeatureItem
                className="feature_hover_sectionItem_container text_center"
                title={
                  <Heading
                    {...featureItemHeading}
                    className="text_center"
                    content="Free Up Critical Resources"
                  />
                }
                description={
                  <Text
                    {...featureItemSubHeading}
                    className="text_center"
                    content="More man hours for critical tasks"
                  />
                }
                description={
                  <Text
                    {...featureItemDes}
                    className="text_center"
                    content="Free up critical resources for higher value-add tasks rather than repetitive low-value ones."
                  />
                }
                icon={
                  <Image
                    src={FreeUpCriticalResourcesIcon}
                    alt="Free up critical resources"
                    className="home_features_icon"
                  />
                }
              />
            )}
          </Box>
        </Box>
      </Container>

      {/* End of Home Page Maximize Process Effinciency */}
    </Box>
  );
};

IconTextHoverSection.propTypes = {
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
  featureItemSubHeading: PropTypes.object,
};

IconTextHoverSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    id: 'feature_hover_section',
    className: 'service_section',
    pt: ['15px', '15px', '15px', '15px'],
    background: 'transparent',
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
  featureItemSubHeading: {
    fontSize: ['14px', '14px', '15px', '15px'],
    fontWeight: '400',
    lineHeight: '1.75',
    color: '#343d48cc',
    mb: ['10px', '10px', '10px', '10px'],
  },
};

export default IconTextHoverSection;
