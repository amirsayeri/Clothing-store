import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="oneBox">
        <h3>صفحات</h3>
        <ul className="ul_oneBox">
          <li>خانه</li>
          <li>محصولات</li>
          <li>درباره ما</li>
          <li>راه ارتباطی با ما</li>
        </ul>
      </div>
      <div className="twoBox">
        <h3>لباس</h3>
        <ul className="ul_twoBox">
          <li>لباس مردانه</li>
          <li>لباس زنانه</li>
          <li>اکسسوری</li>
          <li>کفش اسپرت</li>
        </ul>
      </div>
      <div className="threeBox">
        <h3>راهنمای خرید از فروشگاه</h3>
        <ul className="ul_threeBox">
          <li>نحوه ثبت سفارش</li>
          <li>رویه ارسال سفارش</li>
          <li>شیوه پرداخت</li>
          <li>حریم خصوصی</li>
        </ul>
      </div>
      <div className="fourBox">
        <div className="emailBoxFooter">
          <input type="text" placeholder="ایمیل شما ..." />
          <button>ثبت</button>
        </div>
        <div className="socialBox">
          <h4>با ما همراه باشید</h4>
          <div className="social">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/sf-regular/48/facebook-new.png"
              alt="facebook-new"
            />{" "}
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/sf-regular/48/instagram-new.png"
              alt="instagram-new"
            />{" "}
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/sf-regular/48/linkedin.png"
              alt="linkedin"
            />{" "}
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/sf-regular/48/whatsapp.png"
              alt="whatsapp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
