import { useEffect, useState } from "react";
import http from "../http";
import { useParams } from "react-router-dom";
function Task() {
  const [data, setData] = useState([]);
  const params = useParams();
  useEffect(() => {
    http.get("/edit/" + params.id).then((res) => {
        setData(res.data.task);
    });
  }, []);
  return (
    <div className="table">
      <form className="TaskForm">
        <h3>Task - {data.name} </h3>
              
        <div className="form">
          <label htmlFor="motivation">Motivation: {data.motivation}</label>
        </div>
        <div className="form">
          <label htmlFor="deadline">Deadline: {data.deadline}</label>
        </div>
        <div className="form">
          <label htmlFor="status">Status{data.status}</label>
        </div>
        <div className="form">
          <label htmlFor="description">Description: {data.description}</label>
        </div>
        <button className="btn2">Update Task</button>
      </form>
    </div>
  );
}

export default Task;
