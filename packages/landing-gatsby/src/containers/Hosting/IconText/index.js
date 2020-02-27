import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import FeatureBlock from 'common/src/components/FeatureBlock';
import "./icontext.css";

import CloudIcon1 from 'common/src/assets/image/hosting/IconText/CloudTransformation/icon1.svg';
import CloudIcon2 from 'common/src/assets/image/hosting/IconText/CloudTransformation/icon2.svg';
import CloudIcon3 from 'common/src/assets/image/hosting/IconText/CloudTransformation/icon3.svg';
import CloudIcon4 from 'common/src/assets/image/hosting/IconText/CloudTransformation/icon4.svg';

import DigitalExpIcon1 from 'common/src/assets/image/hosting/IconText/Digital Experience/Personalization.svg';
import DigitalExpIcon2 from 'common/src/assets/image/hosting/IconText/Digital Experience/Omnichannel.svg';
import DigitalExpIcon3 from 'common/src/assets/image/hosting/IconText/Digital Experience/Seamless.svg';
import DigitalExpIcon4 from 'common/src/assets/image/hosting/IconText/Digital Experience/Multi-Language.svg';

import speedIcon from 'common/src/assets/image/hosting/Pages/Cloud Transformation/Speed.svg';
import costeffectiveIcon from 'common/src/assets/image/hosting/Pages/Cloud Transformation/Cost-Effective.svg';
import scalabilityIcon from 'common/src/assets/image/hosting/Pages/Cloud Transformation/Scalability.svg';
import robustIcon from 'common/src/assets/image/hosting/Pages/Cloud Transformation/Robust.svg';

const IconTextSection = ({
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

  return (
    <Box {...sectionWrapper} className="Icon_Text_Container">
      <Box className="icon_text_box CloudTransformation_Icontext">
        <>
          <Box {...row} style={{justifyContent: 'center'}}>
              <Box {...col} >
                <FeatureBlock
                  wrapperStyle={featureBlockStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={
                    <Heading
                      {...featureItemHeading}
                      content= "Cost-Effective"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      content="Minimize costs with lower initial IT infrastructure costs and improved manageability with less maintenance."
                    />
                  }
                  icon={
                    <Image
                      {...featureItemImage}
                      src={CloudIcon1}
                      alt="alt text"
                    />
                  }
                />
              </Box>
              <Box {...col} >
                <FeatureBlock
                  wrapperStyle={featureBlockStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={
                    <Heading
                      {...featureItemHeading}
                      content= "Speed"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      content="Enterprises can get their applications up faster and also use edge computing to faster data across devices."
                    />
                  }
                  icon={
                    <Image
                      {...featureItemImage}
                      src={CloudIcon2}
                      alt="alt text"
                    />
                  }
                />
              </Box>
              <Box {...col} >
                <FeatureBlock
                  wrapperStyle={featureBlockStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={
                    <Heading
                      {...featureItemHeading}
                      content= "Scalability"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      content="Handle sudden surges in traffic and seasonal heavy loads with ease due to the flexible scalability of cloud technology."
                    />
                  }
                  icon={
                    <Image
                      {...featureItemImage}
                      src={CloudIcon3}
                      alt="alt text"
                    />
                  }
                />
              </Box>
              <Box {...col} >
                <FeatureBlock
                  wrapperStyle={featureBlockStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={
                    <Heading
                      {...featureItemHeading}
                      content= "Robust"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      content="Cloud-based platforms have built-in measures to cope with any disasters that may occur, so business can continue with minimal down-time."
                    />
                  }
                  icon={
                    <Image
                      {...featureItemImage}
                      src={CloudIcon4}
                      alt="alt text"
                    />
                  }
                />
              </Box>
          </Box>
        </>
      </Box>
    {/* end of cloud transformation */}
      <Box className="icon_text_box DigitalExperience_Icontext">
        <>
          <Box {...row} style={{justifyContent: 'center'}}>
              <Box {...col} >
                <FeatureBlock
                  wrapperStyle={featureBlockStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={
                    <Heading
                      {...featureItemHeading}
                      content= "Personalization"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      content="Personalized offers and strategies drive greater customer retention and sales."
                    />
                  }
                  icon={
                    <Image
                      {...featureItemImage}
                      src={DigitalExpIcon1}
                      alt="alt text"
                    />
                  }
                />
              </Box>
              <Box {...col} >
                <FeatureBlock
                  wrapperStyle={featureBlockStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={
                    <Heading
                      {...featureItemHeading}
                      content= "Omnichannel"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      content="Omnichannel engagement covers all your bases to maximize sales & profits."
                    />
                  }
                  icon={
                    <Image
                      {...featureItemImage}
                      src={DigitalExpIcon2}
                      alt="alt text"
                    />
                  }
                />
              </Box>
              <Box {...col} >
                <FeatureBlock
                  wrapperStyle={featureBlockStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={
                    <Heading
                      {...featureItemHeading}
                      content= "Seamless"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      content="A truly seamless experience keeps customers delighted and returning for more."
                    />
                  }
                  icon={
                    <Image
                      {...featureItemImage}
                      src={DigitalExpIcon3}
                      alt="alt text"
                    />
                  }
                />
              </Box>
              <Box {...col} >
                <FeatureBlock
                  wrapperStyle={featureBlockStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={
                    <Heading
                      {...featureItemHeading}
                      content= "Multi-Language"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      content="Translate content into a customer’s preferred language for ease & convenience."
                    />
                  }
                  icon={
                    <Image
                      {...featureItemImage}
                      src={DigitalExpIcon4}
                      alt="alt text"
                    />
                  }
                />
              </Box>
          </Box>
        </>
      </Box>
    {/* end of digital experience DX */}
      <Box className="icon_text_box OrderManagement_Icontext">
        <>
          <Box {...row} style={{justifyContent: 'center'}}>
              <Box {...col} >
                <FeatureBlock
                  wrapperStyle={featureBlockStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={
                    <Heading
                      {...featureItemHeading}
                      content= "Cost-efficacy"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      content="Experience multi-fold increase in ROI and enhanced process efficiency."
                    />
                  }
                  icon={
                    <Image
                      {...featureItemImage}
                      src={DigitalExpIcon1}
                      alt="alt text"
                    />
                  }
                />
              </Box>
              <Box {...col} >
                <FeatureBlock
                  wrapperStyle={featureBlockStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={
                    <Heading
                      {...featureItemHeading}
                      content= "Flexibility"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      content="System can adapt to changes in your operations and business."
                    />
                  }
                  icon={
                    <Image
                      {...featureItemImage}
                      src={DigitalExpIcon2}
                      alt="alt text"
                    />
                  }
                />
              </Box>
              <Box {...col} >
                <FeatureBlock
                  wrapperStyle={featureBlockStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={
                    <Heading
                      {...featureItemHeading}
                      content= "Faster Fulfillment"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      content="Speedy order fulfillment and return from anywhere, anytime across channels. "
                    />
                  }
                  icon={
                    <Image
                      {...featureItemImage}
                      src={DigitalExpIcon3}
                      alt="alt text"
                    />
                  }
                />
              </Box>
              <Box {...col} >
                <FeatureBlock
                  wrapperStyle={featureBlockStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={
                    <Heading
                      {...featureItemHeading}
                      content= "Greater Accuracy"
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      content="Real-time tracking with an integrated dashboard with order and delivery updates."
                    />
                  }
                  icon={
                    <Image
                      {...featureItemImage}
                      src={DigitalExpIcon4}
                      alt="alt text"
                    />
                  }
                />
              </Box>
          </Box>
        </>
      </Box>
    {/* end of order management */}
    </Box>
  );
};

IconTextSection.propTypes = {
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

IconTextSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    id: 'service_section',
    className: 'service_section',
    pt: ['20px', '20px', '25px', '30px'],
    // pb: ['60px', '80px', '80px', '100px'],
  },
  secTitleWrapper: {
    mb: ['30px', '30px', '40x', '40px'],
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
    width: [1, 0.45, 0.45, 0.2],
    className: 'service_col',
    bg: '#fff',
    margin: '1%',
    border: '1px solid #f1f4f6',
    borderRadius: '8px',
  },
  featureBlockStyle: {
    p: '20px 15px',
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
    mb: '15px',
    mt: '8px',
    letterSpacing: '-0.020em',
  },
  featureItemImage: {
    width: '50px !important',
    height: '50px !important',
  },
  featureItemDes: {
    fontSize: '15px',
    lineHeight: '1.84',
    color: '#343d48cc',
    mb: '0px',
  },
};

export default IconTextSection;
