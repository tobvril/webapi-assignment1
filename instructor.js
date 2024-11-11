module.exports = {
    instructors: [],

    addinstruc: function (firstname, lastname, module, classes, school) {
        const newinstruc = { firstname, lastname, module, classes, school };
        this.instructors.push(newinstruc);
    },


    getinstrucfirstname: function (index) {
        const instructor = this.instructors[index];
        if (instructor) {
            return instructor.firstname;
        }
        return null;  
    },


    getinstruclastname: function (index) {
        const instructor = this.instructors[index];
        if (instructor) {
            return instructor.lastname;
        }
        return null;
    },

  
    getinstrucmod: function (index) {
        const instructor = this.instructors[index];
        if (instructor) {
            return instructor.module;
        }
        return null;
    },


    getinstrucclass: function (index) {
        const instructor = this.instructors[index];
        if (instructor && Array.isArray(instructor.classes)) {
            return instructor.classes.join(", ");  
        }
        return null; 
    },

    getinstrucschool: function (index) {
        const instructor = this.instructors[index];
        if (instructor) {
            return instructor.school;
        }
        return null;
    }
};
