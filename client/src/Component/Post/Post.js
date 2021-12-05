import react, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Post/Post.css'
class Post extends Component {
  render() {
    return (
      <div>
        <div>

          {/* Jumbotron */}
          <div id="intro" className="p-5 text-center bg-light">
            <h1 className="mb-0 h1">Tiêu đề bài viết</h1>
          </div>
          {/* Jumbotron */}
          {/*Main Navigation*/}
          {/*Main layout*/}
          <main className="mt-4 mb-5">
            <div className="container">
              {/*Grid row*/}
              <div className="row">
                {/*Grid column*/}
                <div className="col-md-8 mb-4">
                  {/*Section: Post data-mdb*/}
                  <section className="border-bottom mb-4">
                    <img src="https://motogo.vn/wp-content/uploads/2020/02/Vinpearl-Safari-zoo-park_1066453433-1024x683.jpg" className="author-img" alt="" />
                    <div className="row align-items-center mb-4">
                      <div className="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
                        <img src="https://secure.gravatar.com/avatar/97f31199dc9937dd801250f6c4a4309b?s=464" className="rounded-5 shadow-1-strong me-2" height={35} alt="" loading="lazy" />
                        <span> Published <u>22.11.2021</u> by</span>
                        <a href className="text-dark"> Ly Thanh Co</a>
                      </div>
                      <div className="col-lg-6 text-center text-lg-end">
                        <button type="button" className="btn btn-primary px-3 me-1" style={{ backgroundColor: '#3b5998' }}>
                          <i className="fab fa-facebook-f" />
                        </button>
                      </div>
                    </div>
                  </section>
                  {/*Section: Post data-mdb*/}
                  {/*Section: Text*/}
                  <section>
                    <p>
                      Vinpearl Safari Phú Quốc, thiên đường muôn thú.
                      Đã nghe nhiều về các safari tại Đông Phi nơi bạn lái xe vào sâu bên trong khu sinh sống hoang dã và ngắm
                      nhìn các loài thú sinh sống trong môi trường tự nhiên, nhưng mình lại chưa có dịp đi. Đợt ghé Vinpearl Safari
                      Phú Quốc mình vốn không mong chờ nhiều vì chỉ nghĩ đây là một vườn bách thú đơn giản và vô tình có tên gọi Safari mà thôi.
                  </p>
                    <p><strong>Vinpearl Safari Phú Quốc có những gì?</strong></p>
                    <p>
                      Tại đây, du khách có thể ngồi xe bus thăm quan những loài thú hoang dã lần lượt từ những bầy thú hiền lành như hươu sao,
                      linh dương và qua khu vực động vật săn mồi như gấu ngựa, sư tử Châu Phi... Cảm giác đi giữa con đường như vậy rất thực và
                      có thể thấy chúng trong một không gian rộng lớn hơn khu vực nuôi nhốt thường thấy tại sở thú.
                  </p>
                    {/* <p className="note note-light">
                        <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio odit consequatur porro sequi ab distinctio modi. Rerum cum dolores sint,
                    adi
                  pisci ad veritatis laborum eaque illum saepe mollitia ut voluptatum.
                  </p> */}
                    <p>
                      Cơ yêu thích việc có thể tương tác với nhiều loài thú và luôn có nhân viên chỉ dẫn rất cặn kẽ để không gây tổn thương cho chúng.
                      Tuy nhiên, điều mình tâm đắc nhất tại Vinpearl Safari Phú Quốc chính là việc nơi đây không chỉ là vườn bách thú để du khách tham
                      quan mà còn là nơi bảo tồn động vật quý hiếm. Đã có 4 chú sư tử Châu Phi ra đời tại đây, và lần đầu tiên 2 bé tê giác được sinh
                      ra – loài tê giác thường mang thai rất lâu và tỷ lệ sinh thấp, nên việc chúng ra đời tại Phú Quốc quả là kỳ tích. Cơ may mắn được
                      nhân viên dắt vào để tương tác cùng với tê giác con và sư tử con, một trải nghiệm đáng nhớ.
                  </p>
                    <img src="https://motogo.vn/wp-content/uploads/2020/02/bi-kip-tung-hoanh-vinpearl-land-va-safari-phu-quoc-sieu-tiet-kiem-5becfe3f0d54c.jpg" className="author-img" alt="" />
                    <p>
                      Có thể nói Vinpearl Safari Phú Quốc là một địa điểm nên ghé nhất trong chuyến đi Phú Quốc của bạn thay vì chỉ đi biển không thôi.
                      Đặc biệt từ 22.11.2021 - 04.12.2021 Vinpearl đang tổ chức cuộc thi “My Vinpearl My moment - TRỌN KHOẢNH KHẮC CÙNG VINPEARL”
                  </p>
                  </section>
                  {/*Section: Text*/}
                  {/*Section: Share buttons*/}
                  <section className="text-center border-top border-bottom py-4 mb-4">
                    <p><strong>Share with your friends:</strong></p>
                    <a href='https://www.facebook.com/'>
                    <button type="button" className="btn btn-primary me-1" style={{ backgroundColor: '#3b5998' }}>
                      <i className="fab fa-facebook-f" />
                    </button>
                    </a>
                    <button type="button" className="btn btn-primary me-1">
                      <i className="fas fa-comments me-2" />Add comment
                    </button>
                  </section>
                  {/*Section: Share buttons*/}
                  {/*Section: Author*/}
                  <section className="border-bottom mb-4 pb-4">
                    <div className="row">
                      <div className="col-3">
                        <img src="https://secure.gravatar.com/avatar/97f31199dc9937dd801250f6c4a4309b?s=464" className="img-fluid shadow-1-strong rounded-5" alt="" />
                      </div>
                      <div className="col-9">
                        <p className="mb-2"><strong>Ly Thanh Co</strong></p>
                        <a href className="text-dark"><i className="fab fa-facebook-f me-1" /></a>
                        <a href className="text-dark"><i className="fab fa-twitter me-1" /></a>
                        <a href className="text-dark"><i className="fab fa-linkedin me-1" /></a>
                        <p>
                          Bắt đầu cơn nghiện du lịch từ tháng 5/2014, đến nay Cơ đã đi để những câu chuyện kể lại dài hơn
                          số tuổi và để làm tuổi trẻ thêm dài.
                      </p>
                      </div>
                    </div>
                  </section>
                  {/*Section: Author*/}
                  {/*Section: Comments*/}
                  <section className="border-bottom mb-3">
                    <p className="text-center"><strong>Comments: 3</strong></p>
                    {/* Comment */}
                    <div className="row mb-4">
                      <div className="col-2">
                        <img src="https://img.hoidap247.com/picture/question/20210116/large_1610807966202.jpg?v=0" className="img-fluid shadow-1-strong rounded-5" alt="" />
                      </div>
                      <div className="col-10">
                        <p className="mb-2"><strong>Ma Hai Nhat</strong></p>
                        <p>
                          Khu vui chơi Vinpearl trên toàn quốc hiện nay là đẹp nhất VN rồi, em ở NT hay đi Vinpearl nha trang
                          em thấy nó đẹp có thua gì Disneyland nước ngoài đâu.
                      </p>
                      </div>
                    </div>
                    {/* Comment */}
                    <div className="row mb-4">
                      <div className="col-2">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(25).jpg" className="img-fluid shadow-1-strong rounded-5" alt="" />
                      </div>
                      <div className="col-10">
                        <p className="mb-2"><strong>Gái Tây nhí nhảnh</strong></p>
                        <p>
                          Tuyệt vời
                      </p>
                      </div>
                    </div>
                    {/* Comment */}
                    <div className="row mb-4">
                      <div className="col-2">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg" className="img-fluid shadow-1-strong rounded-5" alt="" />
                      </div>
                      <div className="col-10">
                        <p className="mb-2"><strong>Gái UIT</strong></p>
                        <p>
                          Đẹp quá
                          <i class="fas fa-heart"></i>
                        </p>
                      </div>
                    </div>
                  </section>
                  {/*Section: Comments*/}

                  {/*Section: Reply*/}
                  <section className="comment">
                    <p className="text-center"><strong>Bình Luận</strong></p>
                    <form>
                      {/* Name input */}
                      <div className="form-outline mb-4">
                        <input type="text" id="form4Example1" className="form-control" />
                        <label className="form-label" htmlFor="form4Example1">UserName</label>
                      </div>
                      {/* Email input */}
                      <div className="form-outline mb-4">
                        <input type="email" id="form4Example2" className="form-control" />
                        <label className="form-label" htmlFor="form4Example2">Email</label>
                      </div>
                      {/* Message input */}
                      <div className="form-outline mb-4">
                        <textarea className="form-control" id="form4Example3" rows={4} defaultValue={""} />
                        <label className="form-label" htmlFor="form4Example3">Nội dung</label>
                      </div>


                      {/* Submit button */}
                      <button type="submit" className="btn btn-primary btn-block mb-4">
                        Đăng
                      </button>
                    </form>
                  </section>
                  {/*Section: Reply*/}
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-md-4 mb-4">
                  {/*Section: Sidebar*/}
                  <section className="sticky-top" style={{ top: '80px' }}>
                    {/*Section: Ad*/}
                    <section className="text-center border-bottom pb-4 mb-4">
                      <div className="bg-image hover-overlay ripple mb-4">
                        <img src="https://image.thanhnien.vn/w2048/Uploaded/2021/bfznsfyr.bn/2020_10_15/lazada_czno.jpg" className="img-fluid" />
                        <a href="https://www.lazada.vn/?spm=a2o4n.tm80117101.header.dhome.6745fd2kfd2kUl" target="_blank">
                          <div className="mask" style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }} />
                        </a>
                      </div>
                    </section>
                    {/*Section: Ad*/}
                    {/*Section: Ad*/}
                    <section className="text-center">
                      <img src="https://cdn.noron.vn/2018/04/20/0cd066340edcef9ad34321f7f66dc20f.jpeg" className="  img-fluid " />
                    </section>
                    {/*Section: Ad*/}
                  </section>
                  {/*Section: Sidebar*/}
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
            </div>
          </main>
          {/*Main layout*/}
          {/*Footer*/}
          <footer className="bg-light text-lg-start">
            <hr className="m-0" />
            <div className="text-center py-4 align-items-center">
              <p>Theo dõi chúng tôi trên</p>
              <a href="https://www.youtube.com/" className="btn btn-primary m-1" role="button" rel="nofollow" target="_blank">
                <i className="fab fa-youtube" />
              </a>
              <a href="https://www.facebook.com/" className="btn btn-primary m-1" role="button" rel="nofollow" target="_blank">
                <i className="fab fa-facebook-f" />
              </a>

            </div>
            {/* Copyright */}
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              © 2021 Copyright:
            <a className="text-dark" href="#">TRAVELLER</a>
            </div>
            {/* Copyright */}
          </footer>
          {/*Footer*/}
        </div>
      </div>
    )
  }
}
export default Post