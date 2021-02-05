import config from "../../config"
import Link from 'next/link'
import React from 'react';
import ReactDOM from 'react-dom';

class SingleBlogpost extends React.Component  {
    render(){
        return(
   
            <article className="blog-card animate slideIn sequence">
                <Link href={config.siteURL + "/blog/" + this.props.post.slug}>
                    <a className="image">
                        <img  src={this.props.post.better_featured_image.source_url}  alt={this.props.post.better_featured_image.alt_text}/>
                    </a>
                </Link>
                <div className="container">
                    <Link href={config.siteURL + "/blog/" + this.props.post.slug}>
                        <a>
                            <p className="blog-title">{this.props.post.title.rendered}</p>
                        </a>
                    </Link>
                    <div className="blog-tag">
                        {this.props.post.categories.map( categoryID => {
                            return (
                                <Link href={config.siteURL + "/category/" + categoryID}>
                                    <a >
                                        {categoryID + " "}
                                    </a>
                                </Link>
                            )
                        })}
                        
                    </div>
                    <div className="excerpt blog-body" dangerouslySetInnerHTML={{ __html: this.props.post.excerpt.rendered }}></div>
                </div>
            </article>

        )
    }
    
};

export default SingleBlogpost;
