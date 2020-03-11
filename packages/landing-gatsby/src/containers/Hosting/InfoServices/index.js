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
          <div className="empty_space30" />
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
                <div className="empty_space30" />
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
              <div className="empty_space30" />
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
                <div className="empty_space30" />
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
              <div className="empty_space30" />
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
                  className="intro_text_container"
                  content="Cnetric’s specialized ecommerce consultants hold extensive experience with regard to ecommerce strategy, integrations, migrations and support. We make use of advanced tools and technologies to provide data-driven, innovative, focused and strategic solutions to handle every challenge faced by your ecommerce ecosystem. We provide customized and result-oriented solutions in every aspect of ecommerce from increasing traffic and conversions, enhancing customer experience, retargeting customers, streamlining operational activities, etc."
                />
              </Fade>
            </Box>
          </Box>
          <IconParticleSection />
          <div className="empty_space20" />
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
                <div className="empty_space30" />
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
              <div className="empty_space30" />
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
            <div className="empty_space30" />
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
                  className="intro_text_container"
                  content="Is your company looking to become more agile, more flexible, and increase the velocity of your development efforts? Microservices as an architectural design can meet these demands. Some companies no longer believe that the traditional monoliths are able to keep pace with changes in the market but this isn't always true. For some companies, a monolithic architecture is the best way to run their ecosystem but others can benefit greatly from a serverless microservice and mesh architecture. Cnetric has expertise in helping companies implement microservices for a multitude of advantages."
                />
              </Fade>
            </Box>
          </Box>
          <IconParticleSection />
          <div className="empty_space20" />
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
            <div className="empty_space30" />
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
          <div className="empty_space30" />
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
            <div className="empty_space30" />
          </Container>
        </Box>
      </div>
      {/* end of Microservice Mesh */}
      <div className="multi_sections_container Ibm_redhat_info_container">
        <Container>
          <Box>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="Foster Innovation & Flexibility"
                />
                <Text
                  {...description}
                  className="intro_text_container"
                  content="IBM and Red Hat are the best of two worlds. By combining the power and flexibility of Red Hat open hybrid cloud technologies with the scale and depth of IBM innovation and industry expertise, you now have access to the tools and talent you need to accelerate your cloud journey. Cnetric has been an IBM partner since its creation and our team has some of the deepest talent sets in the market so look no further for your Cloud Transformation."
                />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
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
                    content="Private Cloud, Public Cloud, Multi-Cloud, or Hybrid Cloud"
                  />
                  <Text
                    {...description}
                    content="Enterprise has slowly learned that the cloud is an increasingly complex environment to manage. IBM with the purchase of Red Hat is trying to simplify the complexities of cloud infrastructure regardless of how your company wants to run it. They are helping to simplify the IT environments across every aspect such as platform, containers, Linux, middleware. data and AI making everything less brittle. Cnetric is an expert in cloud transformation and helps simplify your implementation."
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
            <div className="empty_space30" />
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
                  content="Red Hat OpenShift Container Storage"
                />
                <Text
                  {...description}
                  content="This enterprise-ready Kubernetes platform is the right choice for implementing grand ideas. Cnetric can help your team shift from VMs to containers with some amazing benefits like faster time to market, lower cost, greater resource utilization, and rapid iteration cycles. Cnetric would be glad to help you being your containerized future to boost your eCommerce system."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={shifttowardsImg} alt="Shift towards Open Source" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
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
                    content="A Cloud That Works for You"
                  />
                  <Text
                    {...description}
                    content="Cnetric can help you design a cloud suite that works the way you work. Whether it is a private, public, multi, or hybrid cloud with tightly integrated Red Hat technologies for cloud infrastructure, cloud-native apps, we can orchestrate deployment across hybrid IT environments."
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
            <div className="empty_space30" />
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
                  content="Middleware and Runtimes"
                />
                <Text
                  {...description}
                  content="Middleware and Runtimes
                  Cnetric being a middleware specialist can accelerate application development and delivery with Red Hat runtimes. This set of products, tools, and components can be used for developing and maintaining cloud-native applications. This offers lightweight runtimes and frameworks for microservices."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={shifttowardsImg} alt="Shift towards Open Source" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
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
                    content="Living on the Edge"
                  />
                  <Text
                    {...description}
                    content="Edge computing is more important than ever with an explosion of IoT devices, virtual machines, AI/ML workloads in microservices architectures, and much more. Edge computing is an integral part of Red Hat’s open hybrid cloud strategy. It extends the goal of providing a consistent experience and works with any cloud architecture."
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
            <div className="empty_space30" />
          </Container>
        </Box>
          
        
      </div>
      {/* end of IBM Redhat */}
      <div className="multi_sections_container Core_media_info_container">
        <Container>
          <Box>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="Core Media Overview"
                />
                <Text
                  {...description}
                  className="intro_text_container"
                  content="CoreMedia provides the content experience platform for some of the biggest brands in the world, from major media and entertainment companies to manufacturing, top retailers and eCommerce companies. The Cnetric team has a deep understanding of this intuitive, advanced content management platform and will help your team to collaboratively create, preview, and optimize iconic brand experiences."
                />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
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
                    content="Headless Plus Content Management"
                  />
                  <Text
                    {...description}
                    content="CoreMedia's headless content management provides a big advantage with its easy-to-use APIs and quick access to content for any channel. You can combine this with CoreMedia Studio UI empowering marketers to preview all changes in-place and in-context and re-use it across channels."
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
            <div className="empty_space30" />
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
                  content="CoreMedia Content Cloud"
                />
                <Text
                  {...description}
                  content="The CoreMedia Content Cloud is an API-led approach that enables your brand to deliver highly personalized customer experiences to any digital channel. This system is more advanced than a CMS and more flexible than a closed DXP. If you are looking for agility and best-of-breed Content Management solution then CoreMedia is your choice."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={shifttowardsImg} alt="Shift towards Open Source" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
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
                    content="Omnichannel Made Easy"
                  />
                  <Text
                    {...description}
                    content="True omnichannel capability is being able to create your content once and then easily re-use it across all your channels. Preview all channel variations in CoreMedia Studio. You can make variations as necessary for specific channels and localize the content as needed. Their smart content allows you to separate copy text from images which makes it easy to translate and localize your sites and campaigns."
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
            <div className="empty_space30" />
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
                  content="Personalize Your Customer's Experience"
                />
                <Text
                  {...description}
                  content="Omnichannel is hard to achieve without personalization and CoreMedia makes highly relevant personalized experiences simple. Provide the right content at the right time in the right language and design. Simulate customer experiences based on identity, region, device, language, browsing history and more. Integrate data from all available sources including eCommerce, Marketing and CRM tools."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={shifttowardsImg} alt="Shift towards Open Source" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
        </Container>
      </div>
      {/* end of Core Media */}
      <div className="multi_sections_container Elastic_path_info_container">
        <Container>
          <Box style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="Drive Engagement & Customer Experience with Elastic Path"
                />
                <Text
                  {...description}
                  className="intro_text_container"
                  content="Elastic Path has APIs architecture in its DNA and is a favorite of ecommerce companies that want to deliver the best digital experiences. This approach gives you the freedom to design a unique and engaging customer journey and experiences on any desired channel that will boost you past your competition."
                />
                <div className="empty_space10" />
                <Text
                  {...description}
                  className="intro_text_container"
                  content="The Cnetric team has  deep understanding of the EP commerce solution and can help launch your new platform in weeks not months. We would be more than happy to show you how you can leverage EP’s capabilities to your advantage."
                />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
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
                    content="Elastic Path Pioneers in Headless Architecture"
                  />
                  <Text
                    {...description}
                    content="The age of traditional CMS structures is slowly coming to a standstill vacating space for the innovative and faster decoupled and headless solutions. Elastic Path, with its headless architecture, has capabilities to drive content distribution to any device or channel with internet access such as wearables, social media, kiosks, virtual and augmented reality, voice assistants, etc. This is key to a consistent omnichannel experience for prospects and customers."
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
            <div className="empty_space30" />
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
                  content="Easy-To-Use Business User Tooling"
                />
                <Text
                  {...description}
                  content="Maximize the monetization with robust business user tooling that caters to all your requirements. It  provides all the necessary commerce functions like robust product catalog, complex pricing, dynamic bundles, intelligent search, promotions, gateway, and taxes. Make simple work of these tasks and focus on your core business."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={shifttowardsImg} alt="Shift towards Open Source" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
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
                    content="Enterprise Solution for Any Situation"
                  />
                  <Text
                    {...description}
                    content="Companies are looking for extensible, flexible, and scalable enterprise commerce solutions to transform every customer interaction, across B2C, B2B, B2B2C, and B2B2B use cases, into unique and engaging digital commerce experiences. The Elastic Path commerce platform provides secure, enterprise-grade deployment options across multi-tenant SaaS, single-tenant SaaS, private cloud, and on-premise. So whatever your requirements, it can be tailored to fit them."
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
            <div className="empty_space30" />
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
                  content="Library of Pre-built and Turnkey Commerce Experiences"
                />
                <Text
                  {...description}
                  content="Launch new revenue channels on-demand using a comprehensive library of ready-to-use commerce experiences. This library cuts short any delay in capitalizing omnichannel possibilities for sales. This includes multiple website experiences, a progressive web application (PWA), Alexa Voice Assistant, Facebook chatbot, social login, self-checkout for retail stores, Zendesk customer service, magic mirror, Augmented Reality, self-checkout for pop-up events, IoT, embeddable cart and checkout buy button, and more."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={shifttowardsImg} alt="Shift towards Open Source" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
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
                    content="Choreographed Microservices"
                  />
                  <Text
                    {...description}
                    content="Deliver digital experiences that are fully tailored to business requirements with a very flexible headless microservices architecture that can be consumed modularly. Combined with Elastic Path’s Cortex API Orchestration layer, Elastic Path provides businesses with the agility and control needed to deliver fit-for-purpose experiences across any digital channel."
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
            <div className="empty_space30" />
          </Container>
        </Box>

      </div>
      {/* end of Elastic path */}
      <div className="multi_sections_container Analytics_insight_info_container">
        <Container>
          <Box style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="Big Data Analytics for Greater Sales"
                />
                <Text
                  {...description}
                  className="intro_text_container"
                  content="Studies show that many organizations only analyze about 12% of their data, leaving a huge volume of their data untapped.  Cnetric leverages leading Big Data analytics to help you harness these huge volumes of data residing in your enterprise, generated by customer and prospect interactions with your brand. We help you turn this data into actionable insights that drive more targeted marketing efforts, better customer service and uncover new revenue opportunities. Visualization with drill-down capabilities drives better decision-making so you can tailor your efforts to win customers and increase conversions."
                />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
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
                    content="Measure, Understand and Then Act"
                  />
                  <Text
                    {...description}
                    content="Whilst the use cases and datasets vary, all of our capabilities revolve around a core theme – we correlate information from multiple sources allowing you to better understand the impact of decisions and changes. Our suite of analytics tools give you the insight you need to make clear decisions based on facts."
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
            <div className="empty_space30" />
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
                  content="Make Critical Decisions Based On Hard Data"
                />
                <Text
                  {...description}
                  content="Planning, forecasting, and anticipating future demand are tasks traditionally done via spreadsheets. But what if a predictive model could be used to simulate the impact of price changes, market competition, or even disruptive technologies? Leveraging historical customer data can provide accurate forecasts to make more successful decisions and drive sales."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={shifttowardsImg} alt="Shift towards Open Source" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
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
                    content="Success through Insight"
                  />
                  <Text
                    {...description}
                    content="If your organization excels in storing data, but suffers from understanding it, our big data practice can help – using cost effective and powerful tools to help you make sense of the data at hand. Whether planning marketing campaigns, looking to understand resource requirements, or seeking to further understand customer buying behaviors, our big data team can help you draw conclusions and make sense of the noise."
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
            <div className="empty_space30" />
          </Container>
        </Box>
      </div>
      {/* end of Analytics insight */}
      <div className="multi_sections_container FiveG_info_container">
        <Container>
          <Box style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="Rise of Mobile Commerce"
                />
                <Text
                  {...description}
                  className="intro_text_container"
                  content="There has been a huge increase in mobile commerce and research shows that 70% of all internet traffic hails from mobile devices. Brands are optimizing their ecommerce sites for mobile devices for an intuitive, seamless experience. With the introduction of 5G, loading times for mobile devices will be much faster than 4G, meaning that users can find and buy in mere seconds. According to some estimates, 5G will drive ecommerce revenue to $12 billion. Organizations must leverage 5G technology to make their mobile websites faster to drive greater sales and conversions. Cnetric’s expertise can help you with your 5G transition."
                />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
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
                    content="Boosting Virtual Reality (VR) and Augmented Reality (AR)"
                  />
                  <Text
                    {...description}
                    content="VR and AR markets will grow massively with the advent of 5G technology. Ultra-smooth VR and AR experiences will be possible and eliminate the need for customers to visit stores to get a feel for products. This is set to revolutionize sales with VR and AR markets estimated to be $80 billion by 2025. Drive sales and thrill customers with 5G-powered experiences across multiple touch points."
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
            <div className="empty_space30" />
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
                  content="Advancement in Artificial Intelligence (AI) Technology "
                />
                <Text
                  {...description}
                  content="AI-powered customer service tools such as chatbots and virtual personal assistants are gaining popularity due to speedy resolution of customer queries. Delayed responses are detrimental to customer facing business units, resulting in poor customer experiences, heightened customer churn and decreased ROI. Hence, with elevated speed of 5G, there is a considerable reduction in these issues, boosting customer experience with providing solutions at record speed."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={shifttowardsImg} alt="Shift towards Open Source" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
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
                    content="Enhanced Efficiency in Internet of Things (IoT)"
                  />
                  <Text
                    {...description}
                    content="With 5G in operation, data sharing over connected devices such as wearables, smart home devices, smart cars, etc. will be effortless. Consumers can purchase online through any device of their choosing with convenient sales support. Customer experience will reach new heights with 5G-enabled inter-connected devices."
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
            <div className="empty_space30" />
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
                  content="Turn the Dream of Autonomous Vehicles into Reality"
                />
                <Text
                  {...description}
                  content="With the advancement in machine learning and AI, autonomous vehicles are becoming reality. Self-driving cars, comprising hundreds of sensors, make use of huge amounts of data to run autonomously. Processing such volumes of data requires faster networks to function at the level of human reflexes. With 5G’s incredible network speed, autonomous vehicles can analyze information and operate at an optimum level on the roads. 5G will cause these vehicles to be safe and reliable."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={shifttowardsImg} alt="Shift towards Open Source" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
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
                    content="Revolution in Marketing & Advertising"
                  />
                  <Text
                    {...description}
                    content="With super-fast 5G networks in place, high-end screens for ad placements will cause a stir in the media world. 5G coupled with Augmented Reality technologies will open up new marketing channels for marketers and advertisers for product placement. Mobile marketing will be geared towards voice conversations with the power of 5G."
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
            <div className="empty_space30" />
          </Container>
        </Box>
      </div>
      {/* end of 5g */}
      <div className="multi_sections_container Dr_Commerce_info_container">
        <Container>
          <Box style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="Personalized Care for Your eCommerce System"
                />
                <Text
                  {...description}
                  className="intro_text_container"
                  content="You want to be at the top of the eCommerce game, but maybe your platform isn’t up to speed. Count on Dr. Commerce to heal your e-commerce woes and prescribe the latest digital innovation that supercharges your eCommerce technology increasing engagement, reducing churn and uncovering hidden insights. Our personalized expertise is tailored to optimize, modernize and maximize your eCommerce ecosystem."
                />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box
              {...row}
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading {...title} content="Business Health Check" />
                  <Text
                    {...description}
                    content="Are you meeting your online business Key Performance Indicators (KPIs)? And even if you are, is your competition growing faster and grabbing more market share?  Engage Cnetric's Dr. Commerce to review your current online history and ailing KPIs. Using worldwide industry best practices, Dr. Commerce will then prescribe remedies to quickly improve your success. Once your immediate business ailments have been addressed, we recommend coming back for a broader Business Strategy Review to look at how you can reach your peak omnichannel performance."
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
          <div className="empty_space30" />
        </Box>

        <Container>
          <Box
            {...row}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading {...title} content="Technical Health Check" />
                <Text
                  {...description}
                  content="If your site is currently experiencing any technical errors or outages, we need to take care of those first. Not only are those technical issues holding you back from realizing your current storefront's potential, but they would also inhibit any changes from improving your overall success as well.  Engage Cnetric's Dr. Commerce to review your error logs to look for time outs, lost connections, and slow responses. Dr. Commerce's technical team can then prescribe improvements to configuration, tuning, and customizations to eliminate the technical issues."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={shifttowardsImg} alt="Shift towards Open Source" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box
              {...row}
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading {...title} content="Business Strategy Review" />
                  <Text
                    {...description}
                    content="Now let's look at the bigger picture. How effective is your Omni-Channel Customer Experience? From acquisition to conversion to retention, are you able to find, convert, and create loyal customers?  Are customers using your multiple available touchpoints in ways that inform, educate, and inspire them to make a purchase?  Engage Cnetric's Dr. Commerce to examine your industry, competition, and desired KPI's and to collaborate on an industry-leading omnichannel business strategy."
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
          <div className="empty_space30" />
        </Box>

        <Container>
          <Box
            {...row}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading {...title} content="Continuous Business Monitoring" />
                <Text
                  {...description}
                  content="Rome wasn't built in a day, and neither will your ideal omnichannel customer journey. Plus your competition isn't standing still and customer needs and expectations change over time.  Engage Cnetric's Dr. Commerce to regularly review your progress towards your targeted omnichannel customer experience and see if any changes in strategy are required based on opportunities and threats in your environment."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={shifttowardsImg} alt="Shift towards Open Source" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
        </Container>
      </div>
      {/* end of Dr. Commerce */}
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
                  className="intro_text_container"
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
          <div className="empty_space20" />
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
            <div className="empty_space30" />
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
          <div className="empty_space30" />
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
