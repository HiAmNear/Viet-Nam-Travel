import react, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../TopPage/TopPage.css"


class TopPage extends Component {
    render() {
        return (
            <div >
                <div className="space">
                    {/* Carousel wrapper */}
                    <div id="introCarousel" className="carousel slide carousel-fade shadow-2-strong" data-mdb-ride="carousel">
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                            <li data-mdb-target="#introCarousel" data-mdb-slide-to={0} className="active" />
                            <li data-mdb-target="#introCarousel" data-mdb-slide-to={1} />
                            <li data-mdb-target="#introCarousel" data-mdb-slide-to={2} />
                        </ol>
                        {/* Inner */}
                        <div className="carousel-inner">
                            {/* Single item */}
                            <div className="carousel-item active">
                                <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
                                    <div className="d-flex justify-content-center align-items-center h-100">
                                        <div className="text-white text-center">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Single item */}
                            <div className="carousel-item">
                                <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
                                    <div className="d-flex justify-content-center align-items-center h-100">
                                        <div className="text-white text-center">
                                            {/* context Carousel 1*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Single item */}
                            <div className="carousel-item">
                                <div className="mask" >
                                    <div className="d-flex justify-content-center align-items-center h-100">

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Inner */}
                        {/* Controls */}
                        <a className="carousel-control-prev" href="#introCarousel" role="button" data-mdb-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#introCarousel" role="button" data-mdb-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    {/* Carousel wrapper */}
                    {/*Main Navigation*/}
                    {/*Main layout*/}
                    <main className="mt-5">
                        <div className="container">
                            {/*Section: Content*/}
                            <section>
                                <div className="row">
                                    <div className="col-md-6 gx-5 mb-4">
                                        <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                                            <img src="https://dulichtoday.vn/wp-content/uploads/2017/04/vinh-Ha-Long.jpg" className="toppageimgmain" />
                                            <a href="#!">
                                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 gx-5 mb-4 text" >
                                        <h4><strong>Về Việt Nam</strong></h4>
                                        <p className="text-muted">
                                            Việt Nam đã và đang là một trong những điểm đến thu hút khách du lịch trong và ngoài nước.
                                            Việt Nam được UNESCO công nhận có rất nhiều di sản có thể kể đến như 8 di sản được UNESCO công nhận,
                                            40.000 di tích và danh lam thắng cảnh, với 3000 di tích được xếp hạng quốc gia và 5000 di tích đạt cấp tính.
                                            Trên địa bàn toàn quốc còn có 117 bảo tàng lưu giữ các hiện vật và lịch sử hào hùng của dân tộc.
                                            </p>
                                        <p><strong>Bạn đã sẵn sáng chưa ?</strong></p>
                                        <p className="text-muted">
                                            Vậy còn chần chừ gì nữa mà hãy xem những review địa điểm du lịch dưới đây
                                            để có thể khám phá Việt Nam xinh đẹp này nào !
                  </p>
                                    </div>
                                </div>
                            </section>
                            {/*Section: Content*/}
                            <hr className="my-5" />
                            {/*Section: Content*/}
                            <section className="text-center">
                                <h3 className="mb-5"><strong>DU LỊCH 3 MIỀN</strong></h3>
                                <div className="row">

                                    {/*Miền Bắc*/}
                                    <div className="col-lg-4 col-md-12 mb-4">
                                        <div className="card">
                                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                <Link to="/ListOfPost1">
                                                    <img src="https://nhanhmua.com/wp-content/uploads/2021/01/sapa-dia-diem-du-lich-cuoi-nam.jpg" className="img-fluid" />
                                                </Link>
                                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">MIỀN BẮC</h5>
                                                <p className="card-text">
                                                Những ai đã từng đặt chân đến miền núi phía Bắc hẳn sẽ mê đắm vẻ đẹp thiên nhiên và con người nơi đây
                                                </p>
                                                <Link to="/ListofPost1" className="btn btn-primary">Xem thêm</Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/*Miền Trung*/}
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="card">
                                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                <Link to="/ListofPost2"><img src="https://thainguyentv.vn/stores/news_dataimages/thuhang/022018/12/10/nhung-diem-du-xuan-dep-nhat-mien-trung-36-.6931.jpg" className="img-fluid" /></Link>
                                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">MIỀN TRUNG</h5>
                                                <p className="card-text">
                                                    Sở hữu nhiều di sản quý báu, nền ẩm thực đa dạng ,
                                                    miền Trung đã nuôi dưỡng một niềm nhớ không thôi trong lòng người
                                                </p>
                                                <Link to="/ListofPost2" className="btn btn-primary">Xem thêm</Link>
                                            </div>
                                        </div>

                                    {/*Miền Nam*/}
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="card">
                                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                <Link to="/ListofPost3"><img src="https://pystravel.vn/uploads/posts/albums/2913/ce0fa2d4ac1cfdacba291ded985e8788.jpg" className="img-fluid" /></Link>
                                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">MIỀN NAM</h5>
                                                <p className="card-text">
                                                    Khám phá trọn vẹn vẻ đẹp về thiên nhiên,
                                                    con người và nét đẹp của nơi đây luôn là điều thu hút tín đồ yêu thích xê dịch
                                                </p>
                                                <Link to="/ListofPost3" className="btn btn-primary">Xem thêm</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*Section: Content*/}
                            <hr className="my-5" />
                            {/*Section: Content*/}

                        </div>
                    </main>
                    {/*Main layout*/}
                    {/*Footer*/}
                    <footer className="bg-light text-lg-start">

                        <div className="text-center py-4 align-items-center">
                            <p>Theo dõi chúng tôi trên</p>
                            <a href="https://www.youtube.com/" className="btn btn-primary m-1" role="button" rel="nofollow" target="_blank">
                                <i className="fab fa-youtube" />
                            </a>
                            <a href="https://vi-vn.facebook.com/" className="btn btn-primary m-1" role="button" rel="nofollow" target="_blank">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="https://twitter.com/?lang=vi" className="btn btn-primary m-1" role="button" rel="nofollow" target="_blank">
                                <i className="fab fa-twitter" />
                            </a>

                        </div>
                        {/* Copyright */}
                        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                            © 2021 Copyright:
            <a className="text-dark" href="#">Traveller</a>
                        </div>
                        {/* Copyright */}
                    </footer>
                </div>
            </div >
        )
    }
}
const app = () => {

}
export default TopPage;