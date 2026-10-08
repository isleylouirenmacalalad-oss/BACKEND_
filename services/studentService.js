import * as studentModel from '../models/studentModel.js';

export const fetchAllStudents = async (req, res) => {
    const student = await studentModel.fetchAllStudent();
    return student;
}

export const createStudent = async (student) => {
    const studentId = await studentModel.insert(student);
    return studentId;
}



