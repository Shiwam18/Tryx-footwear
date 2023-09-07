const Trending = ()=> {
    return (
        <main className="trending">
            <h2>Trending</h2>
            <div className="pair">
                <img src="../images/nike-trending-1.jpg" alt="" />
            </div>

            <h2>Latest</h2>
            <div className="latest">
                <img src="" alt="" />
            </div>
            <div className="ready-pack">
                <h1>NIKE TECH</h1>
                <a>Engineered to the Exact Specifications of Championship Athletes</a>
                <button>Suit Up</button>
            </div>
            <h2>Featured</h2>
            <div className="feature-pair">
                <img src="https://pixabay.com/get/g353000f054c7f6bebea7e495455412a692a2ec5698217afe7c3b26d9b9f2b78e3fc013e7b7c9d383a59833acf77cd474.jpg" alt="" />
                <img src="https://cdn.pixabay.com/photo/2015/05/31/10/54/shoes-791044_1280.jpg" alt="" srcset="" />
            </div>

            <div className="gear-up">
            <h1>Gear up and lead</h1>
            <a>Wear the fashion. Feel the fasion.</a>
            </div>
            <div className="gear-up-vedio">
            <video width={1500.8} height={735.2} autoPlay muted loop src="../images/promo-video.webm"></video>
            </div>
            <div className="ready-pack">
                <h1>NIKE STRUCTURE 25</h1>
                <a href="#">Stability where you need it, cushion where you want it.</a>
                <button>Explore </button>
            </div>
        </main>
    );
}

export default Trending