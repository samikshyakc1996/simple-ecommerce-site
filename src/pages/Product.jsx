import Card from "../components/Card";
import { v4 as uuid } from "uuid";
import { IoShirt } from "react-icons/io5";
import { FaVest } from "react-icons/fa";
import {
  GiArmoredPants,
  GiMonclerJacket,
  GiShirt,
  GiNinjaArmor,
} from "react-icons/gi";

export default function Products() {
  const products = [
    { name: "Vest", price: 42, icon: <FaVest /> },
    { name: "Jacket", price: 10, icon: <GiMonclerJacket /> },
    { name: "Sweater", price: 31, icon: <GiShirt /> },
    { name: "T-shirt", price: 60, icon: <IoShirt /> },
    { name: "Pants", price: 34, icon: <GiArmoredPants /> },
    { name: "Jumper", price: 42, icon: <GiNinjaArmor /> },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <Card
          key={uuid()}
          icon={product.icon}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}
