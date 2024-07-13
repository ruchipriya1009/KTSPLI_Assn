import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "../styles/TableData.module.css";

const TableData = ({
  className = "",
  rankValue,
  imageValue,
  totalValue,
  stateValue,
  rankHeader,
  propTop,
  propPadding,
}) => {
  const tableDataStyle = useMemo(() => {
    return {
      top: propTop,
      padding: propPadding,
    };
  }, [propTop, propPadding]);

  return (
    <div
      className={[styles.tableData, className].join(" ")}
      style={tableDataStyle}
    >
      <img className={styles.tableDataChild} alt="" src="/rectangle-4594.svg" />
      <div className={styles.rankSeparator}>
        <div className={styles.rankValue}>{rankValue}</div>
      </div>
      <div className={styles.imageSeparator}>
        <div className={styles.imageValue}>{imageValue}</div>
      </div>
      <div className={styles.totalSeparator}>
        <div className={styles.totalValue}>{totalValue}</div>
      </div>
      <div className={styles.stateSeparator}>
        <div className={styles.stateValue}>{stateValue}</div>
      </div>
      <div className={styles.tallyHeaderRow}>
        <div className={styles.rankHeader}>{rankHeader}</div>
      </div>
    </div>
  );
};

TableData.propTypes = {
  className: PropTypes.string,
  rankValue: PropTypes.string,
  imageValue: PropTypes.string,
  totalValue: PropTypes.string,
  stateValue: PropTypes.string,
  rankHeader: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propPadding: PropTypes.any,
};

export default TableData;
