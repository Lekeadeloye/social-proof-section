import RatingsCard from "./RatingsCard";
import styles from "./RatingsCard.module.css";

const starUrl = "/images/icon-star.svg"

const rating = [];


const ratingsList = [
  {
    id: 1,
    starIcon: "/images/icon-star.svg",
    stars: 5,
    review: "Rated 5 Stars in Reviews",
  },
  {
    id: 2,
    starIcon: "/images/icon-star.svg",
    stars: 5,
    review: "Rated 5 Stars in Report Guru",
  },
  {
    id: 1,
    starIcon: "/images/icon-star.svg",
    stars: 5,
    review: "Rated 5 Stars in BestTech",
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
          stars={rating.stars}
        />
      ))}
    </section>
  );
};

export default RatingsCardsContainer;
