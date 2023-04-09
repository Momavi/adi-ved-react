import { useDispatch, useSelector } from "react-redux";
import { showPriceTable } from "@/store/Popup";

import "./PriceTable.scss";

function PriceTable() {
  const priceTable = useSelector(
    (state: { popup: { priceTable: boolean } }) => state.popup.priceTable
  );

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showPriceTable());
  };

  const handleClickOutside = (event: { target: any; currentTarget: any }) => {
    if (event.target === event.currentTarget) {
      dispatch(showPriceTable());
    }
  };

  const handleCheckboxChange = () => {
    handleClick();
  };

  return (
    <>
      <input
        type="checkbox"
        checked={priceTable}
        id="priceTable"
        className="modal-toggle"
        onChange={handleCheckboxChange}
      />
      <label className="modal" onClick={(event) => handleClickOutside(event)}>
        <label className="modal-box relative w-11/12 max-w-5xl">
          <label
            className="btn-sm btn-circle btn absolute right-2 top-2"
            onClick={() => handleClick()}
          >
            ✕
          </label>
          <div className="flex flex-col items-center">
            <h3 className="mb-12 text-3xl font-bold xl:text-4xl">
              Таблица цен
            </h3>
          </div>
        </label>
      </label>
    </>
  );
}

export default PriceTable;
