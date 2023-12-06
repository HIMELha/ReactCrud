import { useState } from "react";
import http from "../http";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Create() {
  const navigator = useNavigate();
  const [data, setData] = useState({
    name: "",
    motivation: "",
    deadline: "",
    description: "",
    status: ""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    http.post("/store", data).then(() => {
      navigator("/");
      toast.success('Task created successfully')
    }).catch(() => {
       toast.error('Please fill all required fields');
    });
  };
  return (
    <div className="table">
      <form className="TaskForm">
        <h3>Create new task</h3>
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
            type="date"
            onChange={handleChange}
            name="deadline"
            value={data.deadline}
          />
        </div>
        <div className="form">
          <label htmlFor="status">Deadline</label>
          <select onChange={handleChange} className="" name="status" value={data.status}>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="proccessing">Proccessing</option>
          </select>
        </div>
        <div className="form">
          <label htmlFor="description">Add a description</label>
          <textarea
            name="description"
            value={data.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="btn2" onClick={submitForm}>
          Create Task
        </button>
      </form>
    </div>
  );
}

export default Create;
