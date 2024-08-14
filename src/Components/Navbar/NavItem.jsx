import PropTypes from "prop-types"

const NavItem = ({name, Icon}) => {
    
    return (
        <div className="text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8">
            <Icon/>
            <h2 className="">{name}</h2>
        </div>
    );
};

NavItem.propTypes= {
    name: PropTypes.string,
    Icon: PropTypes.string
}
export default NavItem;