
import React from "react";
import Box from 'common/src/components/Box';
import Container from 'common/src/components/UI/Container';
import Button from 'common/src/components/Button';
import { Link } from "gatsby";
import PropTypes from 'prop-types';

import "./ctasection.css";

const Ctasection = ({
    button,
    box_size,
    cta_size_container
}) => {
    return (
        <>
            <Container fullWidth noGutter className="cta_size_container">
                <Box className="Cta_container cta_B2b_page">
                    <Box {...box_size}>
                        <p>Disrupt B2B Commerce with Cnetric’s expertise.</p>
                    </Box>
                    <Box {...box_size}>
                        <Link to="/contact">
                            <Button {...button} title="Work with Us" />
                        </Link>
                    </Box>
                </Box>
                <Box className="Cta_container cta_B2c_page">
                    <Box {...box_size}>
                        <p>Disrupt B2C Commerce with Cnetric’s expertise.</p>
                    </Box>
                    <Box {...box_size}>
                        <Link to="/contact">
                            <Button {...button} title="Work with Us" />
                        </Link>
                    </Box>
                </Box>
                <Box className="Cta_container cta_automation_ai_page">
                    <Box {...box_size}>
                        <p>Disrupt eCommerce with integrations and the power of AI/ML. </p>
                    </Box>
                    <Box {...box_size}>
                        <Link to="/contact">
                            <Button {...button} title="Work with Us" />
                        </Link>
                    </Box>
                </Box>
                <Box className="Cta_container cta_cloudTransform_page">
                    <Box {...box_size}>
                        <p>Disrupt eCommerce with Innovative Cloud Technology.</p>
                    </Box>
                    <Box {...box_size}>
                        <Link to="/contact">
                            <Button {...button} title="Work with Us" />
                        </Link>
                    </Box>
                </Box>
            </Container>

        </>
    );
}

Ctasection.propTypes = {
    button: PropTypes.object,
    box_size: PropTypes.object
};
Ctasection.defaultProps = {
    button: {
        type: 'button',
        fontSize: '14px',
        fontWeight: '600',
        color: '#fff',
        borderRadius: '4px',
        pl: '22px',
        pr: '22px',
        colors: 'primaryWithBg',
        height: `{5}`,
    },
    box_size: {
        width: '50%'
    }
};

export default Ctasection