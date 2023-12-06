import { useEffect, useState } from "react";
import http from "../http";
import { useNavigate, useParams } from "react-router-dom";
function Edit() {
  const params = useParams();
  const [data, setData] = useState({
    name: "",
    motivation: "",
    deadline: "",
    description: "",
    status: "",
  });
  const navigator = useNavigate();
  useEffect(() => {
    console.log();
    http.get("/edit/"+params.id).then((res) => {
      setData(res.data.task);
    });
  }, [params.id]);

  const handleChange = (event) => {
    const names = event.target.name;
    const values = event.target.value;
    setData({
      ...data,
      [names]: values,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    http.put("/update/"+params.id, data).then((res) => {
      if (res.data.status == true) {
        navigator("/");
      }
    });
  };
  return (
    <div className="table">
      <form className="TaskForm">
        <h3>Update task</h3>
        <div className="form">
          <label htmlFor="name">Enter task name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={data.name}
          />
        </div>
        <div className="form">
          <label htmlFor="motivation">Task motivation</label>
          <input
            type="text"
            name="motivation"
            onChange={handleChange}
            value={data.motivation}
          />
        </div>
        <div className="form">
          <label htmlFor="deadline">Deadline</label>
          <input
            type="datetime-local"
            onChange={handleChange}
            value={data.deadline}
            name="deadline"
          />
        </div>
        <div className="form">
          <label htmlFor="status">Status</label>
          <select
            onChange={handleChange}
            value={data.status}
            className=""
            name="status"
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="proccessing">Proccessing</option>
          </select>
        </div>
        <div className="form">
          <label htmlFor="description">Add a description</label>
          <textarea
            name="description"
            onChange={handleChange}
            value={data.description}
          ></textarea>
        </div>
        <button className="btn2" onClick={submitForm}>
          Update Task
        </button>
      </form>
    </div>
  );
}

export default Edit;
