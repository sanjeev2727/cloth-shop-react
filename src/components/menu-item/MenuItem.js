import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`menu__item ${size}`}>
        <div className="background__image"
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="sub__title">Shop Now</div>
        </div>
    </div>
);

export default MenuItem;