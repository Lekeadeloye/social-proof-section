import styles from "./RatingsCard.module.css";

export interface CardProps {
  id?: number;
  starIcon: string;
  review: string;
  stars: number;
}

const RatingsCard = ({ starIcon, review, stars, id }: CardProps) => {
  const rating = [];

  for (let i = 0; i < stars; i++) {
    rating.push(starIcon);
  }

  return (
    <>
      <section className={styles.card}>
        <div className={styles.starsContainer}>
          {rating.map((el, index) => (
            <img
              className={styles.icon}
              src={starIcon}
              alt={starIcon}
              key={`${id}-${index}`}
            />
          ))}
        </div>
        {/* <img className={styles.icon} src={starIcon} alt={starIcon} /> */}
        <p className={styles.rating}>{review}</p>
      </section>
    </>
  );
};

export default RatingsCard;
