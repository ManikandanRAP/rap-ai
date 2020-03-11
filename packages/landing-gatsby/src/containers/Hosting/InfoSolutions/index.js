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

import headlessCommImg1 from 'common/src/assets/image/hosting/Pages/Headless Commerce/An Eye on 5G.svg';
import headlessCommImg2 from 'common/src/assets/image/hosting/Pages/Headless Commerce/Faster Time to Market.svg';
import headlessCommImg3 from 'common/src/assets/image/hosting/Pages/Headless Commerce/Omnichannel Reach.svg';
import headlessCommImg4 from 'common/src/assets/image/hosting/Pages/Headless Commerce/Customization, Personalization & Flexibility.svg';
import headlessCommImg5 from 'common/src/assets/image/hosting/Pages/Headless Commerce/An Eye on 5G.svg';
import headlessCommImg6 from 'common/src/assets/image/hosting/Pages/Headless Commerce/Social Commerce.svg';

import B2BImage1 from 'common/src/assets/image/hosting/Pages/B2B/The Modern B2B Customer.svg';
import B2BImage2 from 'common/src/assets/image/hosting/Pages/B2B/Headless Commerce.svg';
import B2BImage3 from 'common/src/assets/image/hosting/Pages/B2B/Influence and Social Proof.svg';
import B2BImage4 from 'common/src/assets/image/hosting/Pages/B2B/Big Data and AI.svg';

import B2CImage1 from 'common/src/assets/image/hosting/Pages/B2C/Leap Ahead of The Pack.svg';
import B2CImage2 from 'common/src/assets/image/hosting/Pages/B2C/The Evolving Landscape.svg';
import B2CImage3 from 'common/src/assets/image/hosting/Pages/B2C/Automation, AI & Big Data.svg';

import AiMlImg from 'common/src/assets/image/hosting/Pages/AI ML/Personalized Shopping.svg';
import AIMLImage1 from 'common/src/assets/image/hosting/Pages/AI ML/Personalized Shopping.svg';
import AIMLImage2 from 'common/src/assets/image/hosting/Pages/AI ML/Give a Voice to Your Digital Experience.svg';
import AIMLImage3 from 'common/src/assets/image/hosting/Pages/AI ML/Inventory Management and Fulfillment.svg';
import AIMLImage4 from 'common/src/assets/image/hosting/Pages/AI ML/Fraud Prevention.svg';
import AIMLImage5 from 'common/src/assets/image/hosting/Pages/AI ML/Retargeting Potential Customers.svg';

import OmnichannelImage1 from 'common/src/assets/image/hosting/Pages/Omnichannel/Groundbreaking Possibilities with AI.svg';
import OmnichannelImage2 from 'common/src/assets/image/hosting/Pages/Omnichannel/Driving Emotional Connection.svg';
import OmnichannelImage3 from 'common/src/assets/image/hosting/Pages/Omnichannel/Seamless Online-Offline Transitions.svg';
import OmnichannelImage4 from 'common/src/assets/image/hosting/Pages/Omnichannel/Decoupled Architecture.svg';

import OrderImage1 from 'common/src/assets/image/hosting/Pages/OrderManagement/Our Solutions Omnichannel Order Management.svg';
import OrderImage2 from 'common/src/assets/image/hosting/Pages/OrderManagement/Order Management.svg';
import OrderImage3 from 'common/src/assets/image/hosting/Pages/OrderManagement/Our Capabilities.svg';
import ourpartners from 'common/src/assets/image/hosting/Pages/OrderManagement/partnersimg.png';

import DigitalImage1 from 'common/src/assets/image/hosting/Pages/Digital Experience & CX/Full Spectrum of Digital Experience.svg';
import DigitalImage2 from 'common/src/assets/image/hosting/Pages/Digital Experience & CX/Facets of State-Of-The-Art DX.svg';

import IotImage1 from 'common/src/assets/image/hosting/Pages/IOT and Blockchain/Deregulation.svg';
import IotImage2 from 'common/src/assets/image/hosting/Pages/IOT and Blockchain/Privacy.svg';
import IotImage3 from 'common/src/assets/image/hosting/Pages/IOT and Blockchain/Efficiency.svg';
import IotImage4 from 'common/src/assets/image/hosting/Pages/IOT and Blockchain/Streamlined Operations.svg';
import IotImage5 from 'common/src/assets/image/hosting/Pages/IOT and Blockchain/Better Inventory Management.svg';
import IotImage6 from 'common/src/assets/image/hosting/Pages/IOT and Blockchain/Automation of Warehousing.svg';
import IotImage7 from 'common/src/assets/image/hosting/Pages/IOT and Blockchain/Smooth Operations in Supply Chain.svg';

import './infosolutions.css';

const InfoSolutionSection = ({
  sectionWrapper,
  row,
  col,
  col1,
  col2,
  title,
  subtitle,
  centertext,
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
          <Box>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="The Modern B2C Customer"
                />
                <Text
                  {...description}
                  className="text_center intro_text_container"
                  content="The convergence of multiple digital platforms and social media has transformed shopping for the modern B2C customer. In order to drive greater sales and win over customers, a seamless experience across multiple channels is necessary. The modern shopper could be shopping from a laptop, an app on a mobile phone, searching for products via Alexa or browsing options at a kiosk.  Cnetric specializes in integrations that connect your multiple systems, driving greater value at every stage and ensuring a delightful, universal customer experience anytime on any device."
                />
                {/* <Box>
                <Link to="/contact">
                  <Button {...button} title="Learn More" />
                </Link>
              </Box> */}
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
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
        <Box className="section_background_color">
          <Container>
            <Box
              {...row}
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading {...title} content="Leap Ahead of The Pack" />
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
                  <Image src={B2CImage1} alt="Leap Ahead of The Pack" />
                  {/* <h4>Irvine, California</h4>
              <Text
                {...description}
                content="Based out of Irvine, California, Cnetric Global Inc., has 15 offices in as many countries. Our global presence and commitment towards localization, ensures that clients get consistent, market appropriate solutions, in the shortest turnaround time. "
              /> */}
                </Fade>
              </Box>
            </Box>
            <div className="empty_space25" />
          </Container>
        </Box>

        <Container>
          <Box
            {...row}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading {...title} content="The Evolving Landscape" />
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
                <Image src={B2CImage2} alt="The Evolving Landscape" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space25" />
        </Container>
        <Box className="section_background_color">
          <Container>
            <Box
              {...row}
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading {...title} content="Automation, AI & Big Data" />
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
                  <Image src={B2CImage3} alt="Automation, AI & Big Data" />
                </Fade>
              </Box>
            </Box>
            <div className="empty_space25" />
          </Container>
        </Box>
      </div>
      {/* end of b2c */}
      <div className="multi_sections_container B2b_info_container">
        <Container>
          <Heading
            {...title}
            className="text_center"
            content="The Modern B2B Customer"
          />
          <Box>
            <Box>
              <Fade bottom cascade>
                <Text
                  {...description}
                  className="intro_text_container"
                  content="The B2B buyer’s journey has also gone through a profound transformation due to technological advances. As a result, B2B shoppers also expect relevant information that is conveniently accessible with smooth user experiences. Search results, content, conversations, and customer service must hit the mark every time across channels. The good news is Cnetric can connect your multiple systems and combine your siloed data to add value at every stage, accelerating integrations for a seamless, omnichannel experience."
                />
              </Fade>
            </Box>
            <br />
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
                  <Heading {...title} content="Headless Commerce" />
                  <Text
                    {...description}
                    content="Headless simply means decoupling your backend systems from your customer-facing presentation layer. This enables a nimble stance so you can rapidly deploy updates without impacting the back end system. Similarly, alter your front end with the latest consumer technology, so you can present your product and services on any device and various platforms with different requirements. This helps you stay competitive by adapting and catering to customer expectations faster. As experts in APIs and middleware, Cnetric can upgrade your infrastructure for a headless model that empowers you to be exceptional everywhere, across omnichannels."
                  />
                </Fade>
              </Box>
              <Box {...col} {...textArea} className="Solutions_Image_container">
                <Fade bottom cascade>
                  <Image src={B2BImage2} alt="Headless Commerce" />
                </Fade>
              </Box>
            </Box>
            <div className="empty_space25" />
          </Container>
        </Box>

        <Container>
          <Box
            {...row}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading {...title} content="Influence and Social Proof" />
                <Text
                  {...description}
                  content="In the not too distant past a good sales rep could influence a prospect to your product or service, but we have entered a new era where influencers and social media credibility are more likely to sway a prospects mind. Forums, comparison sites, customer reviews, and testimonials are becoming increasingly relevant. Cnetric’s accomplished customer service team can help you harness the influence of social proof and overcome any social influence hurdles. This will help you drive greater sales and conversions for more revenue."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={B2BImage3} alt="Influence and Social Proof" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space25" />
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
                    content="Big Data and AI Automation, AI & Big Data"
                  />
                  <Text
                    {...description}
                    content="Dealing with customers online means weeding through a lot of data to find the diamond in the rough. In the age of big data, there’s a real danger of losing prospects in the many steps to a sales. Cnetric can help you reap value from big data using the power of AI to connect your systems and  analyze, manage, and respond to complex situations to maximize conversion rates. You’ll be able to provide tailored approaches for various types of buyers through the insights from AI and big data for higher conversions and sales."
                  />
                </Fade>
              </Box>
              <Box {...col} {...textArea} className="Solutions_Image_container">
                <Fade bottom cascade>
                  <Image
                    src={B2BImage4}
                    alt="Big Data and AIAutomation, AI & Big Data"
                  />
                </Fade>
              </Box>
            </Box>
            <div className="empty_space25" />
          </Container>
        </Box>
      </div>
      {/* end of b2b */}
      <div className="multi_sections_container automation_ai_info_container">
        <Container>
          <Box>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="Automation & AI for eCommerce"
                />
                <Text
                  {...description}
                  className="intro_text_container"
                  content="eCommerce has been revolutionized by a multitude of technological advancements. AI and Machine Learning can be leveraged across your entire eCommerce ecosystem to improve your inventory, service, personalization and modes of shopping. All of this improves customer experience and increases conversions. Cnetric can help you harness the power of AI and ML to drive greater sales through an improved eCommerce ecosystem."
                />
                <br />
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
                  <Heading {...title} content="Personalized Shopping" />
                  <Text
                    {...description}
                    content="Online shopping has introduced increasing levels of an element that is guaranteed to win over customers – personalization. Everyone loves a personal touch that suits their interests. With AI and ML, you can monitor and record consumer behavior and patterns based on their browsing and purchase history. The advantage of this technology is that it continues to learn and improve over time. Cnetric can integrate AI into your eCommerce platform’s DNA so it can transform into an intelligent suggestion machine that delivers a personalized, seamless shopping experience."
                  />
                </Fade>
              </Box>
              <Box {...col} {...textArea} className="Solutions_Image_container">
                <Fade bottom cascade>
                  <Image src={AIMLImage1} alt="Personalized Shopping" />
                </Fade>
              </Box>
            </Box>
          </Container>
          <div className="empty_space25" />
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
                <Image
                  src={AIMLImage2}
                  alt="Give a Voice to Your Digital Experience"
                />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space25" />
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
                  <Image
                    src={AIMLImage3}
                    alt="Inventory Management and Fulfillment"
                  />
                </Fade>
              </Box>
            </Box>
            <div className="empty_space25" />
          </Container>
        </Box>

        <Container>
          <Box
            {...row}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading {...title} content="Fraud Prevention" />
                <Text
                  {...description}
                  content="Cybercrime is growing at an alarming rate and every eCommerce business needs to safeguard against it, particularly in the form of fraud prevention. The complex process of digital fraud detection and visual pattern recognition is a breeze with the aid of AI and ML capabilities. It’s in your business’s best interest to leverage AI and ML to protect yourself and your customers from rampant cybercrime."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={AIMLImage4} alt="Fraud Prevention" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space25" />
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
                  <Image
                    src={AIMLImage5}
                    alt="Retargeting Potential Customers"
                  />
                </Fade>
              </Box>
            </Box>
            <div className="empty_space25" />
          </Container>
        </Box>
      </div>
      {/* end of automation and ai */}
      <div className="multi_sections_container omnichannel_info_container">
        <Container>
          <Box>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="A Good Omnichannel Strategy Is Essential To Good Commerce"
                />
                <Text
                  className="text_center intro_text_container"
                  {...description}
                  content="An omnichannel eCommerce strategy is one of the most powerful ways to drive brand loyalty and turn loyal customers into advocates.  Cnetric, with several years of expertise, can provide seamless integration of innumerable customer touch points to drive a smooth customer journey across all channels. This includes both brick and mortar and eCommerce sores with a seamless experience across email, social media, smartwatches, voice search, etc."
                />
                <br />
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
                    content="Groundbreaking Possibilities with AI"
                  />
                  <Text
                    {...description}
                    content="With an emphasis on customer-centricity, businesses are leveraging the power of Artificial Intelligence (AI) to win over customers with highly personalized services. Consumers, particularly younger demographics and millennials, don’t just want fast websites they want quality information, they want you to know their preference, give them relevant recommendations and all of it in milliseconds. That is why AI is so important to your omnichannel strategy and Cnetric has unparalleled expertise to deliver. We can access all your siloed data and set up an AI engine that can power your personalization and omnichannel strategy."
                  />
                </Fade>
              </Box>
              <Box {...col} {...textArea} className="Solutions_Image_container">
                <Fade bottom cascade>
                  <Image
                    src={OmnichannelImage1}
                    alt="Groundbreaking Possibilities with AI"
                  />
                </Fade>
              </Box>
            </Box>
            <div className="empty_space25" />
          </Container>
        </Box>

        <Container>
          <Box
            {...row}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading {...title} content="Driving Emotional Connection" />
                <Text
                  {...description}
                  content="Creating a positive emotional connection with your customers helps brands drive sales, loyalty, and advocacy. With the power of Artificial Intelligence (AI) and Machine Learning (ML), businesses are serving customers in an emotionally intelligent way to achieve these goals. Cnetric’s experts can replace your legacy technology and empower your business with integrated, hyper-personalized, lean, AI-enabled machine learning with cutting-edge integrations. This reduces the friction between your brand and customers for a unique, seamless omnichannel experience built around your brand.  "
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image
                  src={OmnichannelImage2}
                  alt="Driving Emotional Connection"
                />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space25" />
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
                    content="Seamless Online-Offline Transitions"
                  />
                  <Text
                    {...description}
                    content="Today’s customers expect a seamless transition between online and offline shopping. Offering accurate and on-the-spot product information and placing orders on online or offline channels, even when products are out-of-stock in either channel, requires efficient technologies to drive a seamless omnichannel experience. Cnetric has the expertise to integrate your online and offline channels to bestow a superior, omnichannel customer experience."
                  />
                </Fade>
              </Box>
              <Box {...col} {...textArea} className="Solutions_Image_container">
                <Fade bottom cascade>
                  <Image
                    src={OmnichannelImage3}
                    alt="Seamless Online-Offline Transitions"
                  />
                </Fade>
              </Box>
            </Box>
            <div className="empty_space25" />
          </Container>
        </Box>

        <Container>
          <Box
            {...row}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading {...title} content="Decoupled Architecture" />
                <Text
                  {...description}
                  content="With continuous explosion of channels, businesses need to tap this opportunity to effortlessly manage all the available customers’ touchpoints. This entails various devices and platforms such as desktop, mobile, tablet, Facebook, Instagram, Snapchat, TikTok, Twitter, wearables, voice search, kiosk, IOT, AI-driven bots, and so on. With monolithic architecture in place this is practically impossible. The Cnetric team can decouple your backend from your presentation layer, for a headless system, allowing your marketing team tackle each platform and device separately without any restraints."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={OmnichannelImage4} alt="Decoupled Architecture" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space25" />
        </Container>
      </div>
      {/* end of omnichannel */}
      <div className="multi_sections_container headless_commerce_info_container">
        <Container>
          <Box>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="What is Headless eCommerce?"
                />
                <Text
                  {...description}
                  className="intro_text_container"
                  content="A headless ecommerce system is the decoupling of your presentation layer (the website) from your backend (the technology that drives your website). Whereas a traditional system is monolithic meaning the body and head are attached. The shift to headless is a powerful catalyst for a nimble business that can drive greater sales."
                />
                <br />
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
                  <Heading {...title} content="Faster Time to Market" />
                  <Text
                    {...description}
                    content="Since the monolithic approach has multiple constraints any modification requires developers to edit the code, database, business logic, and the frontend as well. This is stressful, time-consuming and places your business at risk for mistakes. Decoupling reduces complexity, and both your frontend and backend teams can work simultaneously while independent of each other."
                  />
                </Fade>
              </Box>
              <Box {...col} {...textArea} className="Solutions_Image_container">
                <Fade bottom cascade>
                  <Image src={headlessCommImg2} alt="Info Image One" />
                </Fade>
              </Box>
            </Box>
            <div className="empty_space25" />
          </Container>
        </Box>

        <Container>
          <Box
            {...row}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading {...title} content="Omnichannel Reach" />
                <Text
                  {...description}
                  content="When you remove the restraints from your developers and marketers you are empowering your team to deliver extraordinary digital experience. For an omnichannel experience, you need a seamless presentation on multiple screen sizes (smartwatch, mobile, tablet, laptop, desktop, and kiosk). Not to mention all the new channels like IOT, voice assistants, wearables, AR/VR, AI Bots, Social Commerce and any new channels that tomorrow brings."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={headlessCommImg3} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space25" />
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
                    content="Customization, Personalization & Flexibility"
                  />
                  <Text
                    {...description}
                    content="Going headless allows brands to experiment and create custom experiences for different personas or A/B tests with variants in typography and design. You can have endless flexibility and customization options only limited by your imagination. Besides, being API-driven the headless commerce platform is able to quickly adjust to the latest innovations in technologies."
                  />
                </Fade>
              </Box>
              <Box {...col} {...textArea} className="Solutions_Image_container">
                <Fade bottom cascade>
                  <Image src={headlessCommImg4} alt="Info Image One" />
                </Fade>
              </Box>
            </Box>
            <div className="empty_space25" />
          </Container>
        </Box>

        <Container>
          <Box
            {...row}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading {...title} content="An Eye on 5G" />
                <Text
                  {...description}
                  content="Have you considered how 5G will impact your eCommerce business? 5G will be 100x faster than 4G and this will have a massive effect on how mobile devices consume data. Many modern shoppers love to shop from their mobile devices, so your business must adapt to 5G. With exponentially higher speed, increased capacity, and low latency new channels will emerge or grow like with AR/VR and IOT. Cnetric has the expertise to help you transform your eCommerce business to a headless system, so you can thrive in the era of 5G."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={headlessCommImg5} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space25" />
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box
              {...row}
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading {...title} content="Social Commerce" />
                  <Text
                    {...description}
                    content="Social commerce is your company's ability to sell its products directly within social media platforms. This is a hot trend and growing by leaps and bounds. But there are a large number of social platforms and each one has its unique difficulty to present your products there. The headless commerce architecture will support your enterprise’s efforts to sell directly within social sites."
                  />
                </Fade>
              </Box>
              <Box {...col} {...textArea} className="Solutions_Image_container">
                <Fade bottom cascade>
                  <Image src={headlessCommImg6} alt="Info Image One" />
                </Fade>
              </Box>
            </Box>
            <div className="empty_space25" />
          </Container>
        </Box>
      </div>
      {/* end of headless Commerce */}
      <div className="multi_sections_container marketing_info_container">
        <Container>
          <Box>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="Importance of AI in Marketing Performance"
                />
                <Text
                  {...description}
                  className="intro_text_container"
                  content="In a changing business landscape and the market exploding with innumerable digital technologies, organizations are leveraging AI-powered marketing instruments to stay competitive. AI-enabled marketing technologies are smart, intuitive and intelligent and have the capability to attract and retain potential customers, who interact with the business across a multitude of touch points. Cnetric can help you leverage their impressive functionalities, in order to heighten your marketing performance exponentially for greater customer satisfaction and loyalty in the long run."
                />
                <br />
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
                  <Heading {...title} content="Digital Marketing" />
                  <Text
                    {...description}
                    content="Leverage digital marketing technologies with interactive and user-friendly functionalities that can revolutionize customers’ interactions and fulfillment with brands. Capabilities such as Omni-channel campaigns, drag-and-drop program design, AI-powered CMS and marketing assistance, audience segmentation and interactive reporting are some of the ways to offer tailor-made customer experiences and content across various channels. Cnetric can help you leverage the tools that best suit your particular eCommerce marketing requirements."
                  />
                </Fade>
              </Box>
              <Box {...col} {...textArea} className="Solutions_Image_container">
                <Fade bottom cascade>
                  <Image src={headlessCommImg2} alt="Info Image One" />
                </Fade>
              </Box>
            </Box>
            <div className="empty_space25" />
          </Container>
        </Box>

        <Container>
          <Box
            {...row}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading {...title} content="Personalization" />
                <Text
                  {...description}
                  content="With AI-powered, cloud-based and centralized content management system, consistency with regards to brand experience is maintained across all touch-points. Appropriate AI-based recommendations with hyper-personalization and real-time responses to sessions of greater magnitude are game changers in creating tailored customers’ experiences with every interactions. Drive greater personalization with Cnetric’s aid in utilizing AI-driven technology that gets to know your customers."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={headlessCommImg3} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space25" />
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box
              {...row}
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading {...title} content="Mobile Marketing" />
                  <Text
                    {...description}
                    content="Magnify engagement and conversions with Cnetric’s aid in leveraging AI-powered mobile marketing solutions. With advanced capabilities such as multichannel marketing, mobile push messaging, optimized SMS and group chat, mobile analytics, location-based marketing and AI-powered content management, prospects are inclined to opt into SMS program and more call-backs, leading to higher conversions."
                  />
                </Fade>
              </Box>
              <Box {...col} {...textArea} className="Solutions_Image_container">
                <Fade bottom cascade>
                  <Image src={headlessCommImg4} alt="Info Image One" />
                </Fade>
              </Box>
            </Box>
            <div className="empty_space25" />
          </Container>
        </Box>

        <Container>
          <Box
            {...row}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading {...title} content="Pricing & Promotions" />
                <Text
                  {...description}
                  content="With AI capabilities, quantifying consumer behavior leads to better pricing and marketing decisions and predictive merchandising, boosting sales and profitability in the process. With automation, pricing strategy and optimization can be accomplished precisely with haste. Profit and inventory levels can be optimized with easy detection of ideal timing and pricing for clearance merchandise. Trade promotion and deal management are streamlined with extended and automated features customized for manufacturers and brokers respectively."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={headlessCommImg5} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space25" />
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box
              {...row}
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading {...title} content="Marketing Automation" />
                  <Text
                    {...description}
                    content="With AI-powered, multi-channel marketing automation platform in place, lead management becomes smooth-sailing. Cnetric will help you leverage the best-fit platform that provides myriad capabilities such as CRM integrations, advanced scoring models, AI-enabled content management and marketing assistance and enhanced visibility of campaigns with specialized dashboards. This means you can send relevant and tailored messages that ensure increased open rates, conversions and loyalty."
                  />
                </Fade>
              </Box>
              <Box {...col} {...textArea} className="Solutions_Image_container">
                <Fade bottom cascade>
                  <Image src={headlessCommImg6} alt="Info Image One" />
                </Fade>
              </Box>
            </Box>
            <div className="empty_space25" />
          </Container>
        </Box>
      </div>
      {/* end of Marketing */}
      <div className="multi_sections_container experience_analytics_info_container">
        <Container>
          <Box>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="Personalization and Big Data Analytics"
                />
                <Text
                  {...description}
                  className="intro_text_container"
                  content="Understanding every customer’s buying behavior and providing them with personalized services is every organization’s dream come true. This personal touch is possible thanks to advancements in AI and analytics that enable hyper-personalization. Smart marketers are focusing on connected customer experiences rather than fragmented discounts and other offers. Hyper-personalization brings in value-added encounters so every customer feels that they are served with relevant, tailored offerings. Leverage Cnetric’s expertise in harnessing the power of your big data through the latest analytics. Doing so drives greater success and sales through insight from big data."
                />
                <br />
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
                  <Heading {...title} content="Big Data & AI" />
                  <Text
                    {...description}
                    content="In today’s era of big data, Artificial Intelligence (AI) is a promising weapon which marketers are leveraging to drive and engage customers. Surveys show that despite the awareness of the importance of AI, only 84% of marketers are leveraging AI as many firms are uncertain how to leverage this technology. Cnetric can help you harness the power of this technology and glean insights you’re your big data. This drives better customer interaction with your brand across touch points, which in turn increases sales."
                  />
                </Fade>
              </Box>
              <Box {...col} {...textArea} className="Solutions_Image_container">
                <Fade bottom cascade>
                  <Image src={headlessCommImg2} alt="Info Image One" />
                </Fade>
              </Box>
            </Box>
            <div className="empty_space25" />
          </Container>
        </Box>

        <Container>
          <Box
            {...row}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading {...title} content="Hyper-Personalization" />
                <Text
                  {...description}
                  content="Make your customers feel understood by creating meaningful experiences on all channels across the customer journey. Hyper personalization based on AI and big data analytics makes this personalized approach a reality. AI can help can you make sense of the tons of data generated by customers and gather meaningful insights by automating systems and analyzing customer behavior. Cnetric can help you leverage AI and your data, so your marketers can understand customers’ motivations to provide tailored recommendations that enhance engagement, increase conversions and drive sales with greater customer loyalty."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={headlessCommImg3} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space25" />
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
                    content="Right Offer, Right Place, Right Time"
                  />
                  <Text
                    {...description}
                    content="In order to drive sales, you need the trifecta of factors to win customers over. To create focused hyper-personalization and provide carefully picked and sorted offers at the right time and place, organizations must cater to meaningful and specific interactions across all the touch-points across the enterprise. They must also scrutinize customer data across all systems and keep tabs on ever-changing consumer behaviors while protecting their privacy. Cnetric has extensive experience helping eCommerce organizations leverage their data for greater success."
                  />
                </Fade>
              </Box>
              <Box {...col} {...textArea} className="Solutions_Image_container">
                <Fade bottom cascade>
                  <Image src={headlessCommImg4} alt="Info Image One" />
                </Fade>
              </Box>
            </Box>
            <div className="empty_space25" />
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
                  content="Uncovering Patterns of Customer Behavior"
                />
                <Text
                  {...description}
                  content="Organizations must implement various analytical tools and techniques to appropriately gauge customers’ life cycle that begins with discovery and ends with engagement. With the massive volumes of data being generated by customers and prospects interacting with your brand, it is impossible to uncover such patterns and take advantage of them by purely manual methods. Cnetric can help you utilize analytics technology that transform data into meaningful insights that are actionable, precise, and timely with a strong focus on sustained profitability and customer metrics."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={headlessCommImg5} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space25" />
        </Container>
        <Box className="section_background_color">
          <Container>
            <Box>
              <Box>
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    className="text_center"
                    content="Our Partner"
                  />
                  <Text
                    {...description}
                    className="intro_text_container"
                    content="Cnetric is proud to engage in active partnership with Acoustic, an end-to-end customer experience analytical firm, providing enhanced clarity over the entire customer journey with experience across a multitude of channels."
                  />
                  <br />
                  <Text
                    {...description}
                    className="intro_text_container"
                    content="Acoustic Experience Analytics (Tealeaf), Acoustic Exchange, Acoustic Campaign and Acoustic Analytics are some of their tools to measure customers’ all-round interactions and gain in-depth insights to augment customers’ experience."
                  />
                  <br />
                </Fade>
              </Box>
            </Box>
            <div className="empty_space30" />
          </Container>
        </Box>
      </div>
      {/* end of Experience Analytics */}
      <div className="multi_sections_container digital_experience_info_container">
        <Container>
          <Box>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  style={{ marginBottom: '10px' }}
                  className="text_center"
                  content="Digital Experience (DX)  & Customer Experience (CX) For Greater Sales"
                />
                {/* <Text
                  {...subtitle}
                  className="text_center"
                  style={{ fontWeight: '17px' }}
                  content="For Greater Sales"
                /> */}
                <Text
                  {...description}
                  className="intro_text_container"
                  content="A positive customer experience can make or break an eCommerce business in today’s customer-centric world. Over 53% of customers abandon their shopping if they have to wait 3 seconds or more. As you can see the bar is high for pleasing today’s online customers. This is where a technologically-optimized digital experience (DX) and customer experience (CX) plays a substantial role in delighting customers to build sustained engagement and loyalty."
                />
                <Text
                  {...description}
                  className="intro_text_container"
                  content="You must bridge the silos of your web site, mobile app, offline and backend systems and you must think of DX strategy as being a significant piece of your customer experience (CX) strategy. Cnetric’s services, solutions and expertise can help your organization truly standout from the pack through seamless, omnichannel, thoughtful customer experience."
                />
                <br />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box>
              <Box className="info_order_change">
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    {...centertext}
                    content="Full Spectrum of Digital Experience"
                  />
                </Fade>
              </Box>
              <Box className="Solutions_Image_container">
                <Fade bottom cascade>
                  <Image
                    src={DigitalImage1}
                    alt="Full Spectrum of Digital Experience"
                    style={{ maxWidth: '600px', objectFit: 'contain' }}
                  />
                </Fade>
                <br />
              </Box>
            </Box>
            <div className="empty_space25" />
          </Container>
        </Box>

        <Container>
          <Box
            {...row}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading {...title} content="Facets of State-Of-The-Art DX" />
                <ul className="list_style_disc">
                  <li>
                    Harmony among different applications in the area of
                    marketing, commerce, sales and service forms the elementary
                    interface between your customers and your company.
                  </li>
                  <li>
                    Personalization based on tracking user behavior and
                    interactions with you brand, so you can provide intelligent
                    suggestions that suit their preference.
                  </li>
                  <li>
                    Your eCommerce platform should have flexible capabilities
                    and APIs to develop and maintain flawless data integration
                    to provide a seamless digital experience.
                  </li>
                  <li>
                    Ensure that your customers data stays private and protected
                    while they engage with your brand across multiple channels
                    and devices.
                  </li>
                  <li>
                    eCommerce platforms with great digital experience must also
                    utilize analytical tools with Machine Learning and
                    Artificial Intelligence capabilities to track and measure
                    consumer behavior and parameters of success.
                  </li>
                </ul>
              </Fade>
              <br />
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image
                  src={DigitalImage2}
                  alt="Facets of State-Of-The-Art DX"
                  style={{ maxWidth: '780px' }}
                />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space25" />
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box
              {...row}
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <br />
                  <Heading
                    {...title}
                    className="text_center"
                    content="Advantages of Great Digital Experience"
                  />
                </Fade>
              </Box>
            </Box>
            <IconParticleSection />
            <br />
            <div className="empty_space25" />
          </Container>
        </Box>
      </div>
      {/* end of Digital Experience */}
      <div className="multi_sections_container iot_blockchain_info_container">
        <Container>
          <Box>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="IoT and Blockchain are Taking World by Storm"
                />
                <Text
                  {...description}
                  className="intro_text_container"
                  content="Traditionally, transactions in ecommerce have several drawbacks when conducted via electronic payment system, where banks or financial institutions act as a third-party. With disruptive technological breakthroughs, an advanced model of eCommerce is being introduced that bypasses third-parties to conduct peer-to-peer transactions employing Blockchain technology. Blockchain technology was primarily utilized in the financial sector and its gradual entry into the ecommerce sector is going to disrupt the marketplace with decentralization. Cnetric has the expertise to leverage disruptive IoT and Blockchain for a robust, future-proof ecommerce business."
                />
                <br />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
        </Container>

        <Box>
          <Container>
            <Box>
              <Box>
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    {...centertext}
                    content="Advantages of Blockchain"
                  />
                </Fade>
              </Box>
            </Box>
            <div className="empty_space25" />
          </Container>
        </Box>

        <Container>
          <Box
            {...row}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading {...title} content="Deregulation" />
                <Text
                  {...description}
                  content="As Blockchain is beyond the control of any central authority, only buyers and sellers are involved its operations. The transactions carried out through Blockchain technology cannot be controlled by government, banks or any other third parties as it is beyond the purview of geopolitics."
                />
              </Fade>
              <br />
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={IotImage1} alt="Deregulation" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space25" />
        </Container>
        <Box className="section_background_color">
          <Container>
            <Box
              {...row}
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading {...title} content="Privacy" />
                  <Text
                    {...description}
                    content="The security and the identity of the transacting parties are kept absolutely anonymous with regards to blockchain-based crypto currencies. This is one of the safest means of transactions as it is impossible to hack into the system – this prevents any data breaches. Despite its cryptic nature, it is quite transparent as a centralized system that provides better visibility."
                  />
                </Fade>
                <br />
              </Box>
              <Box {...col} {...textArea} className="Solutions_Image_container">
                <Fade bottom cascade>
                  <Image src={IotImage2} alt="Privacy" />
                </Fade>
              </Box>
            </Box>
            <div className="empty_space25" />
          </Container>
        </Box>

        <Container>
          <Box
            {...row}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading {...title} content="Efficiency" />
                <Text
                  {...description}
                  content="Blockchain-based currencies are easy to operate without the need to physically present to open an account and can be done at absolutely free of cost. Bitcoin transactions can be accomplished in minutes unlike traditional transfers at any point of time. This is extremely convenient for shoppers who can skip the hassle of account creation."
                />
              </Fade>
              <br />
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={IotImage3} alt="Efficiency" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space25" />
        </Container>
        <Box className="section_background_color">
          <Container>
            <Box
              {...row}
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading {...title} content="Streamlined Operations" />
                  <Text
                    {...description}
                    content="Implementation of blockchain technology in ecommerce business can solve several problems such as products tracking, recordkeeping, administrative cost reduction and inventory management. Transparency in the ecommerce marketplace achieved through Blockchain technology ensures frictionless transactions."
                  />
                </Fade>
                <br />
              </Box>
              <Box {...col} {...textArea} className="Solutions_Image_container">
                <Fade bottom cascade>
                  <Image src={IotImage4} alt="Streamlined Operations" />
                </Fade>
              </Box>
            </Box>
            <div className="empty_space25" />
          </Container>
        </Box>

        <Box>
          <Container>
            <Box>
              <Box>
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    {...centertext}
                    content="Advantages of IoT"
                  />
                </Fade>
              </Box>
            </Box>
            <div className="empty_space25" />
          </Container>
        </Box>

        <Container>
          <Box
            {...row}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading {...title} content="Better Inventory Management" />
                <Text
                  {...description}
                  content="Experience improved and error-free monitoring and tracking of inventories with IoT sensors and RFID tags. Smart shelves can be introduced to track the out-of-stock products and replace with stocks automatically. Leverage IoT to build strong inventory management that serves as the foundation for rapid order fulfillment."
                />
              </Fade>
              <br />
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={IotImage5} alt="Better Inventory Management" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space25" />
        </Container>
        <Box className="section_background_color">
          <Container>
            <Box
              {...row}
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading {...title} content="Automation of Warehousing" />
                  <Text
                    {...description}
                    content="In addition to reporting shortage of products, IoT also helps in tracking over-the-stock warehouse items. Temperature-sensitive sensors are employed to track the optimum temperature for perishable products and eliminate them accordingly, as and when required. A multitude of monitoring tasks can be automated with this technology."
                  />
                </Fade>
                <br />
              </Box>
              <Box {...col} {...textArea} className="Solutions_Image_container">
                <Fade bottom cascade>
                  <Image src={IotImage6} alt="Automation of Warehousing" />
                </Fade>
              </Box>
            </Box>
            <div className="empty_space25" />
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
                  content="Smooth Operations in Supply Chain"
                />
                <Text
                  {...description}
                  content="With RFID and GPS technology it is easy to track products in transit.  You can also accurately detect location, temperature, arrival timings etc.  The pace and route of the shipped products can be automated to prevent loss of shipments and mitigate any potential delays. This leads to faster fulfillment of customer orders."
                />
              </Fade>
              <br />
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image
                  src={IotImage7}
                  alt="Smooth Operations in Supply Chain"
                />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space25" />
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
                    className="text_center"
                    content="Business Benefits"
                  />
                </Fade>
              </Box>
            </Box>
            <IconParticleSection />
            <br />
            <div className="empty_space25" />
          </Container>
        </Box>
      </div>
      {/* end of iot and blockchain */}
      <div className="multi_sections_container order_management_info_container">
        <Container>
          <Box>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="Order Management System Intricacies in Today’s World"
                />
                <Text
                  {...description}
                  className="intro_text_container"
                  content="Retailers and manufacturers worldwide find it challenging to demystify the complexities in the order management systems and fulfillment processes. It is a system of people, processes, and suppliers where everyone should sync together for a delightful customer experience. To avoid bottlenecks and meet customer demand, a flexible omnichannel order management system is essential. Cnetric’s expertise in order management system solutions can retain customers’ trust and loyalty for long-term success."
                />
                <br />
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
              <Box {...col} {...textArea}>
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    content="Our Solutions: Omnichannel Order Management"
                  />
                  <Text
                    {...description}
                    content="In an omnichannel world, eCommerce businesses need omnichannel order management to thrive and keep customers coming back for more. Modern customers have a buy-now, buy-fast and buy-from-anywhere & anytime outlook. They expect faster order fulfillment and convenient returns with enhanced flexibility. Cnetric’s solutions and services for omnichannel order management streamlines your processes that initiates with ordering and ends with goods delivery and return, if necessary."
                  />
                </Fade>
              </Box>
              <Box {...col} {...textArea} className="Solutions_Image_container">
                <Fade bottom cascade>
                  <Image
                    src={OrderImage1}
                    alt="Our Solutions: Omnichannel Order Management"
                  />
                </Fade>
              </Box>
            </Box>
            <IconParticleSection />
            <br />
            <div className="empty_space25" />
          </Container>
        </Box>

        <Container>
          <Box>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="End-to-End Order Management Solutions"
                />
                <Text
                  {...description}
                  className="text_center"
                  content="Cnetric provides industry-leading services and solutions for end-to-end order management across omnichannels."
                />
              </Fade>
            </Box>
            <Box className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image
                  src={OrderImage2}
                  alt="End-to-End Order Management Solutions"
                  style={{ maxWidth: '780px' }}
                />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space25" />
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
                    content="Our Capabilities"
                    className="padding_bottom_5"
                  />
                  <Text
                    {...description}
                    className=""
                    content="Experience End-to-End Excellence"
                  />
                  <ul className="list_style_disc">
                    <li>Distributed Order Management/DOM</li>
                    <li>Pick/Pack/ Ship Solutions</li>
                    <li>Real-Time Inventory Management</li>
                    <li>Order Routing Solutions</li>
                    <li>Omnichannel Customer Service</li>
                    <li>Ship from store/Click and collect</li>
                    <li>Returns Management</li>
                    <li>Analytics and Reporting</li>
                  </ul>
                  <br />
                </Fade>
              </Box>
              <Box {...col} {...textArea} className="Solutions_Image_container">
                <Fade bottom cascade>
                  <Image src={OrderImage3} alt="Our Capabilities" />
                </Fade>
              </Box>
            </Box>
            <div className="empty_space25" />
          </Container>
        </Box>

        <Container>
          <Box>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="Our Partners"
                />
                <Text
                  {...description}
                  className="text_center"
                  content="Our technology partnerships with industry-leading order management system vendors like IBM Sterling, Order dynamics etc. offer you the industry’s most comprehensive order management and fulfillment solutions."
                />
              </Fade>
            </Box>
            <Box>
              <Fade bottom cascade>
                <Image
                  src={ourpartners}
                  alt="our partners"
                  style={{ margin: '0 auto' }}
                />
              </Fade>
            </Box>
            <br />
          </Box>
          <div className="empty_space25" />
        </Container>
      </div>
      {/* end of order management */}

      <div className="multi_sections_container Banking_info_container">
        <Container>
          <Box style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="Banks Are Relying On Hyper-Personalized Experience"
                />
                <Text
                  {...description}
                  className="intro_text_container"
                  content="Digital transformation has changed the landscape of retail banking. With a view to differentiate and deliver outstanding services encouraging loyalty and customer satisfaction, retail banks should apply advanced analytics on data consolidated from disjointed systems across the organization to set up connected consumer intelligence. Banks should study and leverage data on customers’ behavioral patterns, goals, sentiments and propensities across all digital and physical channels at every stage of the customers’ journey.  With hyper-personalization, achieved through Connected Consumer Intelligence, contextual targeting at the appropriate time and space allows the organizations to build sustainable customer engagement and loyalty with the firm."
                />
                <div className="empty_space20" />
                <Text
                  {...description}
                  className="intro_text_container"
                  content="Cnetric has embraced this evolution and has partnered with Tata Consultancy Services (TCS) Digital Software & Solutions Group (DS&S) on their Customer Intelligence &Insights (CI&I) for banking software solutions. TCS’s Customer Intelligence & Insights for Banks (CI&I Banks) is an advanced, big data enabled customer analytics platform that delivers data driven & actionable customer insights for more engaging personalized experience for your customers."
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
                    content="Creating Connected Consumer Experiences"
                  />
                  <Text
                    {...description}
                    content="Customers look for experiences that surpass traditional boundaries and there is a shift towards connected experiences. TCS’s CI&I Banks allow customers to go through connected consumer experiences delivered by utilizing customer insights at an individual level. With its implementation, retail banks are able to engage in intelligent customer conversations, ameliorate customer on-boarding experience, tone down attrition and dormancy and enhance value to customers."
                  />
                </Fade>
              </Box>
              <Box
                {...col}
                {...textArea}
                className="InfoBanner_Image_container"
              >
                <Fade bottom cascade>
                  <Image src={IotImage2} alt="Greater Value at Lower Costs" />
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
                <Heading
                  {...title}
                  content="Grow and Retain Newly Acquired Customers"
                />
                <Text
                  {...description}
                  content="With advanced Machine Learning algorithms factoring in the customers’ pattern of transactions and interactions, the next best actions and offers are suggested and recommended products are displayed. These personalized suggestions tailored based on customer history have a stronger chance of winning over customers. In addition, CSAT scores help to detect and address negative experiences and improve any issues identified. This ensures a greater success rate in your hyper-targeted campaigns and suggestions that will attract and retain new customers."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={IotImage2} alt="Shift towards Open Source" />
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
                    content="Increase Direct Loan Originations"
                  />
                  <Text
                    {...description}
                    content="Accurate customer persona will provide demographic, value, product white space, multiple product profiles and account activities, enabling the bank to have intelligent interactions with customers who do not have a mortgage account with flag-star and help drive conversions. This also enables banks to retain existing mortgage customers, upsell checking-only customers, drive more direct to consumer mortgage loans and provide next best offer or product to buy."
                  />
                </Fade>
              </Box>
              <Box
                {...col}
                {...textArea}
                className="InfoBanner_Image_container"
              >
                <Fade bottom cascade>
                  <Image src={IotImage2} alt="Greater Value at Lower Costs" />
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
                <Heading {...title} content="Customer & Marketing Analytics" />
                <Text
                  {...description}
                  content="Customer analytics provide a complete 360 degree view of customers, customer base view, digital persona, customer scores, behavior & propensity modeling, experience alerts, next best offer, etc. Marketing analytics aid in event-based marketing, next best action and dynamic customer segmentation. These capabilities help fine tune efforts to deliver tailor-made and relevant offers and recommendations that target customers’ needs."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={IotImage2} alt="Shift towards Open Source" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Box className="info_order_change">
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    content="Excellence in Next Gen Customer Engagement"
                  />
                  <Text
                    {...description}
                    content="CI&I deliver advanced customer stratification capabilities to make targeted and contextual recommendations for customers. It accomplishes primarily 3 goals:"
                  />
                  <ul className="list_style_disc">
                    <li>
                      Establish a foundation for enterprise-wide customer
                      insights in terms of customer transaction views, customer
                      behavioral insights by overlaying Machine Learning
                      analytics, analyzing customer insights and iteratively
                      learn and fine tune insights across channels as a driver
                      for business decision support.
                    </li>
                    <li>
                      Providing real time insights and context-driven
                      recommendations to help customers fulfill goals by
                      optimizing campaigns with persona-based stratification,
                      improving up-sell with product affinities white space
                      analysis, increasing customer stickiness through
                      event-based marketing and life event & life stage
                      detection and contextual recommendation.
                    </li>
                    <li>
                      Consistent and customized experience delivery on broader
                      life style & consumption context by developing customer
                      profile with insights from emails, social, text and
                      speech, creating customer journey maps for hotspot
                      detection & care, building an eco-system of partners to
                      provide a connected journey experience & recommendations
                      on broader consumption context.
                    </li>
                  </ul>
                </Fade>
              </Box>
            </Box>
          </Container>
          <div className="empty_space30" />
        </Box>
      </div>
      {/* end of Banking */}

      <div className="multi_sections_container Food_Grocery_info_container">
        <Container>
          <Box style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="Revolution in the eCommerce Grocery Sector"
                />
                <Text
                  {...description}
                  className="intro_text_container"
                  content="The next big thing in the ecommerce space is the grocery shopping sector, which is set to grow stupendously by 2020. In recent years, there has been a marked shift in the way consumers buy groceries. Based on existing trends, it is estimated that ecommerce grocery expenditure will hit $100 billion by 2022. According to reports by Food Marketing Institute and Nielsen, over 70% of U.S. households will rely on an online medium for shopping for groceries, which is an astonishing shift from 30% in 2018. Amazon is one of the eCommerce giants driving innovation in the ecommerce grocery sector thanks to convenience and speed of delivery. Organizations must keep up with this massive change and adopt alternative eCommerce strategies to stay ahead of the competition."
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
                    content="Omnichannel Ecommerce Grocery Shopping"
                  />
                  <Text
                    {...description}
                    content="Convenience is the key when it comes to ecommerce omnichannel grocery shopping. According to Nielsen and Rakuten, the current valuation of the omnichannel grocery market is over $1 trillion and will continue to grow at an enormous scale each year. Innovative features which empower consumers to search, research and buy at ease are going to set the standard for the organizations to stay ahead in this highly competitive space. Amazon’s Go stores or Walmart’s Click & Collect or Amazon’s Subscribe & Save are the game changers in the ecommerce arena that provide convenient and easy way online shopping. An omnichannel system opens up opportunities in terms of myriad of options and personalization for a seamless shopping experience."
                  />
                </Fade>
              </Box>
              <Box
                {...col}
                {...textArea}
                className="InfoBanner_Image_container"
              >
                <Fade bottom cascade>
                  <Image src={IotImage2} alt="Greater Value at Lower Costs" />
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
                <Heading
                  {...title}
                  content="Revamping Logistics and Supply Chain"
                />
                <Text
                  {...description}
                  content="Organizations have realized the importance of an efficient supply chain for meeting consumer needs by providing the freshest and highest-quality ingredients quickly. Platforms which can tackle the logistical challenges that arise can effectively compete with others in the market creating greater value for the consumers. Facilities such as reliable cold-storage and fulfillment centers situated near major populated regions, drone-delivery systems that reduce transit time and predictive analytics must be implemented to increase customers’ satisfaction and trust towards online grocery shopping. They also serve to minimize any wasted groceries."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={IotImage2} alt="Shift towards Open Source" />
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
                    content="Hype About the Internet of Things (IoT)"
                  />
                  <Text
                    {...description}
                    content="IoT has gained momentum in recent years on account of its effortless data exchange through embedded sensors via connected devices and its widespread applications across the value chain. The Consumer Packaged Goods (CPG) companies are one of the greatest benefactors of IoT technology, driving enhanced consumer engagement via implanted sensors in the products or services. With IoT on their side, organizations can now gauge customers’ deeper motivation based on behavior and upgrade their product designs or service models. This ensures improved customer experience and enhanced brand loyalty and retention directly affecting top-line growth."
                  />
                </Fade>
              </Box>
              <Box
                {...col}
                {...textArea}
                className="InfoBanner_Image_container"
              >
                <Fade bottom cascade>
                  <Image src={IotImage2} alt="Greater Value at Lower Costs" />
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
                <Heading
                  {...title}
                  content="Sales & Marketing Offerings for CPG"
                />
                <Text
                  {...description}
                  content="Our strategic partner, Tata Consultancy Services’ (TCS’) Sales and Marketing Solutions, serves CPG companies helping them fast-forward their sales journey, and improving ROI and product availability. They are primarily focused around business consulting, solution implementation, and support services to CPG clients."
                />
                <Text
                  {...description}
                  content="Here are their key offerings:"
                />
                <ul className="list_style_disc">
                  <li>
                    <span className="text_bold">SFDC Solutions</span>
                    <br />
                    SFDC (Salesforce.com) Sales, Service and Marketing Cloud
                    Solutions propelling channel collaboration and insights to
                    the sales force.
                  </li>
                  <li>
                    <span className="text_bold">
                      Trade Promotion Management Solutions
                    </span>
                    <br />
                    Consulting and implementation services operate promotion
                    planning, execution, evaluation, and analytics while
                    business process services drives claims and payment
                    management.
                  </li>
                  <li>
                    <span className="text_bold">
                      Sales Force Automation Solutions
                    </span>
                    <br />
                    Automation services are implemented for managing store
                    audits and planogram compliance while innovative retail
                    activity optimization solutions are activated for order
                    management and real-time planogram compliance.
                  </li>
                </ul>
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={IotImage2} alt="Shift towards Open Source" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Box className="info_order_change">
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    content="Advanced Business Analytics Offering for CPG"
                  />
                  <Text
                    {...description}
                    content="For better visibility across business functions, CPG companies needs to collate data from various sources into a single dashboard. Our solutions partner, TCS' Advanced Business Analytics Solutions aids businesses with actionable insights."
                  />
                  <Text
                    {...description}
                    content="Their Key offerings are as follows:"
                  />
                  <ul className="list_style_disc">
                    <li>
                      Key Account Management Analytics for accurate forecast.
                    </li>
                    <li>
                      Integrated Cost Analysis Platform for analyzing product-
                      and customer-specific cost-to-serve for presenting
                      customer-specific profit and loss reports.
                    </li>
                    <li>
                      Marketing Effectiveness Solution for measuring program
                      effectiveness on key parameters such as key volume
                      drivers, gross rating point (GRP) and budget allocation.
                    </li>
                    <li>
                      Integrated Business Insights for real-time decisions
                      provide actionable insights after thorough data analysis.
                    </li>
                    <li>
                      Consumer Products Business Intelligence for decision
                      support.
                    </li>
                    <li>
                      Data Ingestion Platform brings about data synchronization
                      enhancing standardization capabilities utilizing Big Data
                      and advanced cloud analytics solutions.
                    </li>
                  </ul>
                </Fade>
              </Box>
            </Box>
          </Container>
          <div className="empty_space30" />
        </Box>
      </div>
      {/* end of Food & Grocery */}

      <div className="multi_sections_container Retail_info_container">
        <Container>
          <Box style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  className="text_center"
                  content="eCommerce Redefined"
                />
                <Text
                  {...description}
                  className="intro_text_container"
                  content="Ecommerce is being reborn with cutting-edge technologies like voice commerce, exclusive pop-ups, Augmented Reality-enabled shopping, online-to-offline (O2O), headless commerce and progressive web applications (PWA), etc. Smart mirrors, video games, and live streams have transformed the ecommerce landscape. The future of ecommerce looks promising with technological breakthrough and changes in consumers’ preferences."
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
                  <Heading {...title} content="Selling Directly To Consumers" />
                  <Text
                    {...description}
                    content="Direct to Consumer (DTC) selling is a growing trend. This is largely due to increasing popularity of private brands that occupy 20% of the consumables market and offer their own brands in lieu of legacy manufacturers. This is causing more traditional brands and manufacturers to opt for DTC selling. Consumers are eager for this change as it provides better value for money. With DTC, brands can own the customers, get access to first-party data for hyper-personalization and offer ultra-personalization and enjoy freedom to design their own customized products that win customers over, turning them into brand evangelists."
                  />
                </Fade>
              </Box>
              <Box
                {...col}
                {...textArea}
                className="InfoBanner_Image_container"
              >
                <Fade bottom cascade>
                  <Image src={IotImage2} alt="Greater Value at Lower Costs" />
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
                <Heading {...title} content="Customer & User Experience" />
                <Text
                  {...description}
                  content="Soon customer experience will be the top priority for any brand, even more important than pricing. A poor experience will cause customers to switch brands in the blink of an eye. In an era of omnichannel engagement and multiple avenues of shopping, you must optimize every aspect of user experience from website design to load time and payment options. Headless systems that have decoupled architecture can help you deliver a great experience anywhere a customer wants to engage like voice or social commerce. Aside from the popularity of mobile shopping, consumers are catching up with the new trend of social shopping with its varied aspects such as groups, communities, recommendations, discussions and selling products and services online. With group shopping facilities, it is possible to secure group discounts for bulk selling. Voice assistants & voice search are rapidly gaining momentum and becoming consumers’ preferred choice while shopping online. Cnetric’s expertise can help you harness these omnichannel opportunities and deliver a delightful experience that retains customers."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={IotImage2} alt="Shift towards Open Source" />
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
                    content="The Promising World of Artificial Intelligence (AI)"
                  />
                  <Text
                    {...description}
                    content="AI-enabled ecommerce automation is bringing revolution across ecommerce industry, primarily by eliminating human error in managing multiple stores, streamlining cross-border commerce and top-rated shopping experience. Hyper-personalization is booming with mobile voice-related searches – most of these are locally-based. Localization is going to rule in this decade to deliver tailor-made product recommendations at the right time and place."
                  />
                  <Text
                    {...description}
                    content="AI is extensively employed in digital self-service tools, such as on websites, apps, or via chatbots. AI-powered chatbots answer customers queries extremely fast and can provide better customer service post sale.  With the ecommerce industry moving towards omnichannel marketing, AI provides personalized suggestions and support, driving greater sales. Cnetric can help you delight customers with an AI-powered, omnichannel shopping experience."
                  />
                </Fade>
              </Box>
              <Box
                {...col}
                {...textArea}
                className="InfoBanner_Image_container"
              >
                <Fade bottom cascade>
                  <Image src={IotImage2} alt="Greater Value at Lower Costs" />
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
                <Heading {...title} content="The Power of Analytics" />
                <Text
                  {...description}
                  content="Today’s tech-savvy consumers look for a superior purchase experience across all touch points with relevant and useful content. The orchestration of connected technologies and channels has the capability to capture the digital footprints of these consumers. Organizations can derive valuable insights and uncover patterns through the power of analytics utilizing Machine Learning and adaptive analytics models. With these customer insights, organizations can fine-tune customer experience at every step of their journey and deliver hyper-personalized services and products. This drives higher conversions resulting in enhanced customer satisfaction, loyalty and retention."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="InfoBanner_Image_container">
              <Fade bottom cascade>
                <Image src={IotImage2} alt="Shift towards Open Source" />
              </Fade>
            </Box>
          </Box>
          <div className="empty_space30" />
        </Container>
      </div>
      {/* end of Retails */}
    </Box>
  );
};

InfoSolutionSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  col1: PropTypes.object,
  col2: PropTypes.object,
  title: PropTypes.object,
  subtitle: PropTypes.object,
  centertext: PropTypes.object,
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
    // pt: ['15px', '15px', '15px', '15px', '15px'],
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
  col1: {
    // width: '60%',
    width: ['100%', '100%', '100%', '45%', '45%'],
  },
  col2: {
    // width: '40%',
    width: ['100%', '100%', '100%', '55%', '55%'],
  },
  col3: {
    width: '70%',
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
  subtitle: {
    fontSize: ['20px', '22px', '22px', '22px', '22px'],
    color: '#5E7086',
    lineHeight: '1.5',
    fontWeight: '500',
    mb: '10px',
    mt: '-10px',
    fontFamily: 'RobotoSlab-SemiBold',
  },
  centertext: {
    textAlign: 'center',
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
};

export default InfoSolutionSection;
