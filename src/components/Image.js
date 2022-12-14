import React from 'react';
import PropTypes from 'prop-types';

const Image = ({img}) => {

    
    const {largeImageURL, likes, previewURL, tags, views} = img;

    return (  
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top"/>
                <div className="card-body">

                </div>
                <div className="card-footer">
                    <a
                        href={largeImageURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-block" 
                    >View Image</a>
                </div>
            </div>
        </div>
    );
}
 
Image.propTypes = {
    img: PropTypes.array.isRequired
}

export default Image;