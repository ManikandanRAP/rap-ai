import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Icon from 'react-icons-kit';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Input from 'common/src/components/Input';
import Select from 'common/src/components/Select';
import Container from 'common/src/components/UI/Container';
import ParticlesComponent from '../Particle';
import BannerWrapper3, {
  SearchWrapper,
  List,
  DiscountWrapper,
  DiscountLabel,
} from './bannersolution.style';

const BannerSolutionsSection = ({
  row,
  title,
  description,
  button,
  textArea,
  searchArea,
  discountAmount,
  discountText,
}) => {

  return (
    <BannerWrapper3 id="banner_section">
      <ParticlesComponent />
      <Container className="banner_container B2c_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading
              {...title}
              content="B2C"
            />
            <Text
              {...description}
              content="Greater Sales with Seamless, Omnichannel eCommerce"
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container B2b_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading
              {...title}
              content="B2B"
            />
            <Text
              {...description}
              content="Greater Sales with Seamless, Omnichannel eCommerce"
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container automation_ai_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading
              {...title}
              content="AI/ML"
            />
            <Text
              {...description}
              content="Enhance Your eCommerce Ecosystem with Disruptive AI/ML"
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container omnichannel_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading
              {...title}
              content="Omnichannel"
            />
            <Text
              {...description}
              content="Seamless Experience Delights Customers"
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container headless_commerce_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading
              {...title}
              content="Headless eCommerce"
            />
            <Text
              {...description}
              content="Maximize Sales with Headless eCommerce"
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container order_management_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading
              {...title}
              content="Order Management"
            />
            <Text
              {...description}
              content="Seamless omnichannel order management system"
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container digital_experience_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading
              {...title}
              content="Digital Experience & CX"
            />
            <Text
              {...description}
              content="Seamless, omnichannel customer experience drives sales"
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container iot_blockchain_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading
              {...title}
              content="IoT and Block chain"
            />
            <Text
              {...description}
              content="Fast track eCommerce transactions with IoT and Blockchain"
            />
          </Box>
        </Box>
      </Container>
    </BannerWrapper3>
  );
};

BannerSolutionsSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  searchArea: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
};

BannerSolutionsSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea: {
    width: ['100%', '100%', '90%', '100%', '55%'],
  },
  title: {
    fontSize: ['26px', '32px', '42px', '46px', '45px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['5px', '8px', '8px', '8px', '8px'],
    lineHeight: '1.31',
    textAlign: 'center',
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center',
  },
  button: {
    title: 'Search',
    type: 'button',
    fontSize: '18px',
    fontWeight: '500',
    color: '#fff',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    iconPosition: 'left',
  },
  searchArea: {
    className: 'search_area',
    width: ['100%', '100%', '80%', '100%', '70%'],
    mt: ['45px', '50px', '60px', '60px', '60px'],
  },
  discountAmount: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '600',
    color: '#eb4d4b',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '400',
    color: '#0f2137',
    mb: 0,
    as: 'span',
  },
};

export default BannerSolutionsSection;
