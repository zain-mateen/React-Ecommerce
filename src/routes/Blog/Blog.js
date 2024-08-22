import BlogCart from "../../components/BlogCart/BlogCart.component";
import { BlogPageData } from "../../Data";

import './Blog.scss';

const Blog = () => {
    return (
        <div className="BlogPage">
            <div className="container">
                <div className="BlogPage_inr">
                    {BlogPageData.map((item) => (
                        <BlogCart 
                            key={item.id}
                            Image={item.Image}
                            Admin={item.Admin}
                            Date={item.Date}
                            Heading={item.Heading}
                            Description={item.Description}
                            to={item.to}
                            ButtonText={item.ButtonText}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blog;
