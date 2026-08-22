import React from "react";
import './directory.styles.scss';
import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item.components";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";


const Directory = ({ sections = [] }) => {

    // Render one menu item for each directory section from Redux.
    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...otherSectionProps }) => (
                // Use the section id as a stable React key and pass the remaining data to MenuItem.
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    );
};
 
// Select the directory sections from the Redux state and provide them as props.
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);