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
            <p>
              Disrupt eCommerce with integrations and the power of Automation &
              AI.
            </p>
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
        <Box className="Cta_container cta_iot_blockchain_page">
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
        <Box className="Cta_container cta_Strategy_roadmap_page">
          <Box {...box_size}>
            <p>Proven expertise that boosts your ecosystem and sales.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_Microservice_mesh_page">
          <Box {...box_size}>
            <p>Boost your eCommerce ecosystem with microservices and mesh.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_Dr_Commerce_page">
          <Box {...box_size}>
            <p>Enhance and future-proof your eCommerce system.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_Banking_page">
          <Box {...box_size}>
            <p>Transform banking transactions and delight customers.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_Food_Grocery_page">
          <Box {...box_size}>
            <p>Transform online food & grocery with digital innovation.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_Retail_page">
          <Box {...box_size}>
            <p>Drive greater online retail sales with digital innovation.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_Ibm_redhat_page">
          <Box {...box_size}>
            <p>Drive greater online retail sales with digital innovation.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_Core_media_page">
          <Box {...box_size}>
            <p>Deliver an iconic brand experience with CoreMedia.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_Elatic_path_page">
          <Box {...box_size}>
            <p>Drive seamless, omnichannel sales with Elastic Path.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_Analytics_insight_page">
          <Box {...box_size}>
            <p>Drive sales with actionable insights from analytics.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_FiveG_page">
          <Box {...box_size}>
            <p>Disrupt eCommerce with 5G innovation.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_Apis_graphql_page">
          <Box {...box_size}>
            <p>Build a stronger, future-proof eCommerce ecosystem with APIs.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_Hcl_commerce_page">
          <Box {...box_size}>
            <p>Enhance your eCommerce ecosystem with HCL Commerce.</p>
          </Box>
          <Box {...box_size}>
            <Link to="/contact">
              <Button {...button} title="Schedule A Consultation" />
            </Link>
          </Box>
        </Box>
        <Box className="Cta_container cta_UniversalCom_suite_page">
          <Box {...box_size}>
            <p>
              Accelerate integrations and extensions with Universal Commerce
              Suite.
            </p>
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
    width: [1, 0.5, 0.5, 0.5],
  },
};

export default Ctasection;
