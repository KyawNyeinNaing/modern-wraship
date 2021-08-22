import { useState } from "react";
import Link from "next/link";
import styles from "./Ship.module.scss";
import { RiArrowDropDownFill, RiArrowDropUpFill } from "react-icons/ri";
import NotFound from "../Result/NotFound";

const ShipsTable = ({ ships }) => {
  const [direction, setDirection] = useState(null);
  const [value, setValue] = useState();

  const orderBy = (ships, value, direction) => {
    if (direction === "asc") {
      return [...ships].sort((a, b) => (a[value] > b[value] ? 1 : -1));
    }

    if (direction === "desc") {
      return [...ships].sort((a, b) => (a[value] > b[value] ? -1 : 1));
    }

    return ships;
  };

  const SortArrow = ({ direction }) => {
    if (!direction) return <></>;

    if (direction === "desc") {
      return <RiArrowDropDownFill />;
    } else {
      return <RiArrowDropUpFill />;
    }
  };

  const orderedShips = orderBy(ships, value, direction);

  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };

  const setValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
  };

  return (
    <>
      <div className={styles.heading}>
        <div className={styles.heading_flag} />
        <button
          className={styles.heading_name}
          onClick={() => setValueAndDirection("name")}
        >
          <div>Ship Name</div>
          {value === "name" && <SortArrow direction={direction} />}
        </button>
      </div>
      {orderedShips?.length > 0 ? (
        orderedShips?.map((ship) => (
          <Link href={`/ships/${ship.id}/detail`} key={ship?.id}>
            <div className={styles.row}>
              <div className={styles.flag}>
                <img src={ship?.image_url} alt={ship?.name} />
              </div>
              <div className={styles.name}>{ship?.name}</div>
            </div>
          </Link>
        ))
      ) : (
        <NotFound result="Not Found" />
      )}
    </>
  );
};

export default ShipsTable;
