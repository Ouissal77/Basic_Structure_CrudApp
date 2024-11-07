import React, { useEffect, useState } from "react";
import { Student } from "../../types/type";
import axios from "axios";

const StudentView = () => {
  const [students, setStudents] = useState<Student[]>();

  useEffect(() => {
		loadStudents();
	}, []);

  const loadStudents = async () => {
		const result = await axios.get(
			"http://localhost:8082/api/students"
      /* ,
			{
				validateStatus: () => {
					return true;
				},
			} */
		);
		//if (result.status === 302) {
			setStudents(result.data);
		//}
	};


  return (
    <section>
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
                
                <button className="btn btn-warning">
                    update
                </button>
              </td>
              <td className="mx-2">
                
                <button className="btn btn-danger">
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

export default StudentView;
