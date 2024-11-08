module.exports = {
    instructors: [],

    addinstruc: function (name, mod) {
        const newinstruc = { name, mod };
        this.instructors.push(newinstruc);
    },

    getinstruc: function (index) {
        return this.instructors[index] || null;
    }
};
