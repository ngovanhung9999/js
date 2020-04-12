function Person(id, fullName, dateOfBirth, coefficentsSalary) {
    let _id = id;
    let _fullName = fullName;
    let _dateOfBirth = dateOfBirth;
    let _coefficentsSalary = coefficentsSalary;

    this.getId = function() {
        return _id;
    };
    this.setId = function(id) {
        _id = id;
    };
    this.getFullName = function() {
        return _fullName;
    };
    this.setFullName = function(fullName) {
        _fullName = fullName;
    };
    this.getDateOfBirth = function() {
        return _dateOfBirth;
    };
    this.setDateOfBirth = function(dateOfBirth) {
        _dateOfBirth = dateOfBirth;
    };
    this.getCoefficentsSalary = function() {
        return _coefficentsSalary;
    };
    this.setCoefficentsSalary = function(coefficentsSalary) {
        _coefficentsSalary = coefficentsSalary;
    };
    this.Salary = function() {

    };
}

function Personnel(id, fullName, dateOfBirth, coefficentsSalary, department) {
    Person.call(this, id, fullName, dateOfBirth, coefficentsSalary);
    let _department = department;
    this.getDepartment = function() {
        return _department;
    };
    this.setDepartment = function(department) {
        _department = department;
    };
    this.Salary = function() {
        return this.getCoefficentsSalary() * 115000;
    };
}
Personnel.prototype = new Person();
Personnel.prototype.constructor = Personnel;

function Manager(id, fullName, dateOfBirth, coefficentsSalary, numberOfPersonnel) {
    Person.call(this, id, fullName, dateOfBirth, coefficentsSalary);
    let _numberOfPersonnel = numberOfPersonnel;
    this.getNumberOfPersonnel = function() {
        return _numberOfPersonnel;
    };
    this.setNumberOfPersonnel = function(numberOfPersonnel) {
        _numberOfPersonnel = numberOfPersonnel;
    };
    this.Salary = function() {
        return this.getCoefficentsSalary() * 115000;
    };
}
Manager.prototype = new Person();
Manager.prototype.constructor = Manager;

function President(id, fullName, dateOfBirth, coefficentsSalary, positionCoefficient) {
    Person.call(this, id, fullName, dateOfBirth, coefficentsSalary);
    let _positionCoefficient = positionCoefficient;
    this.getPositionCoefficient = function() {
        return _positionCoefficient;
    };
    this.setPositionCoefficient = function(positionCoefficient) {
        _positionCoefficient = positionCoefficient;
    };
    this.Salary = function() {
        return (this.getCoefficentsSalary() + this.getPositionCoefficient()) * 115000;
    };
}
President.prototype = new Person();
President.prototype.constructor = President;
Manager.prototype.fullString = function() {
    return this.getId() + " " + this.getFullName() + " " + this.getDateOfBirth();
}