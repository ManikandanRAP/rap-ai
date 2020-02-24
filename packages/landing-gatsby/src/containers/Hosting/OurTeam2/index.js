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

import "./ourteam2.css"

import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';
import Button from 'common/src/components/Button';

const OurTeam2 = ({
    sectionWrapper,
    row,
    col,
    secTitleWrapper,
    secHeading,
    secText,
    featureItemHeading,
    featureItemDes,
    featureBlockStyle,
    iconStyle,
    contentStyle,
}) => {
    const Data = useStaticQuery(graphql`
    query {
      hostingJson {
        OURTEAM_DATA {
          title
          description
          icon {
            publicURL
          }
        }
      }
    }
  `);
    //Carousel Options
    const teamslideOptions = {
        type: 'carousel',
        autoplay: false,
        perView: 2,
        gap: 1,
        animationDuration: 800,
        peek: {
            before: 100,
            after: 100,
        },
        breakpoints: {
            1800: {
                perView: 4,
                peek: {
                    before: 100,
                    after: 100,
                },
            },
            1400: {
                perView: 3,
                peek: {
                    before: 100,
                    after: 100,
                },
            },
            1200: {
                perView: 3,
                peek: {
                    before: 80,
                    after: 80,
                },
            },
            990: {
                perView: 2,
                peek: {
                    before: 0,
                    after: 0,
                },
            },
            800: {
                perView: 2,
                peek: {
                    before: 0,
                    after: 0,
                },
            },
            575: {
                perView: 1,
                peek: {
                    before: 0,
                    after: 0,
                },
            },
        },
    };

    return (
        <Box {...sectionWrapper} id="OurTeam2">
            <Container>
                <>
                    {/* <Box {...secTitleWrapper}>
                        <Fade bottom cascade>
                            <Text {...secText} content="OUR TEAM" />
                            <Heading
                {...secHeading}
                content="What Featured Service that We Provide"
              />
                        </Fade>
                    </Box> */}


                    <GlideCarousel
                        options={teamslideOptions}
                        nextButton={
                            <Button
                                icon={<i className="flaticon-next" />}
                                variant="textButton"
                                aria-label="next button"
                            />
                        }
                        prevButton={
                            <Button
                                icon={<i className="flaticon-left-arrow" />}
                                variant="textButton"
                                aria-label="prev button"
                            />
                        }
                    >
                        {Data.hostingJson.OURTEAM_DATA.map((teamItem, index) => (
                            <GlideSlide key={`ourteam-slide-${index}`}>
                                <Box key={`service-${index}`}>
                                    <FeatureBlock
                                        wrapperStyle={featureBlockStyle}
                                        iconStyle={iconStyle}
                                        contentStyle={contentStyle}
                                        title={
                                            <Heading
                                                {...featureItemHeading}
                                                content={teamItem.title}
                                            />
                                        }
                                        description={
                                            <Text
                                                {...featureItemDes}
                                                content={teamItem.description}
                                            />
                                        }
                                        icon={
                                            <Image
                                                src={teamItem.icon.publicURL}
                                                alt={`icon-${index}`}
                                            />
                                        }
                                    />
                                </Box>
                            </GlideSlide>
                        ))}

                    </GlideCarousel>

                    <Box {...row}>
                    </Box>
                </>
            </Container>
        </Box>
    );
};

OurTeam2.propTypes = {
    sectionWrapper: PropTypes.object,
    secTitleWrapper: PropTypes.object,
    row: PropTypes.object,
    col: PropTypes.object,
    secHeading: PropTypes.object,
    secText: PropTypes.object,
    featureItemHeading: PropTypes.object,
    featureItemDes: PropTypes.object,
    featureBlockStyle: PropTypes.object,
    iconStyle: PropTypes.object,
    contentStyle: PropTypes.object,
};

OurTeam2.defaultProps = {
    sectionWrapper: {
        as: 'section',
        id: 'service_section',
        className: 'service_section',
        pt: ['60px', '80px', '80px', '80px'],
        pb: ['60px', '80px', '80px', '100px'],
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
        fontSize: ['20px', '24px'],
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
        width: [1, '50%', '50%', '30%'],
        className: 'service_col',
        bg: '#fff',
    },
    featureBlockStyle: {
        p: '45px 55px',
        className: 'service_item',
    },
    iconStyle: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        mb: '45px',
    },
    contentStyle: {
        textAlign: 'center',
    },
    featureItemHeading: {
        fontSize: ['18px', '20px'],
        fontWeight: '400',
        color: '#0f2137',
        lineHeight: '1.5',
        mb: '20px',
        letterSpacing: '-0.020em',
    },
    featureItemDes: {
        fontSize: '15px',
        lineHeight: '1.84',
        color: '#343d48cc',
        mb: '0',
    },
};

export default OurTeam2;
