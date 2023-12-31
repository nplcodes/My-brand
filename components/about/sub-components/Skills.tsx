"use client"

import Image from "next/image";
import { useEffect, useState } from "react";


interface SkillInfo {
  id: number,
  title: string;
  percentage: string;
  description: string,
  image: string ;
}


const Skills = () => {
  const [loading, setLoding]= useState<boolean>(false)
  const [data, setdata] = useState<SkillInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoding(true)
      try {
        const response = await fetch('/api/skills');
        if (!response.ok) {
          throw new Error('Failed to fetch skills');
        }

        const skills: SkillInfo[] = await response.json();
        setdata(skills);
        setLoding(false)
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
        <div className="flex justify-center items-center py-5">
          <div className="header-personal">SKILLS + KNOWLDGE</div>
       </div>
       <div className="wrapper">
        {/* grid grid-cols-3 px-32 py-10 */}
        <div className="all-skillls-container lg:grid lg:grid-cols-2 lg:px-32 lg:gap-2 lg:py-10 xl:grid-cols-2">
          {loading ? (
            <div className="flex justify-center items-center py-64">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
          ): (
            <>
              {data?.map(skill => (
                <div    key={skill.id}
                        className="one-skill grid grid-cols-4 gap-3  py-10 px-5 rounded-tl-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                          <Image alt="hh" src={skill.image} width={70} height={70} className="rounded-md"/>
                          <div className="title-percent-bar col-span-3">
                            <div className="title-percent flex justify-between pb-2" key={skill.description}>
                              <div>{skill.title}</div>
                              <div>{skill.percentage}%</div>
                            </div>
                            <div className="bar h-2 relative w-full ">
                              <progress value={skill.percentage} max={100} color='blue'  className='  h-2 absolute top-0 left-0 right-0'/>
                     </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
       </div>
    </div>
  )
}

export default Skills