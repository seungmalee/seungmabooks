import React, { useEffect, useState } from "react";
function Books(props){
    
    const [data, setData] = useState([])
   
    // Searchbar에서 가져온 props.data를 useEffect를 통해 Books 컴포넌트로 변수를 확실하게 push 해 줌
    useEffect(()=>{
        setData((prevData)=>[...prevData, ...props.data])
    },[props.data]) 
    const lis = []
    if(data.length>0){
        for(let i = 0; i<5; i++){
          lis.push(
          <div key={i} >
            <img src={data[i].thumbnail}></img>
            <b><span className="books__title">{data[i].title}</span></b>
            <p>
            <b><span className="books__authors">{data[i].authors}</span></b>
            </p>
            <b><p className="books__contents">{data[i].contents}</p></b>
            
            </div>
          )
        }
    }
    // props.data의 값이 변할 때 마다 시켜줌
    return(<div className="books__box">
            {lis}
            </div>
    )
}

export default Books;