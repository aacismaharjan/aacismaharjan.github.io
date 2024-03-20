import React, { useEffect, useState } from 'react';
import Section from '../components/Section';
import axios from 'axios';
import Card from '../components/Card';

const fetchBlogs = async () => {
  try {
    const response = await axios.get(
      'https://www.googleapis.com/blogger/v3/blogs/6539341403649441335/posts?key=AIzaSyBw0xffhY84HE6GS_CRvmPAQZswmzRYjAQ&fetchImages=true'
    );

    return response.data.items;
  } catch (error) {
    console.log('Error while fetching blogs.', error);
  }
};

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(async () => {
    const tempBlogs = await fetchBlogs();
    setBlogs(tempBlogs);
  }, []);

  return (
    <Section id="blogs" title="Blogs">
      {blogs && blogs.length > 0 ? (
        <section>
          <div className="cards">
            {blogs.slice(0, 3).map((blog) => (
              <Card
                card={{
                  img: blog.images[0].url,
                  title: blog.title,
                  demo: blog.url,
                  source: blog.url,
                }}
              />
            ))}
          </div>

          <div className='d-flex justify-content-center'>
            <a href="https://yashali.blogspot.com/" target="_blank">
              <div  className='btn btn-primary mt-5 btn-lg'>See more</div>
            </a>
          </div>
        </section>
      ) : (
        <h4>No Blogs.</h4>
      )}
    </Section>
  );
};

export default Blogs;
