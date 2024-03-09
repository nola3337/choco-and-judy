import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import fetchData from "../../http";
import { plusOne, minusOne, removeCartItem } from "../../http";

export default function Cart() {
  const queryClient = useQueryClient();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
  });

  let dataArray = [];

  let cartItems = [];

  let itemsPrice;

  let totalPrice;

  if (data) {
    dataArray = Object.entries(data).map(([key, value]) => ({
      ...value,
      key: key,
    }));

    cartItems = dataArray.filter((item) => item.isInCart === true);

    itemsPrice = cartItems.map((item) => item.price * item.quantity);

    totalPrice = itemsPrice.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }

  const removeMutation = useMutation({
    mutationFn: removeCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const plusMutation = useMutation({
    mutationFn: plusOne,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const minusMutation = useMutation({
    mutationFn: minusOne,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  function minusOneHandler(productKey, quantity) {
    if (quantity === 1) {
      return;
    }

    minusMutation.mutate(productKey, quantity);
  }

  let content = <p className="cart-list-no-item">目前購物車中尚無商品。</p>;

  if (cartItems.length >= 1) {
    content = cartItems.map((item) => {
      const imgPath = `${process.env.PUBLIC_URL}/products/${item.img}`;

      return (
        <li key={item.key} className="cart-list-item cart-list-grid">
          <img src={imgPath} alt={item.name} />
          <div className="cart-list-item-text">
            <span className="cart-list-item-text-name">{item.name}</span>
            <span className="cart-list-item-text-price">
              NT&#36;{item.price}
            </span>
          </div>
          <div className="cart-list-item-quantity-flexbox">
            <div className="cart-list-item-quantity">
              <div className="cart-list-item-quantity-box">
                <button
                  onClick={() => minusOneHandler(item.key, item.quantity)}
                  className="btn btn-cart-quantity"
                >
                  <ion-icon name="remove-outline"></ion-icon>
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => plusMutation.mutate(item.key)}
                  className="btn btn-cart-quantity"
                >
                  <ion-icon name="add-outline"></ion-icon>
                </button>
              </div>
            </div>
            <div className="cart-list-item-quantity">
              <span>NT&#36;{item.price * item.quantity}</span>
            </div>
          </div>
          <div className="cart-list-item-remove">
            <button
              onClick={() => removeMutation.mutate(item.key)}
              className="btn"
            >
              <ion-icon name="trash-outline"></ion-icon>
            </button>
          </div>
        </li>
      );
    });
  }
  return (
    <div>
      <div className="page-map">
        <Link to="/shop">
          <ion-icon name="home-sharp"></ion-icon>
        </Link>
        <ion-icon name="chevron-forward-sharp"></ion-icon>
        <Link to="/shop/cart">
          <span>我的購物車</span>
        </Link>
      </div>
      <div className="cart">
        <h2>我的購物車</h2>
        <ul className="cart-list">
          <li className="cart-list-tital cart-list-grid">
            <span>商品明細</span>
            <span>數量&#160;&#160;&#8725;&#160;&#160;小計</span>
            <span>刪除</span>
          </li>
          {content}
        </ul>
        <div className="cart-total">
          <span>總計 NT&#36;{totalPrice}</span>
        </div>
        <div className="cart-buy">
          <Link to="/shop">
            <button className="btn btn-cart">繼續逛逛</button>
          </Link>
          <Link>
            <button className="btn btn-cart">結帳</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
