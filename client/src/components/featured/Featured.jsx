import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./featured.css";
import axios from "axios";
import { useSearch } from "../../hooks/useSearch";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=delhi,bangalore,jaipur"
  );

  const cities = [
    {
      city: "delhi",
      label: "Delhi",
      image:
        "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
      data: data[0],
    },
    {
      city: "bangalore",
      label: "Bangalore",
      image:
        "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
      data: data[1],
    },
    {
      city: "jaipur",
      label: "jaipur",
      image:
        "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
      data: data[2],
    },
  ];

  const { handleSearch } = useSearch();

  const cardClickHandler = (city) => {
    handleSearch(
      city,
      [
        {
          startDate: 0,
          endDate: 0,
          key: "selection",
        },
      ],
      {
        adult: 1,
        children: 0,
        room: 1,
      }
    );
  };

  return (
    <>
      <div className="featured">
        {loading ? (
          "loading please wait"
        ) : (
          <>
            {cities.map((cityDetails, index) => {
              return (
                <div
                  className="featuredItem"
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    cardClickHandler(cityDetails.city);
                  }}
                >
                  <img src={cityDetails.image} alt="" className="featuredImg" />
                  <div className="featuredTitles">
                    <h1>{cityDetails.label}</h1>
                    <h2>{cityDetails.data} properties</h2>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Featured;
