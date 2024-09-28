class ApiResponse {
    constructor(statusCode,data,message="Success"){
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400
    }

    static success(data,message,res){
        return res.status(200).send(new ApiResponse(200,data,message));
    }
}

export {ApiResponse};