import {
    Footer,
    Header,
    Hero,
    Panel,
    PricingCard,
    ProductInfoCard,
  } from "compositions";
  import { useMediaQuery } from "hooks";
  import './landing.css'
  import { IconCheck } from "icons";
  import { placeholder } from "images";
  import { Flex, FlexItem, Section } from "layout";
  import {
    Accordion,
    AccordionItem,
    Button,
    Form,
    Image,
    Input,
    Navigation,
    NavigationPill,
    Search,
    SelectField,
    SelectItem,
    Tag,
    TagToggle,
    TagToggleGroup,
    TagToggleList,
    Text,
    TextContentHeading,
    TextHeading,
    TextPrice,
  } from "primitives";
  import { AuthenticationProvider } from "providers";
  import { useState } from "react";

  
  function Landing() {
    const { isMobile, isDesktop } = useMediaQuery();
    const headerPadding = isDesktop ? "800" : "600";
    const flexGap = isMobile ? "600" : "1200";
    const sectionPadding = isMobile ? "600" : "1600";
    const [pricingInterval, setPricingInterval] = useState("monthly");
    const intervalText = pricingInterval === "monthly" ? "month" : "year";
    const annualRatio = pricingInterval === "monthly" ? 1 : 11;
    const pricingSize = isDesktop ? "large" : "small";
  
    return (
      <AuthenticationProvider>
      <Header />

        <Hero className="hero">
        <div className="title">
          <h1>Title</h1>
        <h2>Subtitle</h2></div>
        <div className="buttonGroup">
        <Button size="medium" variant="neutral">Button</Button>
        <Button size="medium" variant="primary">Button</Button>
        </div>
        </Hero>
 
      <Section className="images">
{/* <Image/><Image/> */}
      </Section>
      <Section className="cardGrid">
        <div className="title">
        <TextContentHeading
            align="center"
            heading="Follow the latest trends"
            subheading="With our daily newsletter"
          />
          <h3>Heading</h3>
          <h4>Subheading</h4>
        </div>
        <div className="grid">

        </div>
      </Section>
      <Footer />
      </AuthenticationProvider>
    );
  }
  
  export default Landing;
  