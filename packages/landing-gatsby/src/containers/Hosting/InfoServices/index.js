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

import drcimg from 'common/src/assets/image/hosting/Home/drc.svg';
import univcoming from 'common/src/assets/image/hosting/Home/uc.svg';
import illusting from 'common/src/assets/image/hosting/Home/illustration.svg';
import { Link } from 'gatsby';
import IconParticleSection from '../IconTextParticle';

import greatervalueImg from 'common/src/assets/image/hosting/Pages/Cloud Transformation/Greater Value at Lower Costs.svg';
import riseedgeImg from 'common/src/assets/image/hosting/Pages/Cloud Transformation/Rise of Edge Computing.svg';
import shifttowardsImg from 'common/src/assets/image/hosting/Pages/Cloud Transformation/Shift towards Open Source.svg';
import transformImg from 'common/src/assets/image/hosting/Pages/Cloud Transformation/Transform to Serverless Microservices.svg';

import frictionlessshipping from 'common/src/assets/image/hosting/Pages/Social Commerce/Frictionless Shopping.svg';
import chatbots from 'common/src/assets/image/hosting/Pages/Social Commerce/Chatbots are Driving Social Commerce.svg';
import risingsales from 'common/src/assets/image/hosting/Pages/Social Commerce/Rising Sales from Social Commerce.svg';

import './infoservices.css';

const InfoServiceSection = ({
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
  box_size,
}) => {
  return (
    <Box {...sectionWrapper} id="info_services">
      <div className="multi_sections_container CloudTransformation_info_container">
        <Container>
          <Box style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="Cloud Technology for eCommerce"
                />
                <Text
                  {...description}
                  content="eCommerce businesses are leveraging cloud technology and edge computing for massive benefits across their entire eCommerce ecosystem. Cnetric has the expertise and skills to integrate cloud technology and connect all your systems for a seamless, robust eCommerce system that can adapt to changes in demand with minimal infrastructure costs."
                />
              </Fade>
            </Box>
          </Box>
          <IconParticleSection />
          <br />
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box
              {...row}
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading {...title} content="Greater Value at Lower Costs" />
                  <Text
                    {...description}
                    content="Cloud infrastructure provides the value of the latest technology with minimal implementation and maintenance costs. Shift to cloud technology with Cnetric’s expertise and services for  greater cost efficiency & zero downtime. Purchase and its maintenance of equipment are things of the past with cloud-enabled system. This has very tangible benefits such as lower rack space, IT requirements, power consumption, risk of internal outages and the complexity of housing the network."
                  />
                </Fade>
              </Box>
              <Box
                {...col}
                {...textArea}
                className="InfoBanner_Image_container"
              >
                <Fade bottom cascade>
                  <Image
                    src={greatervalueImg}
                    alt="Greater Value at Lower Costs"
                  />
                </Fade>
              </Box>
            </Box>
          </Container>
        </Box>

        <Container>
          <Box
            {...row}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading {...title} content="Shift towards Open Source" />
                <Text
                  {...description}
                  content="Make your eCommerce business lean and agile by shifting to open source. Embracing open source provides a  competitive edge in terms of cost efficiency and speed to market. You might wonder where to start in shifting your systems to an open source cloud architecture. Cnetric’s specialized expertise in open-source DevOps tools and infrastructure platforms can help transform your systems to open source on the cloud."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={shifttowardsImg} alt="Shift towards Open Source" />
              </Fade>
            </Box>
          </Box>
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box
              {...row}
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading {...title} content="Rise of Edge Computing" />
                  <Text
                    {...description}
                    content="Edge computing is the perfect solution for global companies that require instant access to data and computing resources to satisfy customer’s expectations. The edge is exactly what it sounds like, distributed cloud architecture that directs processes away from centralized data centers and closer to the devices worldwide. The paradigm shift to edge computing is essential for IOT, as it is required to collect and process big data in real-time and the edge delivers low latency. Bring the power of edge computing to your eCommerce ecosystem with Cnetric’s services and expertise."
                  />
                </Fade>
              </Box>
              <Box
                {...col}
                {...textArea}
                className="InfoBanner_Image_container"
              >
                <Fade bottom cascade>
                  <Image src={riseedgeImg} alt="Rise of Edge Computing" />
                </Fade>
              </Box>
            </Box>
          </Container>
        </Box>

        <Container>
          <Box
            {...row}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Transform to Serverless Microservices"
                />
                <Text
                  {...description}
                  content="In an attempt to digital transformation, businesses are shifting from monolithic applications to nimble cloud-based microservices. Break your monolithic system into discrete microservices that run in containers with Cnetric’s expertise. This gives your business increased flexibility at both speed and scale. As scale increases, orchestration between the containers becomes complicated. Our microservice mesh and expertise can help you manage hundreds or thousands of containers with ease by mediating requests inside the cloud infrastructure with the various environment-conscious components."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image
                  src={transformImg}
                  alt="Transform to Serverless Microservices"
                />
              </Fade>
            </Box>
          </Box>
        </Container>
      </div>
      {/* end of Cloud Transformation */}

      <div className="multi_sections_container Strategy_roadmap_info_container">
        <Container>
          <Box style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="Solve Problems with Cnetric’s Expertise"
                />
                <Text
                  {...description}
                  content="Cnetric’s specialized ecommerce consultants hold extensive experience with regard to ecommerce strategy, integrations, migrations and support. We make use of advanced tools and technologies to provide data-driven, innovative, focused and strategic solutions to handle every challenge faced by your ecommerce ecosystem. We provide customized and result-oriented solutions in every aspect of ecommerce from increasing traffic and conversions, enhancing customer experience, retargeting customers, streamlining operational activities, etc."
                />
              </Fade>
            </Box>
          </Box>
          <IconParticleSection />
          <br />
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box
              {...row}
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    content="Customers Success Is Our Top Priority"
                  />
                  <Text
                    {...description}
                    content="Our focused approach is designed to understand and fulfill clients. Our dedicated team of account managers, project managers and consultants work tirelessly to deliver exceptional results."
                  />
                </Fade>
              </Box>
              <Box
                {...col}
                {...textArea}
                className="InfoBanner_Image_container"
              >
                <Fade bottom cascade>
                  <Image
                    src={greatervalueImg}
                    alt="Greater Value at Lower Costs"
                  />
                </Fade>
              </Box>
            </Box>
          </Container>
        </Box>

        <Container>
          <Box
            {...row}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading {...title} content="Why Customers Like What We Do?" />
                <ul className="list_style_disc">
                  <li>
                    Capabilities to integrate migrate and support third-party
                    applications with eCommerce platforms.
                  </li>
                  <li>
                    Lean & agile eCommerce solutions including mobile eCommerce
                    capabilities.
                  </li>
                  <li>
                    Robust cross-functional team of in-house experts to deliver
                    solutions with empathy and transparency.
                  </li>
                  <li>
                    Proven track record of successful implementations of
                    strategies for improving traffic, conversions, purchase
                    completions, retargeting, etc.
                  </li>
                </ul>
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={shifttowardsImg} alt="Shift towards Open Source" />
              </Fade>
            </Box>
          </Box>
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Box>
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    className="text_center"
                    content="Related Digital Strategy Services"
                  />
                  <Box {...box_size} className="boxFill">
                    <Link to="solutions/omnichannel">
                      <Button {...button} title="Omnichannel Strategy" />
                    </Link>
                    <Link to="solutions/analytics-insights">
                      <Button {...button} title="Analytics & Insights" />
                    </Link>
                    <Link to="solutions/conversation-ai">
                      <Button {...button} title="Conversation AI" />
                    </Link>
                    <Link to="solutions/5g">
                      <Button {...button} title="5G" />
                    </Link>
                    <Link to="solutions/microservices-mesh">
                      <Button {...button} title="Microservices & Mesh" />
                    </Link>
                  </Box>
                </Fade>
              </Box>
            </Box>
            <IconParticleSection />
            <br />
          </Container>
        </Box>
      </div>
      {/* end of Strategy Roadmap */}

      <div className="multi_sections_container Microservice_mesh_info_container">
        <Container>
          <Box style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="A New Age of Microservice & Mesh"
                />
                <Text
                  {...description}
                  content="Is your company looking to become more agile, more flexible, and increase the velocity of your development efforts? Microservices as an architectural design can meet these demands. Some companies no longer believe that the traditional monoliths are able to keep pace with changes in the market but this isn't always true. For some companies, a monolithic architecture is the best way to run their ecosystem but others can benefit greatly from a serverless microservice and mesh architecture. Cnetric has expertise in helping companies implement microservices for a multitude of advantages."
                />
              </Fade>
            </Box>
          </Box>
          <IconParticleSection />
          <br />
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box
              {...row}
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    content="What is Monolithic Architecture?"
                  />
                  <Text
                    {...description}
                    content="A monolith is an application that utilizes a single codebase architecture and is the traditional model for designing and developing software. It can communicate internally, maintain application state, and take advantage of shared libraries. They are highly logical, and easier to maintain. At deployment time, the entire codebase is deployed, and scaling can be difficult and they can lock you into a narrow set of technologies. So adaptability and upgrades are not that easy with monolithic architecture."
                  />
                </Fade>
              </Box>
              <Box
                {...col}
                {...textArea}
                className="InfoBanner_Image_container"
              >
                <Fade bottom cascade>
                  <Image
                    src={greatervalueImg}
                    alt="Greater Value at Lower Costs"
                  />
                </Fade>
              </Box>
            </Box>
          </Container>
        </Box>

        <Container>
          <Box
            {...row}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="What is Microservices Architecture?"
                />
                <Text
                  {...description}
                  content="Microservices has a new kind of flexibility within your applications. They are loosely coupled services that are typically lightweight, highly modular, self-contained, and technology agnostic. They can be independently deployable, highly scalable with a single focus on a business goal. Microservices tie in well with a headless model allowing swift upgrades and enabling companies to harness new technology swiftly. Cnetric has expertise in both headless models of eCommerce and microservices."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={shifttowardsImg} alt="Shift towards Open Source" />
              </Fade>
            </Box>
          </Box>
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box
              {...row}
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    content="Mesh is the Orchestration Layer"
                  />
                  <Text
                    {...description}
                    content="Microservices can multiply quickly and soon they may become uncontrollable simply due to the numbers. Having so many moving pieces complicates nearly every part of the stack and every part of the software development lifecycle. So a good orchestration layer also known as the Mesh is immensely important. A service mesh is a way to control how different parts of an application share data with one another. It is a dedicated infrastructure layer built right into an app. This visible infrastructure layer can document how well different parts of an app interact, so it becomes easier to optimize communication and avoid downtime as an app grows. Cnetric’s experience with microservices and mesh can help you leverage the power of microservices."
                  />
                </Fade>
              </Box>
              <Box
                {...col}
                {...textArea}
                className="InfoBanner_Image_container"
              >
                <Fade bottom cascade>
                  <Image
                    src={greatervalueImg}
                    alt="Greater Value at Lower Costs"
                  />
                </Fade>
              </Box>
            </Box>
          </Container>
        </Box>
      </div>
      {/* end of Strategy Roadmap */}
      <div className="multi_sections_container technology_info_container">
        <Container>
          <Box>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="Intro Heading"
                />
                <Text
                  {...description}
                  content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
                <br />
              </Fade>
            </Box>
          </Box>
        </Container>
      </div>
      {/* end of technology */}

      <div className="multi_sections_container social_commerce_info_container">
        <Container>
          <Box>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="Rising Sales from Social Commerce"
                />
                <Text
                  {...description}
                  className="text_center intro_text_container"
                  content="With AI/ML integrated social commerce technology, businesses are revolutionizing social shopping experience, enhancing customer engagement with your brand within social networks such as Instagram, Facebook, TikTok, etc.  Cnetric can help you leverage the right tools and technology to drive greater sales through social commerce."
                />
                <br />
              </Fade>
            </Box>
          </Box>
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box
              {...row}
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading {...title} content="Frictionless Shopping" />
                  <Text
                    {...description}
                    content="Businesses should embrace the fact that simplicity is the Holy Grail to achieving greater sales and revenue. With innumerable options available today, customers have the power to switch brands easily. Too many steps are often a factor in this decision. With social commerce businesses can reduce the steps in the funnel and provide a seamless, hassle-free experience that entices customers."
                  />
                </Fade>
              </Box>
              <Box
                {...col}
                {...textArea}
                className="InfoBanner_Image_container"
              >
                <Fade bottom cascade>
                  <Image
                    src={frictionlessshipping}
                    alt="Frictionless Shopping"
                  />
                </Fade>
              </Box>
            </Box>
          </Container>
        </Box>

        <Container>
          <Box
            {...row}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Chatbots are Driving Social Commerce"
                />
                <Text
                  {...description}
                  content="You need the right tools to drive sales via social commerce and chatbots AI-powered chatbots are perfect for the job. Many customers prefer to communicate with your brand via chat. Potential shoppers are inspired when they see the latest fashion or a cool new gadget and with the social proof of user-generated content they are typically ready to move to purchase. Cnetric can help your brand create bots that have defined the purpose of helping the shopper complete the sale within their social platform."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image
                  src={chatbots}
                  alt="Chatbots are Driving Social Commerce"
                />
              </Fade>
            </Box>
          </Box>
        </Container>
      </div>
      {/* end of Social Commerce */}
    </Box>
  );
};

InfoServiceSection.propTypes = {
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
  box_size: PropTypes.object,
};

InfoServiceSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    // pt: ['25px', '25px', '25px', '30px', '30px'],
    // pb: ['60px', '80px', '40px', '80px', '80px'],
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
    fontSize: ['30px', '30px', '35px', '40px', '45px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '25px',
    pt: '25px',
  },
  description: {
    fontSize: ['16px', '18px', '18px', '18px', '18px'],
    // color: '#343d48cc',
    color: '#252525',
    lineHeight: '1.5',
    mb: '15px',
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
  box_size: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
};

export default InfoServiceSection;
