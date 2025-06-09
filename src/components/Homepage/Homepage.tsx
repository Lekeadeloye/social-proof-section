import RatingsCardsContainer from "../ui/RatingsCard/RatingsCardsContainer";
import UserCardsContainer from "../ui/UserCard/UserCardsContainer";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <article className={styles.information}>
      <section className={styles.headings}>
        <h1 className={styles.title}>
          10,000+ of our users love our products.
        </h1>
        <p className={styles.subTitle}>
          {/* {" "} */}
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </section>
      <section>
        <RatingsCardsContainer />
      </section>
      <section>
        <UserCardsContainer />
      </section>
    </article>
  );
};

export default Homepage;
