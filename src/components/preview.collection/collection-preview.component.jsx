import React from "react";
import './collection-preview.styles.scss'; 
import CollectionItem from "../collection-item/collection-item.component";

// collectionPreview receives a title and an array of items for one collection.
// It renders the collection title and up to four CollectionItem components.
const collectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                // Only show the first 4 items in this preview.
                .filter((_, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
);

export default collectionPreview;