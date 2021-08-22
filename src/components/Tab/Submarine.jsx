import ShipsTable from "../Ships/ShipsList";

const Submarine = ({ ships, getText }) => {
  const result = ships.filter((res) => res.group === getText);

  return <ShipsTable ships={result} />;
};

export default Submarine;
