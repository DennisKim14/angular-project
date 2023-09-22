const Employee = require('../service/employee');

module.exports = {
    
    create: (body) => {
        return new Promise(async (resolve, reject) =>{
            try {
                const rs = await Employee.create(body);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        })
    },

    list: (offset, count) => {
        return new Promise(async (resolve, reject) =>{
            try {
                const rs = await Employee.list(offset, count);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        })
    },
    
    view: (id) => {
        return new Promise(async (resolve, reject) =>{
            try {
                const rs = await Employee.view(id);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        })
    },

    modify: (id, body) => {
        return new Promise(async (resolve, reject) =>{
            try {
                const rs = await Employee.modify(id, body);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        })
    },

    delete: (id) => {
        return new Promise(async (resolve, reject) =>{
            try {
                const rs = await Employee.delete(id);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        })
    },

}