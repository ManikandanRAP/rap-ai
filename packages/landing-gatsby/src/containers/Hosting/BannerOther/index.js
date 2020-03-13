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
import BannerWrapper4, {
  SearchWrapper,
  List,
  DiscountWrapper,
  DiscountLabel,
} from './bannerother.style';

import './bannerother.css';

import { search } from 'react-icons-kit/feather/search';

const BannerOtherSection = ({
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
    <BannerWrapper4 id="banner_section">
      <ParticlesComponent />
      <Container className="banner_container aboutUs_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading
              {...title}
              content="The future of e-commerce is unified and universal"
            />
            <Text
              {...description}
              content='Unified commerce goes beyond omni-channel, putting the customer experience first, breaking down the walls between internal channel silos and leveraging a common commerce platform"- Boston Retail Partners'
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container ContactUs_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading {...title} content="Contact us" />
            <Text
              {...description}
              content="We endeavour to answer all enquiries within 24 hours on business days."
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container company_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading
              {...title}
              content="The future of e-commerce is unified and universal"
            />
            <Text
              {...description}
              content='Unified commerce goes beyond omni-channel, putting the customer experience first, breaking down the walls between internal channel silos and leveraging a common commerce platform"- Boston Retail Partners'
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container ourTeam_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading {...title} content="Our Team" />
            <Text
              {...description}
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container Partner_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading {...title} content="Partners" />
            <Text
              {...description}
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Box>
        </Box>
      </Container>
      <Container className="banner_container universalcom_suite_banner">
        <Box {...row}>
          <Box {...textArea}>
            <Heading {...title} content="Universal Commerce Suite" />
            <Text
              {...description}
              content="Best of Breed Innovation and Disruption on a Single Platform"
            />
          </Box>
        </Box>
      </Container>
    </BannerWrapper4>
  );
};

BannerOtherSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  searchArea: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
};

BannerOtherSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea: {
    width: ['98%', '95%', '95%', '95%', '85%'],
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

export default BannerOtherSection;
