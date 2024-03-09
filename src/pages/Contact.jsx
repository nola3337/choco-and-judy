import { uploadContactData } from "../http";
import { useMutation } from "@tanstack/react-query";

export default function Contact() {
  const { mutate } = useMutation({
    mutationFn: uploadContactData,
    onSuccess: () => window.confirm("送出成功!"),
  });

  function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target);

    const data = Object.fromEntries(fd.entries());

    console.log(data);

    mutate(data);

    e.target.reset();
  }
  return (
    <div className="contact">
      <h2>
        <ion-icon name="chatbubbles-outline"></ion-icon>
        <span>聯絡我們</span>
      </h2>
      <span className="contact-subtitle">歡迎留下您寶貴的意見。</span>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-form-input">
          <label htmlFor="title">主旨&#8727;</label>
          <input type="text" name="title" required />
        </div>
        <div className="contact-form-input">
          <label htmlFor="email">您的信箱</label>
          <input type="email" name="email" />
        </div>
        <div className="contact-form-input">
          <label htmlFor="content">內容&#8727;</label>
          <textarea name="content" cols="30" rows="10" required></textarea>
        </div>
        <button className="btn">送出</button>
      </form>
    </div>
  );
}
