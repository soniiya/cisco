import React,{useState,useEffect} from 'react'
import './Text.css'

function Text() {
  const [api,setApi] = useState([]);

  useEffect(()=>{
    const fetchdata = async() => {
        try{
            const res = await fetch('https://api64.ipify.org?format=json');
            const data = await res.json();
            setApi(data);

            console.log(data)
        }
        catch(err){
            console.log(err)
        }
    }
    fetchdata();
  },[])
    
  return (
    <div>
    <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>Public API</h2>

    <div className="box_container">
        <div className='box_with_text'>
            <div className="boxes">
            <span>{api.ip}</span>
            </div>
            <h2>IP V4</h2>
        </div>
        <div className='box_with_text'>
            <div className="boxes">
            <span>{api.ip}</span>
            </div>
            <h2>IP V6</h2>
        </div>
        
    </div>
</div>

  )
}

export default Text