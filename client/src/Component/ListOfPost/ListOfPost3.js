import react, { Component } from 'react'
import '../ListOfPost/ListOfPost.css'
import { Link } from 'react-router-dom'
class ListOfPost3 extends Component {
    render() {
        return (
            <div>
                <div className='background'>
                    {/* Jumbotron */}
                    <div id="bottom" className="p-5 text-center bg-light">
                        <h1 className="mb-3 h1">{/*context*/}MIỀN NAM NƯỚC TA</h1>
                    </div>
                    {/* Jumbotron */}
                    {/*Main Navigation*/}
                    {/*Main layout*/}
                    <main className="my-5">
                        <div className="container">
                            {/*Grid row*/}
                            <div className="row">
                                {/*Grid column*/}
                                <div className="col-md-9 mb-4">
                                    {/*Section: Content*/}
                                    <section>
                                        {/* Post */}
                                        <div className="row">
                                            <div className="col-md-4 mb-4">
                                                <div className="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
                                                    <Link to="/Post">
                                                        <img src="https://theki.vn/wp-content/uploads/2019/09/thuyet-minh-dia-diem-du-lich-thanh-pho-ho-chi-minh-678x381.jpg" className="img-fluid" />
                                                    </Link>
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />

                                                </div>
                                            </div>
                                            <div className="col-md-8 mb-4">
                                                <Link to="/Post" className="ink">
                                                    <h5>Thành phố Hồ Chí Minh</h5>
                                                    <p>
                                                        Thành phố Hồ Chí Minh lộng lẫy, xa hoa trong ánh đèn của đô thị,  
                                                        với những nét kiến trúc duyên dáng từ thời Pháp thuộc. Nhắc đến cảnh đẹp Việt Nam, chắc 
                                                        chắn ai cũng muốn đến đây một lần để tham quan...
                                                    </p>
                                                    <button type="button" className="btn btn-primary">Read</button>
                                                </Link>
                                            </div>
                                        </div>
                                        {/* Post */}
                                        <div className="row">
                                            <div className="col-md-4 mb-4">
                                                <div className="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
                                                    <Link to="/Post">
                                                        <img src="https://cdn3.ivivu.com/2014/10/Du-lich-vung-tau-cam-nang-tu-a-den-z-iVIVU.com-1.jpg" className="img-fluid" />
                                                    </Link>
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />

                                                </div>
                                            </div>
                                            <div className="col-md-8 mb-4">
                                                <Link to="/Post" className="ink">
                                                    <h5>Vũng Tàu</h5>
                                                    <p>
                                                        Thành phố Vũng Tàu không chỉ bình dị, chan hòa mà còn vô vàn những danh lam thắng cảnh, những 
                                                        địa điểm du lịch đặc sắc, thu hút. Ở đây được giới trẻ yêu thích với vẻ đẹp thiên nhiên cùng nhiều điểm du lịch 
                                                        thú vị ...
                                                    </p>
                                                    <button type="button" className="btn btn-primary">Read</button>
                                                </Link>
                                            </div>
                                        </div>
                                        {/* Post */}
                                        <div className="row">
                                            <div className="col-md-4 mb-4">
                                                <div className="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
                                                    <Link to="/Post">
                                                        <img src="https://toplist.vn/images/800px/cau-can-tho-311680.jpg" className="img-fluid" />
                                                    </Link>
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />

                                                </div>
                                            </div>
                                            <div className="col-md-8 mb-4">
                                                <Link to="/Post" className="ink">
                                                    <h5>Cần Thơ</h5>
                                                    <p>
                                                        Cần Thơ là một tỉnh lớn thuộc đồng bằng sông Cửu Long miền Tây Nam Bộ Việt Nam. Nhắc đến du lịch Cần Thơ, 
                                                        người ta sẽ nghĩ ngay đến sự nhộn nhịp của chợ nổi vào mỗi buổi sáng sớm...
                                                    </p>
                                                    <button type="button" className="btn btn-primary">Read</button>
                                                </Link>
                                            </div>
                                        </div>
                                        {/* Post */}
                                        <div className="row">
                                            <div className="col-md-4 mb-4">
                                                <div className="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
                                                    <Link to="/Post">
                                                        <img src="https://motogo.vn/wp-content/uploads/2020/02/Vinpearl-Safari-zoo-park_1066453433-1024x683.jpg" className="img-fluid" />
                                                    </Link>
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />

                                                </div>
                                            </div>
                                            <div className="col-md-8 mb-4">
                                                <Link to="/Post" className="ink">
                                                    <h5> VinPearl Safari Phú Quốc</h5>
                                                    <p>
                                                    Tại đây, du khách có thể ngồi xe bus thăm quan những loài thú hoang dã lần lượt 
                                                    từ những bầy thú hiền lành như hươu sao, linh dương và qua khu vực động vật săn mồi như 
                                                    gấu ngựa, sư tử Châu Phi... 
                                                    </p>
                                                    <button type="button" className="btn btn-primary">Read</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </section>
                                    {/*Section: Content*/}
                                </div>
                                {/*Grid column*/}
                                {/*Grid column*/}
                                <div className="col-md-3 mb-4">
                                    {/*Section: Sidebar*/}
                                    <section className="sticky-top" style={{ top: '80px' }}>
                                        {/*Section: Ad*/}
                                        <section className="text-center border-bottom pb-4 mb-4">
                                            <div className="bg-image hover-overlay ripple mb-4">
                                                <img src="https://image.thanhnien.vn/w2048/Uploaded/2021/bfznsfyr.bn/2020_10_15/lazada_czno.jpg" className="img-fluid" />
                                                <a href="#" target="_blank">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }} />
                                                </a>
                                            </div>

                                        </section>
                                        {/*Section: Ad*/}
                                        {/*Section: Video*/}
                                        <section className="text-center">
                                            <h5 className="mb-4">Đôi nét miền Nam</h5>
                                            <div className="embed-responsive embed-responsive-16by9 shadow-4-strong">

                                                <iframe width="708" height="398" src="https://www.youtube.com/embed/1GXSmIuRKy8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                        </section>
                                        {/*Section: Video*/}
                                    </section>
                                    {/*Section: Sidebar*/}
                                </div>
                                {/*Grid column*/}
                            </div>
                            {/*Grid row*/}
                            {/* Pagination */}
                            <nav className="my-4" aria-label="...">
                                <ul className="pagination pagination-circle justify-content-center">
                                    <li className="page-item">
                                        <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
                                    </li>
                                    <li className="page-item active" aria-current="page">
                                        <a className="page-link" href="#">1<span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </main>
                    {/*Main layout*/}
                    {/*Footer*/}
                    <footer className="bg-light text-lg-start">

                        <hr className="m-0" />
                        <div className="text-center py-4 align-items-center">
                            <p>Theo dõi chúng tôi trên</p>
                            <a href="#" className="btn btn-primary m-1" role="button" rel="nofollow" target="_blank">
                                <i className="fab fa-youtube" />
                            </a>
                            <a href="#" className="btn btn-primary m-1" role="button" rel="nofollow" target="_blank">
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
export default ListOfPost3