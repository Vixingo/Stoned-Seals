import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
const options = {
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5,
        },
        1200: {
            items: 11,
        },
    },
};
function Slider2() {
    return (
        <>
            <section className="Slider2 mx-3">
                {" "}
                <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={20}
                    autoplay={true}
                    autoplayTimeout={2000}
                    autoplaySpeed={2000}
                    {...options}
                    center={true}
                >
                    <div className="item">
                        <img
                            src="../img/NFT.png"
                            style={{
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/NFT.png"
                            style={{
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/NFT.png"
                            style={{
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/NFT.png"
                            style={{
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/NFT.png"
                            style={{
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/NFT.png"
                            style={{
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/NFT.png"
                            style={{
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/NFT.png"
                            style={{
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/NFT.png"
                            style={{
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/NFT.png"
                            style={{
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/NFT.png"
                            style={{
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../img/NFT.png"
                            style={{
                                boxShadow:
                                    "5px 5px 5px rgba(100, 100, 100, 0.2)",
                            }}
                            alt=""
                        />
                    </div>
                </OwlCarousel>
            </section>
        </>
    );
}

export default Slider2;
