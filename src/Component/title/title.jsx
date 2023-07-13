function Title({ value, className }) {
  return (
    <div  className="user-list-title">
      <div className="icon"></div>
      <div className="card-user-title ">
        <div>
          <span></span>
          {/* {item.organization.name_ru} */}
          Фойдаланувчи номи
        </div>
        <div className="user-company-name-title">
             Ташкилот номи
        </div>
      </div>
    </div>
  );
}
export default Title;
