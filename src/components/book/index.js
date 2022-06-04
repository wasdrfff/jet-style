export const Book = ({ author, name, img }) => {
  return (
    <div className="flex flex-col w-52 h-72 min-w-max min-h-72">
      <img className=" object-contain w-36 h-60" src={img} alt="kartinka" />
      <span className="text-center">{author}</span>
      <span className="text-center">{name}</span>
    </div>
  );
};
