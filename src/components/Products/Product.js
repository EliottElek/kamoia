import React from "react";
import "./Products.css";
import Modal from "../Modal/Modal";
import InputText from "../InputText/InputText";

const Product = ({ product, newProduct }) => {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");

  return (
    <>
      <div className="products__grid__item" onClick={() => setOpen(true)}>
        {newProduct && <div className="new__product">Upcommig in 2024.</div>}
        <img src={product.url} alt="pic" />
        <h3>{product.name}</h3>
        <h4>{product.description} Preorder soon.</h4>
        <h5>{product.price}</h5>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <div
          style={{
            display: "flex",
            padding: "18px",
            flexDirection: "column",
            alignItems: "baseline",
            justifyContent: "center",
          }}
        >
          <p>
            This product will been available for sale very soon. Stay tuned to
            make sure you don't miss the launch !
          </p>
          <p>You can leave your e-mail so that we can keep you in touch.</p>
          <div
            style={{
              gap: "10px",
              display: "flex",
              padding: "18px",
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <InputText
              placeHolder={"Your e-mail..."}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              style={{ width: "120px" }}
              onClick={() => setOpen(false)}
              className="type1_button"
            >
              Send
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Product;
