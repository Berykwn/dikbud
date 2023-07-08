import React, { useEffect } from "react";

const Carousel = ({ carousel }) => {
    useEffect(() => {
        // Hilangkan hash pada URL
        const clearHash = () => history.replaceState(null, null, "/");
        window.addEventListener("hashchange", clearHash);
        return () => window.removeEventListener("hashchange", clearHash);
    }, []);

    return (
        <React.Fragment>
            <div className="carousel w-full lg:rounded-lg shadow">
                {carousel && carousel.length > 0 ? (
                    carousel.map((carouselItem, i) => (
                        <div
                            key={carouselItem.id}
                            id={`slide${i + 1}`}
                            className="carousel-item relative w-full"
                        >
                            <img
                                src={`/storage/img/carousels/${carouselItem.img}`}
                                alt={carouselItem.name}
                                className="w-full h-[600px]"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a
                                    href={`#slide${i}`}
                                    className="btn btn-circle"
                                >
                                    ❮
                                </a>
                                <a
                                    href={`#slide${i + 2}`}
                                    className="btn btn-circle"
                                >
                                    ❯
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <>tidak ada data</>
                )}
            </div>
        </React.Fragment>
    );
};

export default Carousel;
