import * as studentService from '../services/studentService.js';

export const fetchAllStudents = async (req, res) => {
    const student = await studentService.fetchAllStudents();
    res.status(200).json(student);
}

export const createStudents = async (req, res) =>{
    const {name, srcode, program} = req.body;
    const book = {name, srcode, program};
}

export const editStudent = async (req, res) =>{
    const {name, srcode, program} = req.body;
    const { id } = req.params;
    const student = {id: parseInt(id), name, srcode, program};

    try{
        const updatestudent = await studentService.updateStudent(student);
        res.status(200).json({
            success: true,
            message: updatestudent
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

