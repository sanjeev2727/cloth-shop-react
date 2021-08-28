import './HomePage.scss';

const HomePage = () => {
    return (
        <div className="home__page">
            <div className="directory__menu">
                <div className="menu__item">
                    <div className="content">
                        <h1 className="title">Hats</h1>
                        <div className="sub__title">Shop Now</div>
                    </div>
                </div>
                <div className="menu__item">
                    <div className="content">
                        <h1 className="title">Jackets</h1>
                        <div className="sub__title">Shop Now</div>
                    </div></div>
                <div className="menu__item">
                    <div className="content">
                        <h1 className="title">Jeans</h1>
                        <div className="sub__title">Shop Now</div>
                    </div></div>
                <div className="menu__item">
                    <div className="content">
                        <h1 className="title">Womens</h1>
                        <div className="sub__title">Shop Now</div>
                    </div></div>
                <div className="menu__item">
                    <div className="content">
                        <h1 className="title">Mens</h1>
                        <div className="sub__title">Shop Now</div>
                    </div></div>
            </div>
        </div>
    )
}

export default HomePage;