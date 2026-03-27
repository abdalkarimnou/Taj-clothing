import React from "react";
import './directory.styles.scss';
import MenuItem from "../menu-item/menu-item.components";

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://media.gq.com/photos/57dc23c0beed5f275b337e16/16:9/w_1920,c_limit/fall-hats-gq-style-0816-01.jpgt',
                    size: 'large',
                    id:1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://media.gq-magazine.co.uk/photos/651ea0cb82e72cdf38c1655f/16:9/w_1920,c_limit/jackets.jpg',
                    size: 'large',
                    id:2,
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://www.footshop.eu/blog/wp-content/uploads/2023/04/KOV07592.jpg',
                    size: 'large',
                    id:3,
                    linkUrl: ''
                },
                  {
                    title: 'women',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/women.png',
                    size: 'large',
                    id:4,
                    linkUrl: ''
                },
                  {
                    title: 'men',
                    imageUrl: 'https://image.josbank.com/is/image/marketing/26-5329449-duo1-a-wc-2x.jpg?impolicy=FEWD&im=Resize,width=1024&qlt=85',
                    size: 'large',
                    id:5,
                    linkUrl: ''
                }
            ]
        };
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
}  
export default Directory;