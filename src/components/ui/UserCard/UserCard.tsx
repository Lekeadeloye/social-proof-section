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
          <div className={styles.nameAndTitle}>
            <h3 className={styles.name}>{name}</h3>
            <h3 className={styles.title}>{title}</h3>
          </div>
        </div>
        <p className={styles.information}>" {information} "</p>
      </section>
    </>
  );
};

export default UserCard;
