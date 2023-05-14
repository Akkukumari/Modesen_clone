import { Link } from "react-router-dom";
import "./Shop.css";
export default function Shop() {
  const shopData = [
    {
      title: "SALE",
      image: "https://cdn.modesens.com/banner/20220919-W-Sale.jpg",
      link: "/shop-new-sale",
    },
    {
      title: "NEW ARRIVALS",
      image: "https://cdn.modesens.com/banner/20220919-W-New.jpg",
      link: "/shop-new-arrivals",
    },
    {
      title: "TOPS",
      image: "https://cdn.modesens.com/banner/20220919-W-Tops.jpg",
      link: "/shop-new-tops",
    },
    {
      title: "JACKETS",
      image: "https://cdn.modesens.com/banner/20220919-W-Jackets.jpg",
      link: "/shop-new-jackets",
    },
    {
      title: "DRESSES",
      image: "https://cdn.modesens.com/banner/20220919-W-Dresses.jpg",
      link: "/shop-new-dresses",
    },
    {
      title: "PANTS",
      image: "https://cdn.modesens.com/banner/20220919-W-Pants.jpg",
      link: "/shop-new-pants",
    },
    {
      title: "SHOES",
      image: "https://cdn.modesens.com/banner/20220919-W-Shoes.jpg",
      link: "/shop-new-shoes",
    },
    {
      title: "BAGS",
      image: "https://cdn.modesens.com/banner/20220919-W-Bags.jpg",
      link: "/shop-new-bags",
    },
    {
      title: "PRE-OWNED",
      image:
        "https://cdn.modesens.com/banner/20221207-W-PreOwned_1670402059.jpg",
      link: "/shop-new-preowned",
    },
  ];
  return (
    <div>
      <div className="shop-list">
        {shopData?.map((el) => (
          <Link to={el.link}>
            <div key={el.link} className="shop-img">
              <img className="shop-image" src={el.image} alt="imagess" />
              <div className="title-name">{el.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
