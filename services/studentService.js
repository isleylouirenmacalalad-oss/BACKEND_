import * as studentModel from '../models/studentModel.js';

export const fetchAllStudents = async (req, res) => {
    const student = await studentModel.fetchAllStudent();
    return student;
}

export const updateStudent = async (student) => {
    const updatedStudent = await studentModel.update(student);
    return updatedStudent;
}

export const deleteStudent = async (id) => {
    const deletedStudent = await studentModel.remove(id);
    return deletedStudent;
}

