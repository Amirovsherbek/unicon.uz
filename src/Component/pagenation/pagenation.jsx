function Pagenation(){
    return (
        <>
         <div className="page-next">
            <i className="fa-solid fa fa-chevron-left"></i>
          </div>
          <span className="page_id page_id_active">1</span>
          <span className="page_id page_id_unactive">2</span>
          <span className="page_id page_id_unactive">3</span>
          <span className="page_id page_id_unactive">....</span>
          <span className="page_id page_id_unactive">14</span>
          <div className="page-next">
            <i className="fa-solid fa fa-chevron-right"></i>
          </div>
        </>
    )
}
export default Pagenation;