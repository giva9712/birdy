import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

import Header from "components/Header/Header";
import Parallax from "components/Parallax/Parallax";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import BrandLogo from "assets/img/birdy-text-white.png";
import BrandLogo2 from "assets/img/birdy-text-black.png";
import ProductSection from "./Sections/ProductSection";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import CountSection from "./Sections/CountSection";
import Counter from "components/Counter/Counter";
const dashboardRoutes = [];
const Home = props => {
  const { classes, ...rest } = props;
  return (
    <div>
      <Header
        color="dark"
        routes={dashboardRoutes}
        brand={BrandLogo}
        brandBlack={BrandLogo2}
        changeColorOnScroll={{
          height: 74,
          color: "dark"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/bg2.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} md={11} sm={12}>
              <Counter string="123456" style={{ marginTop: "130px" }} />
              <div className={classes.textCenter}>
                <span className={classes.title}>
                  Students globally across 140+ countries
                </span>
              </div>
              {/* <h4 className={classes.description}>
                <b>Start preparing for your next test!</b>
              </h4> */}
              <br />
              {/* <GridContainer>
                <GridItem xs={12} md={2} sm={12}>
                  <Button
                    className={classes.parallax_button}
                    color="success"
                    fullWidth={true}
                    href="/ielts"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GRE
                  </Button>
                </GridItem>
                <GridItem xs={12} md={2} sm={12}>
                  <Button
                    className={classes.parallax_button}
                    color="success"
                    fullWidth={true}
                    href="/gmat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GMAT
                  </Button>
                </GridItem>
                <GridItem xs={12} md={2} sm={12}>
                  <Button
                    className={classes.parallax_button}
                    color="success"
                    fullWidth={true}
                    href="/toefl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TOEFL
                  </Button>
                </GridItem>
                <GridItem xs={12} md={2} sm={12}>
                  <Button
                    className={classes.parallax_button}
                    color="success"
                    fullWidth={true}
                    href="/sat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SAT
                  </Button>
                </GridItem> */}
              {/* <GridItem xs={12} md={2} sm={12}>
                  <Button
                    className={classes.parallax_button}
                    color="success"
                    fullWidth={true}
                    href="/act"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ACT
                  </Button>
                </GridItem> */}
              {/* <GridItem xs={12} md={2} sm={12}>
                  <Button
                    className={classes.parallax_button}
                    color="success"
                    fullWidth={true}
                    href="/praxis"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Praxis
                  </Button>
                </GridItem> */}
              {/* <GridItem xs={12} md={2} sm={12}>
                  <Button
                    className={classes.parallax_button}
                    color="success"
                    fullWidth={true}
                    href="/lsat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LSAT
                  </Button>
                </GridItem> */}
              {/* <GridItem xs={12} md={2} sm={12}>
                  <Button
                    className={classes.parallax_button}
                    color="success"
                    fullWidth={true}
                    href="/mcat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MCAT
                  </Button>
                </GridItem> */}
              {/* <GridItem xs={12} md={2} sm={12}>
                  <Button
                    className={classes.parallax_button}
                    color="success"
                    fullWidth={true}
                    href="/ielts"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IELTS
                  </Button>
                </GridItem>
              </GridContainer> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.CountSection)}>
        <div className={classNames(classes.container)}>
          <CountSection />
        </div>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          {/* <TeamSection />
            <WorkSection /> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

Home.propTypes = {};

export default withStyles(landingPageStyle)(Home);
