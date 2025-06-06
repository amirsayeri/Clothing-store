import "./contactus.css";

const Contactus = () => {
  return (
    <div className="contact">
      <div className="titleTopContact">
        <h3>با ما در تماس باشید</h3>
      </div>
      <div className="boxContact">
        <div className="data_store">
          <div className="call">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios/50/phone-disconnected.png"
              alt="phone-disconnected"
            />
            <p>021-91017700</p>
          </div>
          <div className="support">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/wired/64/online-support--v2.png"
              alt="online-support--v2"
            />
            <p>
              شنبه تا چهارشنبه از 9:00 تا 22:00 - پنجشنبه ها از 9:00 تا
              14:00{" "}
            </p>
          </div>
          <div className="meail">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios/50/new-post--v1.png"
              alt="new-post--v1"
            />
            <p>info@yama.ir</p>
          </div>
          <div className="location">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios/50/marker--v1.png"
              alt="marker--v1"
            />
            <p>تهران، سعادت آباد، بالاتر از میدان كاج، خیابان ششم</p>
          </div>
        </div>
        <div className="input_BoxContact">
          <h3>برای ما پیام بزارید</h3>
          <form className="form_contact">
            <input type="text" placeholder="نام و نام خانوادگی " />
            <input type="email" placeholder="ایمیل" />
            <textarea
              className="textareaBox"
              placeholder="توضیحات ..."
            ></textarea>
            <button className="btnContact" type="submit">
              ارسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
