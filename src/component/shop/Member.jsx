export default function Member() {
  return (
    <dialog open className="member">
      <button className="btn member-btn">
        <ion-icon name="close-outline"></ion-icon>
      </button>
      <form className="member-form">
        <div className="member-form-title">
          <ion-icon name="person-circle-outline"></ion-icon>

          <h2>會員註冊</h2>
        </div>
        <div className="member-form-input">
          <label htmlFor="text">帳號</label>
          <input type="text" required />
        </div>
        <div className="member-form-input">
          <label htmlFor="text">密碼</label>
          <input type="password" required />
        </div>
        <div className="member-form-btns">
          <div className="member-form-login">
            <span>已有帳號?</span>
            <button className="btn">會員登入</button>
          </div>
          <button className="btn">註冊</button>
        </div>
      </form>
    </dialog>
  );
}
