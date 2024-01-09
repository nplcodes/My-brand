import Image from "next/image";
import { Post } from "./BlogsList";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


interface EditSinglePostProps {
  post: Post;
}

const ViewSinglePost: React.FC<EditSinglePostProps> = ({ post }) => {
  return (
    <div>
      <h2 className="text-4xl text-blue-500 py-8 px-4">Read a post</h2>
       <div className="grid grid-cols-2">
          <div>
            {/* Image part */}
            <div>
              <Image alt="lt" src={post.image} width={500} height={500}/>
            </div>
          </div>
          {/* Text part */}
          <div>
            <div>
              <strong>Title:</strong> {post.title}
            </div>
            <div>
              <strong>Description:</strong> {post.description}
            </div>
            <ScrollLink to="fuck-2" smooth={true} duration={800} >
                <span className="text-black px-96 py-5 flex justify-center rounded-md hover:bg-white hover:text-black cursor-pointer">Back</span>
              </ScrollLink>
          </div>
       </div>
    </div>
  );
};

export default ViewSinglePost;
