import useSWR from "swr";
import axiosInstance, { fetcher } from "../utils/axios";
import { Student } from "../types/type";

export {}





export const getAllStudents = async (): Promise<Student[]> => {
    const response = await axiosInstance.get('');
    return response.data;
  };
  
export const getStudentById = async (id: number): Promise<Student> => {
    const response = await axiosInstance.get(`/student/${id}`);
    return response.data;
  };

export  const editStudentById = async (id: number, student: Student): Promise<Student> =>{
    const respone = await axiosInstance.put(`/update/${id}`,student)
    return respone.data;
}
export const addStudent = async (student: Student) =>{
  const response = await axiosInstance.post('',student);
console.log("adding student with" + response.status );
}

export const deleteStudent = async (id: number)=>{
const response = axiosInstance.delete(`/delete/${id}`);
}