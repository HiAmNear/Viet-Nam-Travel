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
                                        <h4><strong>V??? Vi???t Nam</strong></h4>
                                        <p className="text-muted">
                                            Vi???t Nam ???? v?? ??ang l?? m???t trong nh???ng ??i???m ?????n thu h??t kh??ch du l???ch trong v?? ngo??i n?????c.
                                            Vi???t Nam ???????c UNESCO c??ng nh???n c?? r???t nhi???u di s???n c?? th??? k??? ?????n nh?? 8 di s???n ???????c UNESCO c??ng nh???n,
                                            40.000 di t??ch v?? danh lam th???ng c???nh, v???i 3000 di t??ch ???????c x???p h???ng qu???c gia v?? 5000 di t??ch ?????t c???p t??nh.
                                            Tr??n ?????a b??n to??n qu???c c??n c?? 117 b???o t??ng l??u gi??? c??c hi???n v???t v?? l???ch s??? h??o h??ng c???a d??n t???c.
                                            </p>
                                        <p><strong>B???n ???? s???n s??ng ch??a ?</strong></p>
                                        <p className="text-muted">
                                            V???y c??n ch???n ch??? g?? n???a m?? h??y xem nh???ng review ?????a ??i???m du l???ch d?????i ????y
                                            ????? c?? th??? kh??m ph?? Vi???t Nam xinh ?????p n??y n??o !
                  </p>
                                    </div>
                                </div>
                            </section>
                            {/*Section: Content*/}
                            <hr className="my-5" />
                            {/*Section: Content*/}
                            <section className="text-center">
                                <h3 className="mb-5"><strong>DU L???CH 3 MI???N</strong></h3>
                                <div className="row">

                                    {/*Mi???n B???c*/}
                                    <div className="col-lg-4 col-md-12 mb-4">
                                        <div className="card">
                                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                <Link to="/ListOfPost1">
                                                    <img src="https://nhanhmua.com/wp-content/uploads/2021/01/sapa-dia-diem-du-lich-cuoi-nam.jpg" className="img-fluid" />
                                                </Link>
                                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">MI???N B???C</h5>
                                                <p className="card-text">
                                                Nh???ng ai ???? t???ng ?????t ch??n ?????n mi???n n??i ph??a B???c h???n s??? m?? ?????m v??? ?????p thi??n nhi??n v?? con ng?????i n??i ????y
                                                </p>
                                                <Link to="/ListofPost1" className="btn btn-primary">Xem th??m</Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/*Mi???n Trung*/}
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="card">
                                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                <Link to="/ListofPost2"><img src="https://thainguyentv.vn/stores/news_dataimages/thuhang/022018/12/10/nhung-diem-du-xuan-dep-nhat-mien-trung-36-.6931.jpg" className="img-fluid" /></Link>
                                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">MI???N TRUNG</h5>
                                                <p className="card-text">
                                                    S??? h???u nhi???u di s???n qu?? b??u, n???n ???m th???c ??a d???ng ,
                                                    mi???n Trung ???? nu??i d?????ng m???t ni???m nh??? kh??ng th??i trong l??ng ng?????i
                                                </p>
                                                <Link to="/ListofPost2" className="btn btn-primary">Xem th??m</Link>
                                            </div>
                                        </div>

                                    {/*Mi???n Nam*/}
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="card">
                                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                                <Link to="/ListofPost3"><img src="https://pystravel.vn/uploads/posts/albums/2913/ce0fa2d4ac1cfdacba291ded985e8788.jpg" className="img-fluid" /></Link>
                                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">MI???N NAM</h5>
                                                <p className="card-text">
                                                    Kh??m ph?? tr???n v???n v??? ?????p v??? thi??n nhi??n,
                                                    con ng?????i v?? n??t ?????p c???a n??i ????y lu??n l?? ??i???u thu h??t t??n ????? y??u th??ch x?? d???ch
                                                </p>
                                                <Link to="/ListofPost3" className="btn btn-primary">Xem th??m</Link>
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
                            <p>Theo d??i ch??ng t??i tr??n</p>
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
                            ?? 2021 Copyright:
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