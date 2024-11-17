import React, { useEffect, useState } from "react";
import { Student } from "../../types/type";
import axios from "axios";
import {deleteStudent, getAllStudents  } from "../../api/studentApi";
import { Link, useLocation } from "react-router-dom";

export default function StudentView () {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // To manage loading state
  const [error, setError] = useState<string | null>(null); // To manage error state
  const location = useLocation();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true); // Start loading
        const studentData = await getAllStudents(); // Call the function to fetch students
        setStudents(studentData); // Set the fetched data to the state
      } catch (err) {
        setError("Failed to load students"); // Set an error message in case of failure
      } finally {
        setLoading(false); // End loading
      }
    };
   /*  if (location.state?.updatedStudent) {
      setStudents((prevStudents) => {
        prevStudents.map((s)=> console.log(s.id));
        const updated = location.state.updatedStudent;
        if (prevStudents?.some((s) => s.id === updated.id)) {
          // Update existing student
          return prevStudents.map((s) => (s.id === updated.id ? updated : s));
        } else {
          // Add new student
          return [...prevStudents, updated];
        }
      });
    }  */
    
    fetchStudents();
  
	}, []);

 
  const handleDelete = async (id: number) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this student?");
    if (!isConfirmed) return; // Exit if the user cancels
  
    try {
      await deleteStudent(id); // Call your API to delete the student
      setStudents((prevStudents) => prevStudents.filter((s) => s.id !== id)); // Remove from state
      alert("Student deleted successfully!");
    } catch (error) {
      console.error("Failed to delete student", error);
      alert("Failed to delete student. Please try again.");
    }
  };

  return (
    <section>
      <Link to={`add-student/`} className="btn btn-primary">
                    Add student
                </Link>
      <table className="table table-bordered ">
        <thead>
          <tr className="text-center">
            <th>Id</th>
            <th>first name</th>
            <th>last name</th>
            <th>Email</th>
            <th>departement</th>
            <th colSpan={3}>Action</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {students?.map((student, index) => (
            <tr key={student.id}>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.department}</td>
              <td className="mx-2">
                <button className="btn btn-info">
                    View
                </button>
              </td>

              <td className="mx-2">
                <Link to={`edit-student/${student.id}`} className="btn btn-warning">
                    update
                </Link>
               
              </td>
              <td className="mx-2">
                
                <button className="btn btn-danger" onClick={() => {
                  if (student.id) {
                    handleDelete(student.id); // Only call if id is defined
                  } else {
                    console.error("Cannot delete: Student ID is undefined.");
                  }
            
                }} >
                    delete
                </button>
                </td>

            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

//export default StudentView;
