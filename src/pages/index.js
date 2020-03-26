import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Simple</>,
    // imageUrl: "img/.svg",
    description: (
      <>
        The Pico Stack is what you reach for when Kubernetes is overkill. It's a
        small collection of tools that do one job well.
      </>
    )
  },
  {
    title: <>Containerised</>,
    // imageUrl: "img/.svg",
    description: (
      <>
        Everything must be containerised. It vastly simplifies the deployment,
        maintenance and mobility of services. It provides a unified way of
        configuring, monitoring and managing services.
      </>
    )
  },
  {
    title: <>Git-Ops and Infrastructure-As-Code</>,
    // imageUrl: "img/.svg",
    description: (
      <>
        Your infrastructure is just as important as your code. So why not treat
        it that way? The Pico Stack encourages and implements these two ideas
        wherever possible.
      </>
    )
  },
  {
    title: <>Automated</>,
    // imageUrl: "img/.svg",
    description: (
      <>
        Whatever can be automated, should be. But things should also be easy to
        intervene when things go wrong. Because things always go wrong!
      </>
    )
  },
  {
    title: <>Transparent</>,
    // imageUrl: "img/.svg",
    description: (
      <>
        It should be easy to see what's happening. This means logging and
        metrics. Alerts should be optional, but easy to set up.
      </>
    )
  }
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/intro/introduction")}
            >
              Introduction
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
