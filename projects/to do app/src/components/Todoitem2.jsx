function Todoitem2() {
  let todoname = "Buy milk";
  let tododate = "21/09/2024";
  return (
    <div className="row">
      <div className="col-6">{todoname}</div>
      <div className="col-4">{tododate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}
export default Todoitem2;
