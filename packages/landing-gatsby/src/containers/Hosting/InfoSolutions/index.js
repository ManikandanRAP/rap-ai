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
import { Link } from "gatsby";
import IconTextSection from "../IconText";

import headlessCommImg1 from 'common/src/assets/image/hosting/Pages/HeadlessCommerce/An Eye on 5G.svg';
import headlessCommImg2 from 'common/src/assets/image/hosting/Pages/HeadlessCommerce/Faster Time to Market.svg';
import headlessCommImg3 from 'common/src/assets/image/hosting/Pages/HeadlessCommerce/Omnichannel Reach.svg';
import headlessCommImg4 from 'common/src/assets/image/hosting/Pages/HeadlessCommerce/Customization, Personalization & Flexibility.svg';
import headlessCommImg5 from 'common/src/assets/image/hosting/Pages/HeadlessCommerce/An Eye on 5G.svg';
import headlessCommImg6 from 'common/src/assets/image/hosting/Pages/HeadlessCommerce/Social Commerce.svg';

import B2BImage1 from 'common/src/assets/image/hosting/FloatingImage/B2B/The Modern B2B Customer.svg';
import B2BImage2 from 'common/src/assets/image/hosting/FloatingImage/B2B/Headless Commerce.svg';
import B2BImage3 from 'common/src/assets/image/hosting/FloatingImage/B2B/Influence and Social Proof.svg';
import B2BImage4 from 'common/src/assets/image/hosting/FloatingImage/B2B/Big Data and AI.svg';

import DigitalExpImg1 from 'common/src/assets/image/hosting/FloatingImage/Digital Experience & CX/Full Spectrum of Digital Experience.svg';


import "./infosolutions.css";

const InfoSolutionSection = ({
  sectionWrapper,
  row,
  col,
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
        <Box className="section_background_color">
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
        </Box>


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
        <Box className="section_background_color">
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
        </Box>

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
                <Image src={B2BImage1} alt="The Modern B2B Customer" />
              </Fade>
            </Box>
          </Box>
        </Container>

        <Box className="section_background_color">
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
                  <Image src={B2BImage2} alt="Headless Commerce" />
                </Fade>
              </Box>
            </Box>
          </Container>
        </Box>


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
                <Image src={B2BImage3} alt="Influence and Social Proof" />
              </Fade>
            </Box>
          </Box>
        </Container>

        <Box className="section_background_color">
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
                  <Image src={B2BImage4} alt="Big Data and AIAutomation, AI & Big Data" />
                </Fade>
              </Box>
            </Box>
          </Container>
        </Box>

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

        <Box className="section_background_color">
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
        </Box>


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


        <Box className="section_background_color">
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
        </Box>

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


        <Box className="section_background_color">
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
        </Box>

      </div>
      {/* end of automation and ai */}
      <div className="multi_sections_container omnichannel_info_container">

        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea} >
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="A Good Omnichannel Strategy Is Essential To Good Commerce"
                />
                <Text
                  {...description}
                  content="An omnichannel eCommerce strategy is one of the most powerful ways to drive brand loyalty and turn loyal customers into advocates.  Cnetric, with several years of expertise, can provide seamless integration of innumerable customer touch points to drive a smooth customer journey across all channels. This includes both brick and mortar and eCommerce sores with a seamless experience across email, social media, smartwatches, voice search, etc."
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

        <Box className="section_background_color">
          <Container>
            <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
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
                  <Image src={drcimg} alt="Info Image One" />
                </Fade>
              </Box>
            </Box>
          </Container>
        </Box>


        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Driving Emotional Connection"
                />
                <Text
                  {...description}
                  content="Creating a positive emotional connection with your customers helps brands drive sales, loyalty, and advocacy. With the power of Artificial Intelligence (AI) and Machine Learning (ML), businesses are serving customers in an emotionally intelligent way to achieve these goals. Cnetric’s experts can replace your legacy technology and empower your business with integrated, hyper-personalized, lean, AI-enabled machine learning with cutting-edge integrations. This reduces the friction between your brand and customers for a unique, seamless omnichannel experience built around your brand.  "
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


        <Box className="section_background_color">
          <Container>
            <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
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
                  <Image src={univcoming} alt="Info Image One" />
                </Fade>
              </Box>
            </Box>
          </Container>
        </Box>

        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Decoupled Architecture "
                />
                <Text
                  {...description}
                  content="With continuous explosion of channels, businesses need to tap this opportunity to effortlessly manage all the available customers’ touchpoints. This entails various devices and platforms such as desktop, mobile, tablet, Facebook, Instagram, Snapchat, TikTok, Twitter, wearables, voice search, kiosk, IOT, AI-driven bots, and so on. With monolithic architecture in place this is practically impossible. The Cnetric team can decouple your backend from your presentation layer, for a headless system, allowing your marketing team tackle each platform and device separately without any restraints."
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
      {/* end of omnichannel */}
      <div className="multi_sections_container headless_commerce_info_container">

        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea} >
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="What is Headless eCommerce?"
                />
                <Text
                  {...description}
                  content="A headless ecommerce system is the decoupling of your presentation layer (the website) from your backend (the technology that drives your website). Whereas a traditional system is monolithic meaning the body and head are attached. The shift to headless is a powerful catalyst for a nimble business that can drive greater sales."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={headlessCommImg1} alt="What is Headless eCommerce?" />
              </Fade>
            </Box>
          </Box>
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    content="Faster Time to Market"
                  />
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
          </Container>
        </Box>


        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Omnichannel Reach"
                />
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
        </Container>


        <Box className="section_background_color">
          <Container>
            <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
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
          </Container>
        </Box>

        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="An Eye on 5G"
                />
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
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    content="Social Commerce"
                  />
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
          </Container>
        </Box>
      </div>
      {/* end of headless Commerce */}
      <div className="multi_sections_container digital_experience_info_container">

        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea} >
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Digital Experience (DX)  & Customer Experience (CX)"
                />
                <Text
                  {...subtitle}
                  content="For Greater Sales"
                />
                <Text
                  {...description}
                  content="A positive customer experience can make or break an eCommerce business in today’s customer-centric world. Over 53% of customers abandon their shopping if they have to wait 3 seconds or more. As you can see the bar is high for pleasing today’s online customers. This is where a technologically-optimized digital experience (DX) and customer experience (CX) plays a substantial role in delighting customers to build sustained engagement and loyalty."
                />
                <Text
                  {...description}
                  content="You must bridge the silos of your web site, mobile app, offline and backend systems and you must think of DX strategy as being a significant piece of your customer experience (CX) strategy. Cnetric’s services, solutions and expertise can help your organization truly standout from the pack through seamless, omnichannel, thoughtful customer experience."
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
                  <Text
                    {...description}
                    content=""
                  />

                </Fade>
              </Box>
              <Box className="Solutions_Image_container">
                <Fade bottom cascade>
                  <Image src={DigitalExpImg1} alt="Full Spectrum of Digital Experience" />
                </Fade>
              </Box>
            </Box>
          </Container>
        </Box>


        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea}>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Facets of State-Of-The-Art DX"
                />
                <ul className="info_container_list_items">
                  <li>Harmony among different applications in the area of marketing, commerce, sales and service forms the elementary interface between your customers and your company.</li>
                  <li>Personalization based on tracking user behavior and interactions with you brand, so you can provide intelligent suggestions that suit their preference.</li>
                  <li>Your eCommerce platform should have flexible capabilities and APIs to develop and maintain flawless data integration to provide a seamless digital experience.</li>
                  <li>Ensure that your customers data stays private and protected while they engage with your brand across multiple channels and devices.</li>
                  <li>eCommerce platforms with great digital experience must also utilize analytical tools with Machine Learning and Artificial Intelligence capabilities to track and measure consumer behavior and parameters of success.</li>
                </ul>
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={headlessCommImg3} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
        </Container>


        <Box className="section_background_color">
          <Container>
            <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    content="Advantages of Great Digital Experience "
                  />
                </Fade>
              </Box>   
            </Box>
            <IconTextSection />
          </Container>
        </Box>

      </div>
      {/* end of Digital Experience */}
      <div className="multi_sections_container order_management_info_container">

        <Container>
          <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...col} {...textArea} >
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Order Management System Intricacies in Today’s World"
                />
                <Text
                  {...description}
                  content="Retailers and manufacturers worldwide find it challenging to demystify the complexities in the order management systems and fulfillment processes. It is a system of people, processes, and suppliers where everyone should sync together for a delightful customer experience. To avoid bottlenecks and meet customer demand, a flexible omnichannel order management system is essential. Cnetric’s expertise in order management system solutions can retain customers’ trust and loyalty for long-term success."
                />
              </Fade>
            </Box>
            <Box {...col} {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={headlessCommImg1} alt="What is Headless eCommerce?" />
              </Fade>
            </Box>
          </Box>
        </Container>

        <Box className="section_background_color">
          <Container>
            <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Box {...col} {...textArea} className="info_order_change">
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
                  <Image src={headlessCommImg2} alt="Info Image One" />
                </Fade>
              </Box>
            </Box>
          </Container>
        </Box>


        <Container>
          <Box>
            <Box {...textArea}>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="End-to-End Order Management Solutions"
                />
                <Text
                  {...description}
                  content="Cnetric provides industry-leading services and solutions for end-to-end order management across omnichannels."
                />

              </Fade>
            </Box>
            <Box {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={headlessCommImg3} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
        </Container>


        <Box className="section_background_color">
          <Container>
            <Box {...row} style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Box {...col} {...textArea} className="info_order_change">
                <Fade bottom cascade>
                  <Heading
                    {...title}
                    content="Our Capabilities"
                  />
                  <Text
                    {...description}
                    content="Experience End-to-End Excellence"
                  />
                  <ul>
                    <li>Distributed Order Management/DOM</li>
                    <li>Pick/Pack/ Ship Solutions</li>
                    <li>Real-Time Inventory Management</li>
                    <li>Order Routing Solutions</li>
                    <li>Omnichannel Customer Service</li>
                    <li>Ship from store/Click and collect</li>
                    <li>Returns Management</li>
                    <li>Analytics and Reporting</li>
                  </ul>

                </Fade>
              </Box>
              <Box {...col} {...textArea} className="Solutions_Image_container">
                <Fade bottom cascade>
                  <Image src={headlessCommImg4} alt="Info Image One" />
                </Fade>
              </Box>
            </Box>
          </Container>
        </Box>

        <Container>
          <Box style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Box {...textArea}>
              <Fade bottom cascade>
                <Heading
                  {...title}
                  content="Our Partners"
                />
                <Text
                  {...description}
                  content="Our technology partnerships with industry-leading order management system vendors like IBM Sterling, Order dynamics etc. offer you the industry’s most comprehensive order management and fulfillment solutions."
                />

              </Fade>
            </Box>
            <Box {...textArea} className="Solutions_Image_container">
              <Fade bottom cascade>
                <Image src={headlessCommImg5} alt="Info Image One" />
              </Fade>
            </Box>
          </Box>
        </Container>

      </div>
      {/* end of order management */}
    </Box>
  );
};

InfoSolutionSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
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
    pt: ['25px', '25px', '25px', '30px', '30px'],
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
    fontSize: ['22px', '24px', '24px', '28px', '28px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px',
    pt: '20px',
  },
  subtitle: {
    fontSize: ['16px', '16px', '16px', '16px', '16px'],
    color: '#343d48cc',
    lineHeight: '1.5',
    mb: '10px',
    mt: '0px',
  },
  centertext: {
    textAlign: 'center',
  },
  description: {
    fontSize: ['16px', '16px', '16px', '16px', '16px'],
    color: '#343d48cc',
    lineHeight: '1.5',
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