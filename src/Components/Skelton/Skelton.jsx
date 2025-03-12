import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Skelton = () => {
  return (
    <div className="pt-[8rem] bg-gray-100 w-full flex flex-col items-center">
      <h1 className="mb-6">
        <Skeleton width={400} height={20} />
      </h1>
      <div className="flex flex-col items-center gap-[2rem]">
        {[...Array(4)].map((_, index) => (
          <Skeleton key={index} width={600} height={80} />
        ))}
      </div>
    </div>
  );
};

export default Skelton;
