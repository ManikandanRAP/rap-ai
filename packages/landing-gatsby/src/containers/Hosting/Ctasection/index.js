import React from 'react';
import Box from 'common/src/components/Box';
import Container from 'common/src/components/UI/Container';
import Button from 'common/src/components/Button';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './ctasection.css';

const Ctasection = ({ button, box_size, cta_size_container }) => {
  return (
    <>
      <Container fullWidth noGutter className="cta_size_container">
        <Box className="Cta_container cta_Home_page">
          <Box {...box_size}>
            <p>Disrupt eCommerce and drive greater sales.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_B2b_page">
          <Box {...box_size}>
            <p>Disrupt B2B Commerce with Cnetric’s expertise.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_B2c_page">
          <Box {...box_size}>
            <p>Disrupt B2C Commerce with Cnetric’s expertise.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_automation_ai_page">
          <Box {...box_size}>
            <p>Disrupt eCommerce with integrations and the power of AI/ML. </p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_cloudTransform_page">
          <Box {...box_size}>
            <p>Disrupt eCommerce with Innovative Cloud Technology.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_omnichannel_page">
          <Box {...box_size}>
            <p>Disrupt eCommerce with Seamless Omnichannel Systems.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_headless_commerce_page">
          <Box {...box_size}>
            <p>Disrupt eCommerce with a Headless System.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_marketing_page">
          <Box {...box_size}>
            <p>
              Heighten sales and profit with AI-powered, innovative marketing
              technologies.
            </p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_experience_analytics_page">
          <Box {...box_size}>
            <p>Delight customers with hyper-personalized experiences.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_social_commerce_page">
          <Box {...box_size}>
            <p>Maximize Sales with Social Commerce.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_order_management_page">
          <Box {...box_size}>
            <p>
              Achieve Best-in-Class Order Management Functionality with
              Omnichannel Approach.
            </p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_digital_experience_page">
          <Box {...box_size}>
            <p>
              Reinvent Customer Experience with Innovative Digital Technology.
            </p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_technology_page">
          <Box {...box_size}>
            <p>Disrupt eCommerce with Cutting-Edge Technology.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container iot_blockchain_page">
          <Box {...box_size}>
            <p>
              Embrace IoT and Block Chain today to fast forward business
              transformation.
            </p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container consulting_page">
          <Box {...box_size}>
            <p>Proven expertise that boosts your ecosystem and sales.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
};

Ctasection.propTypes = {
  button: PropTypes.object,
  box_size: PropTypes.object,
};
Ctasection.defaultProps = {
  button: {
    type: 'button',
    fontSize: ['18px', '20px', '20px', '20px', '20px'],
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: `{5}`,
  },
  box_size: {
    width: '50%',
  },
};

export default Ctasection;
