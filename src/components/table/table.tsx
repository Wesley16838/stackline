import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";

const Table = (props: { data: any }) => {
  const [currentData, setCurrentData] = React.useState<any>([]);
  if (currentData.length === 0 && props.data !== currentData) {
    setCurrentData(props.data);
  }
  const handleOnClick = (value: number) => {
    let sortData = null;
    switch (value) {
      case 0:
        sortData = currentData.sort(function (a: any, b: any) {
          return Date.parse(b.weekEnding) - Date.parse(a.weekEnding);
        });
        break;
      case 1:
        sortData = currentData.sort(function (a: any, b: any) {
          return b.retailSales - a.retailSales;
        });
        break;
      case 2:
        sortData = currentData.sort(function (a: any, b: any) {
          return b.wholesaleSales - a.wholesaleSales;
        });
        break;
      case 3:
        sortData = currentData.sort(function (a: any, b: any) {
          return b.unitsSold - a.unitsSold;
        });
        break;
      case 4:
        sortData = currentData.sort(function (a: any, b: any) {
          return b.retailerMargin - a.retailerMargin;
        });
        break;
      default:
    }
    setCurrentData([...sortData]);
  };
  return (
    <div>
      <div className="table-header">
        <div className="table-title" onClick={() => handleOnClick(0)}>
          <p>WEEK ENDING</p>
          <div>￬</div>
        </div>
        <div className="table-title" onClick={() => handleOnClick(1)}>
          <p>RETAIL SALES</p>
          <div>￬</div>
        </div>
        <div className="table-title" onClick={() => handleOnClick(2)}>
          <p>WHOLE SALES</p>
          <div>￬</div>
        </div>
        <div className="table-title" onClick={() => handleOnClick(3)}>
          <p>UNITS SOLD</p>
          <div>￬</div>
        </div>
        <div className="table-title" onClick={() => handleOnClick(4)}>
          <p>RETAIL MARGIN</p>
          <div>￬</div>
        </div>
      </div>
      <div className="table-body">
        {currentData instanceof Array &&
          currentData.map((item: any, index: number) => {
            return (
              <div className="table-row" key={index}>
                <div className="table-cell">{item.weekEnding}</div>
                <div className="table-cell">
                  ${Number(item.retailSales).toLocaleString()}
                </div>
                <div className="table-cell">
                  ${Number(item.wholesaleSales).toLocaleString()}
                </div>
                <div className="table-cell">{item.unitsSold}</div>
                <div className="table-cell">
                  ${Number(item.retailerMargin).toLocaleString()}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default React.memo(Table);
