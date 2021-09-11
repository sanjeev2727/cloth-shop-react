import { withRouter } from 'react-router';
import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
    <div className={`menu__item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        {console.table([history, match, linkUrl])}
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

export default withRouter(MenuItem);