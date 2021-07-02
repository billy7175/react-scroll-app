import React from 'react'
import { Link } from 'react-router-dom';
import GetDetailAPI from '../API/GetDetailAPI';



export default function PostDetail(props) {
  const { postDetail } = GetDetailAPI(props.type);
  const { title, content } = postDetail;
  
  const dummy = {
    title:'this is a dummy title',
    content:'this is a dummy content'
  }
  return (
    <div>
      <div>
        <h1>{title ? title : "NO DATA"}</h1>
        <p>{content ? content : "NO DATA"}</p>
      </div>
      <Link to="/">
        뒤로가기
      </Link>
    </div>
  )
}