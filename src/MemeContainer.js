import React ,{useEffect,useState}from 'react'
import Header from './Header.js';
import Card from './Card.js'
 const url = 'https://api.imgflip.com/get_memes';

function MemeContainer() {
    const [data, setData] = useState([])
   const getData = async () =>{
       const res = await fetch(url)
       const apiData = await res.json();
       setData(apiData.data.memes);
   }

    useEffect(() => {
        getData();
    }, [])
    return (
       <>
       <Header />
       <Card details={data} />
       </>
    )
}

export default MemeContainer
