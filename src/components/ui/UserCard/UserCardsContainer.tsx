import UserCard from "./UserCard";

const users = [
  {
    id: 1,
    image: "/images/image-colton.jpg",
    name: "Colton Smith",
    title: "Verified Buyer",
    information:
      "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
  },
  {
    id: 2,
    image: "/images/image-irene.jpg",
    name: "Irene Roberts",
    title: "Verified Buyer",
    information: 'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.',
  },
  {
    id: 3,
    image: "/images/image-anne.jpg",
    name: "Anne Wallace",
    title: "Verified Buyer",
    information: 'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!',
  },
];

const UserCardsContainer = () => {
  return (
    <>
      {users.map(user => (
        <UserCard key={user.id} image={user.image} name={user.name} title={user.title} information={user.information}/>
      ))}
    </>
  );
};

export default UserCardsContainer;
