import styles from "./RatingsCard.module.css";

export interface CardProps {
  id?: number;
  starIcon: string;
  review: string;
}

const RatingsCard = ({starIcon, review}: CardProps) => {
  return (
    <>
      <section className={styles.card}>
        <img className={styles.icon} src={starIcon} alt={starIcon} />
        <p>{review}</p>
      </section>
    </>
  );
};

export default RatingsCard
