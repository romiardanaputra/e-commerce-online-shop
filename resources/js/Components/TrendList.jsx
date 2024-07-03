const TrendList = ({TrendText, TrendIcons}) => {
  return (
    <>
      <div className="bg-gray-100 p-4 w-fit rounded-md flex flex-col items-center gap-2">
        <div className="p-4 rounded-full w-fit bg-gray-300/[.5]">{TrendIcons}</div>
        <h3 className="text-sm font-medium">{TrendText}</h3>
      </div>
    </>
  );
};

export default TrendList;
