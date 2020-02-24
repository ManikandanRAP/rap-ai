import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Card from 'common/src/components/Card';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';

import drcimg from 'common/src/assets/image/hosting/Home/DrCommerce.png';
import univcoming from 'common/src/assets/image/hosting/Home/UniversalCommerce.png';
import illusting from 'common/src/assets/image/hosting/Home/Illustration.png';
import { Link } from "gatsby"


import "./infosolutions.css";

const InfoSolutionSection = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  imageAreaRow,
  imageWrapper,
  imageWrapperOne,
  imageWrapperTwo,
  secTitleWrapper,
  secHeading,
  secText,
}) => {
  return (
    <Box {...sectionWrapper} id="info_solutions">
      <div className="multi_sections_container B2c_info_container">


        {/* <Box {...secTitleWrapper}>
        <Fade bottom cascade>
          <Text {...secText} content="Lorem" />
          <Heading
            {...secHeading}
            content="Lorem ipsum"
          />
        </Fade>
      </Box> */}

        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea} >
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="The Modern B2C Customer"
                />
                <Text
                  {...description}
                  content="The convergence of multiple digital platforms and social media has transformed shopping for the modern B2C customer. In order to drive greater sales and win over customers, a seamless experience across multiple channels is necessary. The modern shopper could be shopping from a laptop, an app on a mobile phone, searching for products via Alexa or browsing options at a kiosk.  Cnetric specializes in integrations that connect your multiple systems, driving greater value at every stage and ensuring a delightful, universal customer experience anytime on any device."
                />
                {/* <Box>
                <Link to="/contact">
                  <Button {...button} title="Learn More" />
                </Link>
              </Box> */}
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={drcimg} alt="Info Image One" />
                {/* <h4>Irvine, California</h4>
              <Text
                {...description}
                content="Based out of Irvine, California, Cnetric Global Inc., has 15 offices in as many countries. Our global presence and commitment towards localization, ensures that clients get consistent, market appropriate solutions, in the shortest turnaround time. "
              /> */}
              </Fade>
            </Box>
          </Box>
        </Container>
        {/* <Box {...secTitleWrapper}>
        <Fade bottom cascade>
          <Text {...secText} content="Lorem" />
          <Heading
            {...secHeading}
            content="Lorem ipsum"
          />
        </Fade>
      </Box> */}
        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea} className="info_order_change">
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Leap Ahead of The Pack"
                />
                <Text
                  {...description}
                  content="The digital commerce space is highly competitive and more players enter the space every year/all the time. Keeping one step ahead of the competition and meeting increasing customer expectations is a challenge to say the least. Provide an extraordinary customer experience with the services of the Cnetric team who are experts in B2C eCommerce solutions. We can help you remove roadblocks, incorporate missing integrations, and provide contextual analytics to master the ever-important customer journey."
                />
                {/* <Box>
                <Link to="/contact">
                  <Button {...button} title="Learn More" />
                </Link>
              </Box> */}
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={drcimg} alt="Info Image One" />
                {/* <h4>Irvine, California</h4>
              <Text
                {...description}
                content="Based out of Irvine, California, Cnetric Global Inc., has 15 offices in as many countries. Our global presence and commitment towards localization, ensures that clients get consistent, market appropriate solutions, in the shortest turnaround time. "
              /> */}
              </Fade>
            </Box>
          </Box>
        </Container>

        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="The Evolving Landscape"
                />
                <Text
                  {...description}
                  content="Digital experience is more important than ever but the landscape is constantly evolving and growing. Traditional CMSs can no longer support the growing number of devices and the large variety of platforms you have to present on. Centric’s deep expertise is headless commerce will remove the restraints from your marketing team and empower them to deliver a truly extraordinary digital experience anywhere for a seamless omnichannel experience."
                />
                {/* <Box style={{ marginBottom: '33px' }}>
                <Link to="/contact">
                  <Button {...button} title="Learn More" />
                </Link>
              </Box> */}
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={univcoming} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
        </Container>

        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea} className="info_order_change">
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Automation, AI & Big Data"
                />
                <Text
                  {...description}
                  content="We have entered the era of big data and it is ever-growing and increasingly unstructured. The challenge large eCommerce business face is how to handle these mountains of data and reap value from them. No need to worry because Cnetric can help you tame your siloed data and use the power of AI and automation to help define the context and deliver a personalized customer experience. Leveraging AI and automation will help you gain control and insight from the big data generated by your business."
                />
                {/* <Box style={{ marginBottom: '33px' }}>
                <Link to="/contact">
                  <Button {...button} title="Learn More" />
                </Link>
              </Box> */}
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={univcoming} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
        </Container>
      </div>
      {/* end of b2c */}
      <div className="multi_sections_container B2b_info_container">

        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea} >
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="The Modern B2B Customer"
                />
                <Text
                  {...description}
                  content="The B2B buyer’s journey has also gone through a profound transformation due to technological advances. As a result, B2B shoppers also expect relevant information that is conveniently accessible with smooth user experiences. Search results, content, conversations, and customer service must hit the mark every time across channels. The good news is Cnetric can connect your multiple systems and combine your siloed data to add value at every stage, accelerating integrations for a seamless, omnichannel experience."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={drcimg} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
        </Container>

        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea} className="info_order_change">
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Headless Commerce"
                />
                <Text
                  {...description}
                  content="Headless simply means decoupling your backend systems from your customer-facing presentation layer. This enables a nimble stance so you can rapidly deploy updates without impacting the back end system. Similarly, alter your front end with the latest consumer technology, so you can present your product and services on any device and various platforms with different requirements. This helps you stay competitive by adapting and catering to customer expectations faster. As experts in APIs and middleware, Cnetric can upgrade your infrastructure for a headless model that empowers you to be exceptional everywhere, across omnichannels."
                />
  
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={drcimg} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
        </Container>

        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Influence and Social Proof"
                />
                <Text
                  {...description}
                  content="In the not too distant past a good sales rep could influence a prospect to your product or service, but we have entered a new era where influencers and social media credibility are more likely to sway a prospects mind. Forums, comparison sites, customer reviews, and testimonials are becoming increasingly relevant. Cnetric’s accomplished customer service team can help you harness the influence of social proof and overcome any social influence hurdles. This will help you drive greater sales and conversions for more revenue."
                />

              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={univcoming} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
        </Container>

        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea} className="info_order_change">
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Big Data and AIAutomation, AI & Big Data"
                />
                <Text
                  {...description}
                  content="Dealing with customers online means weeding through a lot of data to find the diamond in the rough. In the age of big data, there’s a real danger of losing prospects in the many steps to a sales. Cnetric can help you reap value from big data using the power of AI to connect your systems and  analyze, manage, and respond to complex situations to maximize conversion rates. You’ll be able to provide tailored approaches for various types of buyers through the insights from AI and big data for higher conversions and sales."
                />
 
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={univcoming} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
        </Container>
      </div>
      {/* end of b2b */}
      <div className="multi_sections_container automation_ai_info_container">

        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea} >
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="AI & ML for eCommerce"
                />
                <Text
                  {...description}
                  content="eCommerce has been revolutionized by a multitude of technological advancements. AI and Machine Learning can be leveraged across your entire eCommerce ecosystem to improve your inventory, service, personalization and modes of shopping. All of this improves customer experience and increases conversions. Cnetric can help you harness the power of AI and ML to drive greater sales through an improved eCommerce ecosystem."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={drcimg} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
        </Container>

        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea} className="info_order_change">
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Personalized Shopping"
                />
                <Text
                  {...description}
                  content="Online shopping has introduced increasing levels of an element that is guaranteed to win over customers – personalization. Everyone loves a personal touch that suits their interests. With AI and ML, you can monitor and record consumer behavior and patterns based on their browsing and purchase history. The advantage of this technology is that it continues to learn and improve over time. Cnetric can integrate AI into your eCommerce platform’s DNA so it can transform into an intelligent suggestion machine that delivers a personalized, seamless shopping experience."
                />
  
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={drcimg} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
        </Container>

        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Give a Voice to Your Digital Experience"
                />
                <Text
                  {...description}
                  content="The world has seen a major technological shift towards voice user interfaces. Siri and Alexa are becoming mainstream with millennials and other demographics. Ecommerce has embraced this change to enhance consumer experience – shopping via voice. Have you incorporated voice support for your eCommerce platform?"
                />

              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={univcoming} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
        </Container>

        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea} className="info_order_change">
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Inventory Management and Fulfillment"
                />
                <Text
                  {...description}
                  content="Supply chain operations can be extremely cumbersome when handled manually. Machine Learning is exactly what you need for to make easy work of this. Managing inventory, shipments and forecasting of demand and supply chain can be accomplished swiftly and accurately with the aid of Cnetric’s machine learning technology. Upgrade your inventory management to eliminate the typical hassles and errors of a purely manual approach."
                />
 
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={univcoming} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
        </Container>
        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Fraud Prevention"
                />
                <Text
                  {...description}
                  content="Cybercrime is growing at an alarming rate and every eCommerce business needs to safeguard against it, particularly in the form of fraud prevention. The complex process of digital fraud detection and visual pattern recognition is a breeze with the aid of AI and ML capabilities. It’s in your business’s best interest to leverage AI and ML to protect yourself and your customers from rampant cybercrime."
                />
 
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={univcoming} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
        </Container>
        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea} className="info_order_change">
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Retargeting Potential Customers"
                />
                <Text
                  {...description}
                  content="eCommerce businesses are suffering from the problem of lost leads and this means lost revenue. One-third of marketing leads are not followed up and thousands are shopping carts are abandoned every day. To complicate matters businesses are overloaded with unmanageable volumes of customer data. Cnetric can help you leverage AI to monitor and record customer behavior as they browse your site, tracking their interaction. These insights can be used to retarget customers with relevant offers that suit their interests to maximize conversions."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={univcoming} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
        </Container>
      </div>
      {/* end of automation and ai */}
    </Box>
  );
};

InfoSolutionSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
  imageAreaRow: PropTypes.object,
  imageWrapper: PropTypes.object,
  imageWrapperOne: PropTypes.object,
  imageWrapperTwo: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  secTitleWrapper: PropTypes.object,
};

InfoSolutionSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['0px', '0px', '0px', '0px', '80px'],
    pb: ['60px', '80px', '40px', '80px', '80px'],
    id: 'info_section',
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
    ml: '-15px',
    mr: '-15px',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '100%', '49%', '49%'],
  },
  imageArea: {
    width: ['100%', '100%', '50%'],
    flexBox: true,
    flexDirection: 'row-reverse',
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  imageWrapperOne: {
    ml: '-200px',
  },
  imageWrapperTwo: {
    alignSelf: 'flex-end',
    mb: '-60px',
  },
  title: {
    fontSize: ['30px', '38px', '38px', '48px', '48px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px',
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
  },
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
};

export default InfoSolutionSection;
