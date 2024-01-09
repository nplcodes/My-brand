interface Work {
    title: string;
    colaborated: string;
    description: string;
    category: string;
    image: string;
}


async function getData() {
    const res = await fetch('api/works')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function Page() {
    const data:Work[] = await getData()
    return <main>
        <div>
          <h1>Your Component</h1>
          {!data ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {data.map(item => (
                <li key={item.title}>
                  <h3 className="py-2">{item.title}</h3>
                  <p className="bg-blue-500 w-1/2 py-3">{item.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
  }