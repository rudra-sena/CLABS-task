import './Header.css';

const Header = (props) => {
    const title=props.title;
    return ( 
        <div className="div-header">
            <h2>{title}</h2>
        </div>
     );
}
 
export default Header;