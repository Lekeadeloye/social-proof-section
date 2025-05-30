import RatingsCardsContainer from "../ui/RatingsCard/RatingsCardsContainer";
import UserCardsContainer from "../ui/UserCard/UserCardsContainer";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <article className={styles.information}>
      <section>
        <h1>10,000+ of our users love our products.</h1>
        <p>
          {" "}
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
