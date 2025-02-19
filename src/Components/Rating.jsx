import { AiFillStar } from "react-icons/ai";
const Rating = ({ totalStars = 5 }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: totalStars }, (_, i) => i + 1).map((star) => (
        <AiFillStar className="text-yellow-500" key={star}></AiFillStar>
      ))}
    </div>
  );
};

export default Rating;
