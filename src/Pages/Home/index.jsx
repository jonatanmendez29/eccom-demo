import { useState, useEffect } from 'react'
import { Card } from '../../Components/Card'
import Layout from '../../Components/Layout'

function Home() {
  const [items, setItems] = useState(null);
  //console.log(items);
  useEffect(()=> {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, []);
  return (
   <Layout>
      <div className='grid gap-5 grid-cols-4 w-full max-w-screen-lg'>
        {items?.map(item => (
          <Card key={item.id} data={item}/>
        ))}
      </div>
   </Layout>
  )
}

export default Home
