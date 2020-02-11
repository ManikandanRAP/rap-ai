import React from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { hostingTheme } from 'common/src/theme/hosting';
import {
  GlobalStyle,
  ContentWrapper,
} from '../containers/Hosting/hosting.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from '../containers/Hosting/Navbar';
import FeatureSection from '../containers/Hosting/Features';
import InfoSection from '../containers/Hosting/Info';
import DomainSection from '../containers/Hosting/Domain';
import PaymentSection from '../containers/Hosting/Payment';
import GuaranteeSection from '../containers/Hosting/Guarantee';
import FaqSection from '../containers/Hosting/Faq';
import ServicesSection from '../containers/Hosting/Services';
import BannerSection from '../containers/Hosting/Banner';
// import BannerSection2 from '../containers/Hosting/Banner2';
import PricingSection from '../containers/Hosting/Pricing';
// import TestimonialSection from '../containers/Hosting/Testimonials';
import TestimonialSection2 from '../containers/Hosting/Testimonials2';
import ContactMap from '../containers/Hosting/ContactMap';
import ContactSection from '../containers/Hosting/Contact';
import Footer from '../containers/Hosting/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { ParallaxProvider } from 'react-scroll-parallax';
import SEO from '../components/seo';

import Fullslider1 from '../containers/Hosting/Fullslider1';


export default () => {
  return (
    <ThemeProvider theme={hostingTheme}>
      <ParallaxProvider>
        <SEO title="Hosting | A react next landing page" />

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />

            </DrawerProvider>
          </Sticky>

          <Fullslider1 />
          <BannerSection />
          <FeatureSection />
          <InfoSection />
          <PricingSection />
          <DomainSection />
          <ServicesSection />
          <PaymentSection />
          {/* <TestimonialSection /> */}
          <TestimonialSection2 />
          <ContactMap />
          <GuaranteeSection />
          <FaqSection />
          <ContactSection />
          <Footer />
        </ContentWrapper>
      </ParallaxProvider>
    </ThemeProvider>
  );
};
