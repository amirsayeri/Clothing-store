import "./footer.css"
import img1 from "../../../public/ghaleb/icons8-instagram-50.png"
import img2 from "../../../public/ghaleb/icons8-twitter-50.png"
import img3 from "../../../public/ghaleb/icons8-tiktok-50.png"
import img4 from "../../../public/ghaleb/icons8-facebook-50.png"



const Footer = () => {
    return (
        <div className="footer">
            
            <div className="childe_left">
                <div className="div_One">
                    <h3>دسته بندی</h3>
                    <ul>
                        <li>زنانه</li>
                        <li>مردانه</li>
                        <li>اسپورت</li>
                        <li>اکسسوری</li>
                    </ul>
                </div>
                <div className="div_Tow">
                    <h3>راهنمایی</h3>
                    <ul>
                        <li>تک سایز</li>
                        <li>برگشت محصول</li>
                        <li>حمل و نقل</li>
                        <li>راهنما خرید</li>
                    </ul>
                </div>
            </div>



            <div className="child_right">
                <div className="div_Tree">
                    <h3>با ما در تماس باشید</h3>
                    <p>ادرس : تهران - خیابان تجریش - جنب بازار - فروشگاه پوشاک اپورت <br /> مشکین دشت،شهرک بعثت،بلوار کاظمی<br /> شماره تماس (+1)96716 6879</p>
                    <div>
                        <img src={img1} alt="instagram" className="social"/>
                        <img src={img2} alt="twitter" className="social"/>
                        <img src={img3} alt="tiktak" className="social"/>
                        <img src={img4} alt="facebook" className="social"/>
                        
                    </div>
                </div>
                <div className="div_For">
                    <input type="text" className="input_text" placeholder="ایمیل ..."/>
                    <input type="submit" className="input_submit" value={"ارسال"}/>
                </div>
            </div>


        </div>
    )
}

export default Footer