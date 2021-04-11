import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "./../components/table/table";
import Chart from "./../components/chart/chart";
import Item from "./../components/item/item";
import Tag from "./../components/tag/tag";
import { updateSalesList } from "./../actions";
import "./style.scss";

const Homepage = () => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState<any>([]);
  const [wholedata, setWholeData] = React.useState<any>({});
  const [chartsize, setChartSize] = React.useState<any>({
    width: 0,
    height: 0,
  });
  const chartRef = React.useRef<any>();
  React.useEffect(() => {
    if (chartRef.current) {
      console.log("chartRef.current,", chartRef.current);
      setChartSize({
        width: chartRef.current.getBoundingClientRect().width,
        height: chartRef.current.getBoundingClientRect().height,
      });
    }
  }, []);
  React.useEffect(() => {
    const fetchData = () => {
      return fetch("./stackline_frontend_assessment_data_2021.json")
        .then((res) => res.json())
        .then((data) => {
          setData(data[0]?.sales);
          setWholeData(data[0]);
          dispatch(updateSalesList(data[0]?.sales));
        })
        .catch((err) => {
          // Do something for an error here
          console.log(err);
        });
    };
    fetchData();
  }, [dispatch]);

  return (
    <>
      <div className="grid-container">
        <div className="panel">
          <Item
            url={wholedata.image}
            detail={wholedata.subtitle}
            title={wholedata.title}
          />
          <div className="tag-wrapper">
            {wholedata.tags &&
              wholedata.tags.map((item: string, index: number) => {
                return <Tag name={item} key={index} />;
              })}
          </div>
        </div>
        <div className="chart" ref={chartRef}>
          <Chart
            title="Retail Sales"
            data={data}
            width={chartsize.width}
            height={chartsize.height}
          />
        </div>
        <div className="table">
          <Table data={data} />
        </div>
      </div>
    </>
  );
};

export default Homepage;
