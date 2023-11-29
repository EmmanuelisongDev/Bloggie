import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import PortableText from "@sanity/block-content-to-react";
import client from "../Client.js";

const builder = imageUrlBuilder(client);

const urlFor = (source) => builder.image(source);

const Blogs = ({ post }) => {
  return (
    <div className="w-full py-[50px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 px-4 text-black">
          {post.map((blog) => (
            <Link key={blog._id} to={`/blogcontent/${blog.slug.current}`}>
              <div className="  rounded-lg shadow bg-[#0f0f0f]">
                <img
                  className="rounded-t-lg  w-full object-cover"
                  src={urlFor(blog.image)}
                  alt={blog.slug.current}
                />

                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {blog.title}
                  </h5>
                  <p className="text-gray-500">
                    {blog._updatedAt.substring(0, 10)}
                  </p>

                  {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <PortableText
                      blocks={
                        blog.body.length > 0
                          ? (blog.body[0] = `${blog.body[0].}...`)
                          : blog.body[0]
                      }
                    />
                  </p> */}
                  <span
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
