import ShipsTable from "../Ships/ShipsList";

const Ship = ({ ships, getText }) => {
  const result = ships.filter((res) => res.group === getText);
  console.log(getText)

  return <ShipsTable ships={result} />;
};

export default Ship;
