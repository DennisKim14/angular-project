const Employee = require('../service/employee')
    , Response = require('../core/Response');

module.exports = {
    
    join: (body) => {
        return new Promise(async (resolve, reject) =>{
            try {
                const rs = await Employee.create(body);
                resolve(rs);
            } catch (error) {
                reject(error);
            }
        })
    },

    login: (id, pass) => {
        return new Promise(async (resolve, reject) =>{
            try {
                const employee = await Employee.view(id);
                if (pass == employee.pass) {
                    resolve({code: 200});
                } else {
                    throw Response.get(Response.type.FAILED, undefined, '비밀번호가 일치하지 않습니다.');
                }
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