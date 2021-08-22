import { useState } from "react";
import Layout from "../layout";
import { Section, Container, Row, Col } from "../components";
import { SearchInput, Tab } from "../components";
import styles from "../styles/Home.module.scss";

const Home = ({ data }) => {
  const [keyword, setKeyword] = useState("");

  const filteredShips = data.ships.filter(
    (ship) =>
      ship.name.toLowerCase().includes(keyword) ||
      ship.type.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault;
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <Layout title="Modern Warships" className="home">
      <Section>
        <Container>
          <Row>
            <Col md="3">
              <h5 className={styles.search_label}>Search Ships</h5>
            </Col>
            <Col md="9">
              <SearchInput
                placeholder="Filter by Ship name or type"
                onChange={onInputChange}
              />

              <div className={styles.counts}>
                {filteredShips?.length > 0 && (
                  <span>
                    Found {filteredShips.length}{" "}
                    {filteredShips.length <= 1 ? "ship" : "ships"}
                  </span>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <Container>
          <Row>
            <Col space="12">
              <Tab ships={filteredShips} />
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://modern-warships.web.app/ships.json");

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Home;
