import React, { useReducer, useMemo, useRef, useEffect } from "react";
import { initialAttendances } from "./initialAttendances ";

const attendanceReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_STATUS":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, status: item.status === "PRESENT" ? "ABSENT" : "PRESENT" }
          : item
      );
    case "DELETE_STUDENT":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

function AttendanceTable() {
  const [attendances, dispatch] = useReducer(attendanceReducer, initialAttendances);
  const tableRef = useRef(null);

  useEffect(() => {
    document.title = "Hệ Thống Quản lý ĐIểm danh lớp học";
  }, []);

  const formattedAttendances = useMemo(() => {
    return attendances.map((item) => {
      if (!item.date) return { ...item, formattedDate: "" };
      const date = new Date(item.date);
      if (isNaN(date.getTime())) return { ...item, formattedDate: item.date };
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return {
        ...item,
        formattedDate: `${day}/${month}/${year}`,
      };
    });
  }, [attendances]);

  const stats = useMemo(() => {
    const totalRecords = attendances.length;
    const presentCount = attendances.filter((item) => item.status === "PRESENT").length;
    const absentCount = attendances.filter((item) => item.status === "ABSENT").length;
    const attendanceRate =
      totalRecords > 0
        ? ((presentCount / totalRecords) * 100).toFixed(2) + "%"
        : "0%";
    return { totalRecords, presentCount, absentCount, attendanceRate };
  }, [attendances]);

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_STATUS", payload: id });
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_STUDENT", payload: id });
  };

  return (
    <div className="container mt-4">
      <h2>Hệ Thống Quản lý Điểm Danh Lớp Học</h2>

      <div className="my-3">
        <p>
          <strong>Tổng số bản ghi:</strong> {stats.totalRecords}{" "}
          <strong>Có mặt:</strong> {stats.presentCount}{" "}
          <strong>Vắng mặt:</strong> {stats.absentCount}{" "}
          <strong>Tỷ lệ đi học:</strong> {stats.attendanceRate}
        </p>
      </div>

      <table ref={tableRef} className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Stt</th>
            <th>Mã Lớp</th>
            <th>Tên Sinh Viên</th>
            <th>Ngày</th>
            <th>Trạng Thái</th>
            <th>Thao Tác</th>
          </tr>
        </thead>
        <tbody>
          {formattedAttendances.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.classId}</td>
              <td>{item.name}</td>
              <td>{item.formattedDate}</td>
              <td>
                <button
                  className={`btn btn-sm ${item.status === "PRESENT" ? "btn-success" : "btn-danger"}`}
                  onClick={() => handleToggle(item.id)}
                >
                  {item.status}
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(item.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceTable;
