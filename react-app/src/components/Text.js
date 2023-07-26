import React,{useState,useEffect} from 'react'
import './Text.css'

function Text() {
  const [ipv4,setIpv4] = useState([]);
  const [ipv6,setIpv6] = useState([]);

  useEffect(()=>{
    const fetchIpv4 = async() => {
        try{
            const res = await fetch('https://api.ipify.org?format=json');
            const data = await res.json();
            setIpv4(data);

            console.log(data)
        }
        catch(err){
            console.log(err)
        }
    }
    fetchIpv4();

    const fetchIpv6 = async() =>{
        try{
            const res = await fetch('https://api64.ipify.org?format=json');
            const data = await res.json();
            setIpv6(data);

            console.log(data)
        }
        catch(err){
            console.log(err)
        }
    }
    fetchIpv6();
  },[])
    
  return (
    <div>
    <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>Public API</h2>

    <div className="box_container">
        <div className='box_with_text'>
            <div className="boxes">
            <span>{ipv4.ip}</span>
            </div>
            <h2>IP V4</h2>
        </div>
        <div className='box_with_text'>
            <div className="boxes">
            <span>{ipv6.ip}</span>
            </div>
            <h2>IP V6</h2>
        </div>
        
    </div>
</div>

  )
}

export default Text