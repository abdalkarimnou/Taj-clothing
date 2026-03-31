import React from "react";
import './collection-preview.styles.scss'; 
import CollectionItem from "../collection-item/collection-item.component";
const collectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
        {items.filter((_, idx) => idx<4).map(({id, ...otheritemprops}) => (<CollectionItem key={id} {...otheritemprops} />)) }
        </div>
    </div>
);

export default collectionPreview;