import RatingsCard from "./RatingsCard";
import styles from "./RatingsCard.module.css";

const ratingsList = [
  {
    id: 1,
    starIcon: "/images/icon-star.svg",
    review: "Rated 5 stars in Reviews",
  },
  {
    id: 2,
    starIcon: "/images/icon-star.svg",
    review: "Rated 5 stars in Report Guru",
  },
  {
    id: 1,
    starIcon: "/images/icon-star.svg",
    review: "Rated 5 stars in BestTech",
  },
];

const RatingsCardsContainer = () => {
  return (
    <section className={styles.ratingsCardContainer}>
      {ratingsList.map(rating => (
        <RatingsCard
          key={rating.id}
          starIcon={rating.starIcon}
          review={rating.review}
        />
      ))}
    </section>
  );
};

export default RatingsCardsContainer;
