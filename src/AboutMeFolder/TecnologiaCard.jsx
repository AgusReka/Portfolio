
function TecnologiaCard({ params }) {
  
  return (
    <div className="TecnologiaCard">
      <div style={{ backgroundColor: params.color }} className="imagen">
        <img src={params.imgUrl} alt="" />
      </div>
      <h1>{params.name}</h1>
    </div>
  );
}
export default TecnologiaCard;
