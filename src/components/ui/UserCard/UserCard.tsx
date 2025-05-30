import styles from "./UserCard.module.css";

interface CardProps {
  id?: number;
  image: string;
  name: string;
  title: string;
  information: string;
}

const UserCard = ({ image, name, title, information }: CardProps) => {
  return (
    <>
      <section className={styles.userCardContainer}>
        <div className={styles.detailsContainer}>
          <img src={image} alt={image} />
          <div>
            <h3>{name}</h3>
            <h3>{title}</h3>
          </div>
        </div>
        <p>{information}</p>
      </section>
    </>
  );
};

export default UserCard;
