"use client"

const Education = () => {
  return (
    <div>
          <div className="flex justify-center items-center py-5">
            <div className="header-personal">EDUCATION BACKGROUND</div>
          </div> 
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-10">
            <li>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">2020-2024</time>
                <div className="text-lg font-black">University of Rwanda</div>
                Bachelor degree with honors in computer science and information security
              </div>
              <hr/>
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">2016-2018</time>
                <div className="text-lg font-black">TVET Mutovu</div>
                Advanced diploma(A2) in computer science
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">2013-2015</time>
                <div className="text-lg font-black">G.S Byimana</div>
                Ordinary Level
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">2006-2012</time>
                <div className="text-lg font-black">NPD Kacyiru Primary school</div>
                Primary school
              </div>
              <hr />
            </li>
          </ul>
    </div> 
  )
}

export default Education