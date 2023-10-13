import {StudentModel,ViewStudentsModel,SearchByIdModel} from '../model/student.model.js'; 

export const StudentController = StudentModel;
export const ViewStudentsController = ViewStudentsModel;

export const SearchController = function(request, response, next) {
        response.render("searchform",{result:"",message:""});
}

export const SearchByIdController = SearchByIdModel;