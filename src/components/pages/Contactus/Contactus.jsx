import "./contactus.css"

const Contactus = () => {
    return (
        <div className="contact">


            <div className="top_contact">
                <p className="text_Tow">با ما در تماس باشید</p>
            </div>


            <div className="botton_contact">
                <div className="childLeft_contact">
                    <p className="textleft_contact">استعلام آنلاین</p>
                    <form className="formContact">
                        <input type="text" placeholder="نام" className="inputName_contact"/>
                        <input type="text" placeholder="ایمیل" className="inputEmail_contact"/>
                        <input type="text" placeholder="شماره تماس" className="inputPhone_contact"/>
                        <textarea name="Massage"  cols="67" rows="10" placeholder="توضیحات ..." className="textAria_contact"></textarea>
                        <input type="button" value="ارسال" className="btnFormSubmit"/>
                    </form>
                </div>
                <div className="childRight_contact">
                    <p className="pTop_conteact">اصلاعات تماس</p>
                    <p className="text_address_contact">michelle@signaturerealtynj.con <br /> (909) 686-1200</p>
                    <h3 className="h3Tilte_contact">آدرس شعبه 1</h3>
                    <p>233 North Avenue <br /> westfield, NJ 07090</p>
                    <h3 className="h3Tilte_contact">آدرس شعبه 2</h3>
                    <p>355 North Avenue <br /> Short, NJ 07540</p>
                    <h3 className="h3Tilte_contact">دفتر اداری</h3>
                    <p>549 Millburn Avenue <br /> Short, NJ 07821</p>
                </div>
            </div>


        </div>
    )
}

export default Contactus