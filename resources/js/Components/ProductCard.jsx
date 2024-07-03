const ProductCard = ({imgName, title, price, imgPath = "/images/landing/"}) => {
  return (
    <>
      <div className="size-full">
        <img
          src={`${imgPath}${imgName}`}
          alt={title}
          sizes={"100%"}
          className="rounded-md object-cover"
        />
        <h3 className="font-bold">{title}</h3>
        <h4 className="text-primary font-bold">{price}</h4>
      </div>
    </>
  );
};

export default ProductCard;
