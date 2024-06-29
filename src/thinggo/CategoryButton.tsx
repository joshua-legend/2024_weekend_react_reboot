export type CategoryButtonProps = {
  image: string;
  title: string;
};

const CatergoryButton = ({ image, title }: CategoryButtonProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-20 h-20 rounded-full">
        <img className="rounded-full w-full h-full object-contain" src={image} alt="" />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default CatergoryButton;
