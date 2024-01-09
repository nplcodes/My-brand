import { useEffect, useState } from "react";

interface Work {
  title: string;
  description: string;
  category: string;
  colaborated: string;
  image: File | string | null;
}

const WorksList = () => {
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

  // delete a project
  const handleDelete = async (index: number) => {
    try {

      const response = await fetch(`/api/works/${index}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // If deletion is successful, update the local state
        const updatedWorks = [...data];
        updatedWorks.splice(index, 1);
        setdata(updatedWorks);
      } else {
        console.error('Failed to delete work item');
      }
    } catch (error) {
      console.error('Error deleting work item:', error);
    }
  };

  return (
    <div>
    <div className="all-blogs space-y-3">
      {data && data.length > 0 ? (
        <div className="card card-compact bg-base-100 shadow-xl xl:grid xl:grid-cols-3">
          {data.map((post, index) => (
            <div key={index} className="card-body cursor-pointer">
              <img src={post.image} alt="Shoes" className="h-48 w-full" />
              <h2 className="card-title">{post.title}</h2>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No work available.</p>
      )}
    </div>
  </div>
  );
};

export default WorksList;
