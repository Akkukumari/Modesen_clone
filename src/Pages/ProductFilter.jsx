import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Shop.css";
import { SearchIcon } from "@chakra-ui/icons";

const ProductFilter = () => {
  const categories = [
    "Tops",
    "Skirts",
    "Gowns",
    "Trousers",
    "Pants",
    "T-Shirt",
    "One-Piece",
    "Bodycon",
    "Maxi",
    "Jeans",
  ];
  const designer = [
    "Versale",
    "Khaite",
    "Ganni",
    "Alice And Olivia",
    "Lavvin",
    "Zimmmernann",
    "Dolce & Gabbaama",
    "Max Mara",
  ];
 const price=[
    "Under $400",
    " $400- $600",
    "$600- $800",
    "$800- $1000",
    "$1000- $1200",
    "$1400- $1600",
    "$1600 and Above",
 ];
 const color = [
  "Red",
  "Yellow",
  "Pink",
  "Green",
  "Purple",
  "Brown",
  "Black",
  "Orange",
  "White",
  "Blue",
  "Olive",
  "Beige",
  "Brown",
  "Gold",
  "Navy Blue",
  "Marron",
  "Mauve",
  "Rust",
  "Sea Green",
  "Tan",
  "Grey",
  "Teal",
  "Mustard",
  "Off White",
  "Lime Green",
  "Rose"
];
const [searchParams, setSearchParams] = useSearchParams();
const initialCategory = searchParams.getAll("category");
const [category, setCategory] = useState(initialCategory || []);

const handleCategoryFilter = (e) => {
  let newCategory = [...category];
  const value = e.target.value;
  if(newCategory.includes(value)) {
    newCategory= newCategory.filter(el => el!== value)
  } else {
    newCategory.push(value);
  }
  setCategory(newCategory);
};

const handleFilter = (e) => {

}

useEffect(() => {
  let params = {};
  category && (params.category = category);
  console.log(params);
  setSearchParams(params);
}, [category]);

  return (
    <div className="product-filter">
      <div className="filter-head">
        <div>Filters</div>
        <button className="clear">CLEAR ALL</button>
      </div>
      <div className="catergory-border">
        <div className="catergory-head">
          <div>CATEGORY</div>
          <SearchIcon />
        </div>
        {categories?.map((el) => (
          <div key={el} className="filter-items">
            <input type="checkbox" value={el}  name="category" checked={category.includes(el)}
          onChange={(e) => handleCategoryFilter(e)}/>
            <div>{el}</div>
          </div>
        ))}
      </div>
      <div className="brand-border">
        <div className="brand-head">
          <div>DESIGNER</div>
          <SearchIcon />
        </div>
        {designer?.map((el) => (
          <div key={el} className="brand-items">
            <input type="checkbox" value={el}  name="brnd"
          onChange={(e) => handleFilter(e)} />
            <div>{el}</div>
          </div>
        ))}
      </div>
      <div className="price-border">
        <div className="price-head">
          <div>PRICE</div>
          <SearchIcon />
        </div>
        {price?.map((el) => (
          <div key={el} className="price-items">
            <input type="checkbox" value={el}  name="sort"
          onChange={(e) => handleFilter(e)} />
            <div>{el}</div>
          </div>
        ))}
      </div>
      <div className="color-border">
        <div className="color-head">
          <div>COLOR</div>
          <SearchIcon />
        </div>
        {color?.map((el) => (
          <div key={el} className="color-items">
            <input type="checkbox" value={el} name="sort"
          onChange={(e) => handleFilter(e)}  />
            <div>{el}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
