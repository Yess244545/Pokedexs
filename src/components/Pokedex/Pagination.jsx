import React from 'react'
import './styles/Pagination.css'

const Pagination = ({page,maxPage,setPage}) => {

  const pagesPerBlock=6
  const currentsBlock=Math.ceil(page/pagesPerBlock)
  const maxBlock= Math.ceil(maxPage/pagesPerBlock)

  const arrPages=[]
  const initialPage=(currentsBlock-1)*pagesPerBlock+1
  const finalPage= maxBlock===currentsBlock? maxPage: currentsBlock*pagesPerBlock

  for(let i=initialPage;i<=finalPage;i++){
    arrPages.push(i)
  }
  const handlePage=number=>{
    setPage(number)
  }
  const handlePrevious=()=>{
    if(page-1>0){
      setPage(page-1)
    }
  }
  const handleNext=()=>{
    if(page+1<=maxPage){
      setPage(page+1)
    }

  }
  const initial=()=>{
    setPage(1)

  }
  const final=()=>{
    setPage(maxPage)
  }
 
  return (
    <div>
      <ul className='pokedex_pages'>
      <li onClick={handlePrevious}>&#60;</li>
      <li onClick={initial}>...</li>
        {
          arrPages.map(e=>(
            <li className={page===e ? "actualPage" :""} onClick={()=>handlePage(e)} key={e}>{e}</li>
          ))
        }
        <li onClick={final}>...</li>
        <li onClick={handleNext}>&#62;</li>
      </ul>
    </div>
  )
}

export default Pagination
