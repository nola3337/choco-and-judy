import { useDispatch, useSelector } from "react-redux";
import { OpenActions } from "../../store/OpenSlice";
import { useRef } from "react";

export default function Member() {
  const dispatch = useDispatch();
  const toggleValue = useSelector((state) => state.open.member);
  const dialog = useRef();

  function handleConfirm() {
    window.confirm("目前未開放會員註冊，請見諒。");
  }

  function handleToggleMember() {
    dispatch(OpenActions.toggleMember());
  }

  if (dialog.current) {
    if (toggleValue) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }

  return (
    <dialog ref={dialog} className="member">
      <button onClick={handleToggleMember} className="btn member-btn">
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
            <button className="btn btn-login">會員登入</button>
          </div>
          <button onClick={handleConfirm} className="btn btn-login">
            註冊
          </button>
        </div>
      </form>
    </dialog>
  );
}
