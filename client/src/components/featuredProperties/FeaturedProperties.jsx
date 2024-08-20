import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("http://localhost:8800/api/hotels/featured?featured=true&limit=4");

  if (loading) return "Loading...";
  if (error) return `An error occurred: ${error.message}`;

  return (
    <div className="fp">
      {data.length === 0 ? "No featured properties available" : data.map((item) => (
        <div className="fpItem" key={item._id}>
          <img
            src={item.photos[0] || "default-image-url"} // Fallback to a default image if none exists
            alt={item.name}
            className="fpImg"
          />
          <span className="fpName">{item.name}</span>
          <span className="fpCity">{item.city}</span>
          <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
          {item.rating && (
            <div className="fpRating">
              <button>{item.rating}</button>
              <span>Excellent</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeaturedProperties;
