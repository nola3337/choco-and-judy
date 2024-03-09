import { Link } from "react-router-dom";

export default function CMSHome() {
  return (
    <div className="cms-home">
      <h2>後台</h2>
      <p>可新增或編輯，以及刪除商品。</p>
      <Link to="/cms/add-product">
        <button className="btn btn-cms-home">新增商品</button>
      </Link>
    </div>
  );
}
