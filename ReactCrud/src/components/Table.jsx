import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../http";
import { toast } from "react-toastify";

function Table() {
  const [taske, setTaske] = useState([]);

  useEffect(() => {
    fetchAllTask();
  }, []);
  const fetchAllTask = () => {
    http.get("tasks").then((res) => {
      setTaske(res.data.tasks);
    });
  };


  return (
    <div className="table">
      
      <h3>Showing {taske.length} results</h3>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task Name</th>
            <th>Task Motivation</th>
            <th>Task Deadline</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {taske.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>{task.motivation}</td>
              <td>{task.deadline}</td>
              <td className="text-start">
                <span
                  className={
                    task.status == "pending"
                      ? "pending"
                      : task.status == "completed"
                      ? "completed"
                      : "proccessing"
                  }
                >
                  <i
                    className={
                      task.status == "pending"
                        ? "fa-solid fa-circle-dot"
                        : task.status == "completed"
                        ? "fa-regular fa-circle-check"
                        : "fa-solid fa-circle-notch"
                    }
                  ></i>
                  {task.status === "pending"
                    ? "Pending"
                    : task.status === "completed"
                    ? "Completed"
                    : "proccessing"}
                </span>
              </td>
              <td className="flex-gap text-center">
                <Link to={{ pathname: "/task/" + task.id }}>
                  <button className="btn">View</button>
                </Link>
                <Link to={{ pathname: "edit/" + task.id }}>
                  <button className="btn">Edit</button>
                </Link>

                <button
                  className="btn2"
                  onClick={() => {
                    http.delete("/delete/" + task.id).then(() => {
                      console.log("deleted");
                      fetchAllTask();
                      toast.success("Task deleted successfully");
                    });
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
