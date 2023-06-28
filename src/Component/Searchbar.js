import React, { useEffect, useState } from "react";
import Books from "./Books";
import client from "../Server/client";
import { Link } from "react-router-dom";
import Search from "../SVG/Search";
import Home from "../SVG/Home";
function Searchbar(){
    const [book, setBook] = useState('')
    const [name, setName] = useState('')
    const [center, setCenter] = useState(false);
    const [params, setParams] = useState({
        method:'get',
        query:{name},
        size:5
        //사이즈를 5로 해서 5권만 나오게!
    })
    const [data,setData] = useState([])
    useEffect(()=>{
        setName(name);
        const newParams = {...params};
        newParams.query = book
        setParams(newParams);
    },[book])
   
    const handleClick = async(e)=>{
        
        setName(e.target.title)
        try{ const response = await client('https://dapi.kakao.com/v3/search/book?target=title',{params})
        // 타겟을 정해놔야 오류가 안생기는 듯 함..
        setData((data) => response.data.documents)
        setCenter(true)
        // 이게 먼저 실행이 되야 하는데.....
        // 이렇게 하면 빠르다고 했는데.. 딱히?
        }catch(error){
            alert("제목을 확인해주세요.")
        }}
       
  
        
        //리덕스를 쓰는 대신, 프롭스를 이용해 북스로 데이터 전달,
       
    return(
        <>
        <div className="searchbox"  >
       
        <input type="text" className="searchbar" placeholder="Search" onChange={(e)=>{
            setBook(e.target.value)
        }}></input>
        <Search width="30px" className="searchbtn" value="SEARCH!" title={book} onClick={handleClick} 
        />
        
        <Link to="/">
         <Home width="27px" className="searchbtn" value="RESET!" 
         onClick={(e)=>{
            window.location.reload();
         }}/>
        </Link>
        </div>
        <Books data={data}/>
        </>
    )
}

export default Searchbar;