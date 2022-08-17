// Write your solution in this file!
const employee = {
    name: 'Gachanja',
    streetAddress: 'Kirigu'
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};

    newEmployee[key] = value;
  
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const updateEmployee = employee ;
    employee[key]= value;
    
    return updateEmployee
}
//console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', 'Kileleshwa'))
function deleteFromEmployeeByKey(employee, key){
    const deleteEmployee = {...employee};
    delete deleteEmployee[key];
    return deleteEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    const destroyEmployeeDelete = employee;
    delete destroyEmployeeDelete[key];
    return destroyEmployeeDelete;
}