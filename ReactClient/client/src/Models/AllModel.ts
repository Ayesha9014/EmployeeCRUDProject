
export interface generalDepartment{
    id:number;
    name:string;
    departments:department[];
}

export interface department{
    id:number;
    name:string;
    generalDepartmentId:number;
    branches:branch[];
}

export interface branch{
    id:number;
    name:string;
    departmentId:number;
    employees:employee[]
}

export interface country{
    id:number;
    name:string;
    cities:city[];
}

export interface city{
    id:number;
    name:string;
    countryId:number;
    towns:town[];
}

export interface town{
    id:number;
    name:string;
    cityId:number;
    employees:employee[]
}

export interface employee{
    id:number;
    name:string;
    civilId:string;
    fileNumber:string;
    jobName:string;
    address:string;
    telephoneNumber:string;
    photo:File;
    other:string;
    branchId:number;
    townId:number;
}
