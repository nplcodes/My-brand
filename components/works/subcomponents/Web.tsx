import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Work {
  title: string;
  description: string;
  category: string;
  colaborated: string;
  image: string ;
}

const Web = () => {
  const [data, setdata] = useState<Work[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/works');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const works: Work[] = await response.json();
        setdata(works);
      } catch (error) {
        console.error('Error fetching works:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="all-blogs space-y-3">
        <div className="card card-compact bg-base-100 shadow-xl xl:grid xl:grid-cols-3">
          {data?.map((post, index) => (
            <div key={index} className="card-body cursor-pointer">
              <Image src={post.image} alt="Shoes" className="h-48 w-full" />
              <h2 className="card-title">{post.title}</h2>
              <p>{post.description}</p>
              <div className="lk-comm flex flex-row gap-2 items-center justify-between">
                <div className="comments">
                  <button
                    className="bg-gray-900 text-white px-6 py-1 rounded-sm"
                  >
                    <Link href='https://github.com/nplcodes'>
                      Visit
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Web;
