import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Button, Col, Row } from "react-bootstrap";
import Bootstrap from "../components/functional/Bootstrap";
import Feature from "../components/functional/Feature";
import Link from "@docusaurus/Link";

function Homepage() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout>
      <Bootstrap>
        <section className="section bg-light">
          <div className="container text-center">
            <h1>{siteConfig.title}</h1>

            <br />

            <h3>React Native Component Library</h3>

            <p />

            <h4>
              Components and utilities for building React Native applications on
              mobile and web.
            </h4>

            <br />

            <Link to="/docs/Installation">
              <Button size="lg" className="btn-primary">
                Get Started
              </Button>
            </Link>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: "70%" }}>
            <Row>
              <Col xs={12} md={6}>
                <Feature
                  title="Easy to Use"
                  description={`No other configuration or setup is needed. This reduces the time to get started and the complexity of the project.`}
                />
              </Col>
              <Col xs={12} md={6}>
                <Feature
                  title="Cross Platform"
                  description={`Components and utilities can be used on web and mobile. No need to make them adapt to different platforms.`}
                />
              </Col>
              <Col xs={12} md={6}>
                <Feature
                  title="Compatible With TypeScript"
                  description="This library can be used with JavaScript and TypeScript."
                />
              </Col>
              <Col xs={12} md={6}>
                <Feature
                  title="Actively Maintained"
                  description="This library is constantly being updated and maintained so that the library is always up to date."
                />
              </Col>
            </Row>
          </div>
        </section>
      </Bootstrap>
    </Layout>
  );
}

export default Homepage;
