import { useEffect, useState } from "react";
import { Student } from "../../types/type";
import StudentView from "./StudentView";
import { addStudent, editStudentById, getStudentById } from "../../api/studentApi";
import { useNavigate, useParams } from "react-router-dom";

interface StudentFormProps {
  isEdit: boolean; // Determines whether it's adding or editing
 // id?: number; // ID of the student (required if editing)
}
export default function AddStudent({isEdit}: StudentFormProps)  {
  const { id } = useParams<{ id: string }>(); // Extract ID from URL
  const navigate = useNavigate();

  const [student, setStudent] = useState<Student>({
     
    firstName: "",
        lastName: "",
        email: "",
        department: "",  
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  /* function handleChange(e: ){

  }
 */

  useEffect(() => {
    if (id) {
      const fetchStudent =  async () => {
        try {
          const studentData = await getStudentById(Number(id));
          
          setStudent(studentData);
        } catch (err) {
          setError("Failed to load student details.");
        }
      };
      fetchStudent();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setStudent({
      ...student,[name]:value
    });

  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      let updatedStudent;
      if(id) {
        updatedStudent = await editStudentById(Number(id), student);
        setSuccess("Student edited successfully!"+ student.firstName);

      }
      else{
        updatedStudent = await addStudent(student);
        setStudent({
          firstName: "",
          lastName: "",
          email: "",
          department: "",
        });
          setSuccess("Student added successfully!");

      }
      setTimeout(() => {
        navigate("/");
      }, 1000);
      //navigate("/", { state: { updatedStudent } });

        
    } catch (error: any) {
      setError("Failed to add student. Please try again.");
      console.log(error);
    }
  }

 return ( <div className="">
 <h2>{id ? "Edit Student" : "Add Student"}</h2>
  
  
    

    <form onSubmit={handleSubmit} >
        <label htmlFor="">first name</label>
        <input type="text" name="firstName" id="firstName" required value={student.firstName} onChange={handleChange} />
        <div></div>
        <label htmlFor="">last name</label>
        <input type="text" name="lastName" id="lastName" required value={student.lastName} onChange={handleChange} />
         <div></div>
        <label htmlFor="">email </label>
        <input type="text" name="email" id="email" required value={student.email} onChange={handleChange} />
        <div></div>

        <label htmlFor="">departement </label>
        <input type="text" name="department" id="departement" required value={student.department} onChange={handleChange} />
   
   
        <button type="submit" className="btn btn-primary">
          {id ? "Update Student" : "Add Student"}
        </button>
      </form>
      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
  </div>);
};
