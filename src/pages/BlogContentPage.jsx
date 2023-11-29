import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import PortableText from "@sanity/block-content-to-react";
import client from "../Client.js";

const builder = imageUrlBuilder(client);

const urlFor = (source) => builder.image(source);

const BlogContentPage = () => {
  const [singlePost, setSinglePost] = useState();
  const { slug } = useParams();
  console.log(slug);

  useEffect(() => {
    const query = `*[_type == "post" && slug.current == "${slug}"][0]{
      title,
      image{
        asset->{
          _id,
          url
        },
      },
      body,
      slug,
      publishedAt
    }`;
    client.fetch(query).then((result) => setSinglePost(result));
  }, [slug]);

  // console.log(singlePost.image);
  // if (!product) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="text-white  w-full p-[80px]">
      {singlePost && (
        <div className="max-w-[1240px] mx-auto">
          <img
            src={urlFor(singlePost?.image).width(220).url()}
            className="w-full h-[40vh] object-cover rounded-lg  "
            alt={singlePost.slug.current}
          />

          <h1 className="font-bold py-10  text-2xl md:text-7xl">
            {singlePost?.title}
          </h1>
          <div className="py-[50px] text-xl  md:text-4xl">
            {singlePost?.body.map((richText) => (
              <>
                <PortableText
                  key={richText._key}
                  blocks={richText}
                  projectId="1gamvwh7"
                  dataset="production"
                />
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogContentPage;
