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
import ParticlesComponent from '../../Hosting/Particle';
import BannerWrapper1, {
  SearchWrapper,
  List,
  DiscountWrapper,
  DiscountLabel,
} from './bannerservice.style';

const BannerServicesSection = ({
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
    <BannerWrapper1 id="banner_section">
      <ParticlesComponent />
      <Container className="banner_container Cloud_infrastructure_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading {...title} content="Cloud Transformation" />
            <Text
              {...description}
              content="Seamless, Connected eCommerce Drives Sales"
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container social_commerce_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading {...title} content="Social Commerce" />
            <Text
              {...description}
              content="Maximize Sales through Social Commerce"
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container technology_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading {...title} content="Technology" />
            <Text
              {...description}
              content="Leverage innovative technology to disrupt eCommerce"
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container Strategy_roadmap_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading {...title} content="Strategy Roadmap" />
            <Text
              {...description}
              content="Proven, tech-savvy expertise that conquers your challenges"
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container Microservice_mesh_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading {...title} content="Microservice & Mesh" />
            <Text
              {...description}
              content="Implement microservices with mesh for greater agility"
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container Dr_Commerce_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading {...title} content="Dr. Commerce" />
            <Text
              {...description}
              content="A personal touch to heal your eCommerce woes"
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container IBM_Redhat_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading {...title} content="IBM & RedHat" />
            <Text
              {...description}
              content="Power your cloud transformation with the right expertise"
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container Core_media_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading {...title} content="CoreMedia" />
            <Text
              {...description}
              content="Cutting-edge content experience that delights users"
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container Elastic_path_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading {...title} content="Elastic Path" />
            <Text
              {...description}
              content="Delight customers with a world-class digital experience"
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container Analytics_insight_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading {...title} content="Analytics & Insights" />
            <Text
              {...description}
              content="Glean actionable insights from the wealth of customer data"
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container fiveG_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading {...title} content="5G" />
            <Text
              {...description}
              content="Deliver a next-gen experience that boosts sales"
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container apigraphql_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading {...title} content="APIs & GraphQL" />
            <Text
              {...description}
              content="Transform your eCommerce ecosystem with APIs"
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container hcl_commerce_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading {...title} content="HCL Commerce" />
            <Text
              {...description}
              content="Enhance your eCommerce ecosystem through agile commerce"
            />
          </Box>
        </Box>
      </Container>
    </BannerWrapper1>
  );
};

BannerServicesSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  searchArea: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
};

BannerServicesSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea: {
    width: ['100%', '95%', '95%', '90%', '75%'],
  },
  title: {
    fontSize: ['26px', '32px', '42px', '45px', '45px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['5px', '8px', '8px', '8px', '8px'],
    lineHeight: '1.31',
    textAlign: 'center',
  },
  description: {
    fontSize: ['18px', '20px', '20px', '24px', '24px'],
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

export default BannerServicesSection;
