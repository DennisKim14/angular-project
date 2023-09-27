const Employee = require('../models/Employee')
    , Response = require('../core/Response');

module.exports = {
    
    create: (body) => {
        return Employee.create(body);
    },

    view: (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const filter = {_id: id};
                const project = {};
                const user = await Employee.findOne(filter, project);
                if (user) {
                    resolve(user);
                } else {
                    throw Response.get(Response.type.FAILED, undefined, '사용자 정보를 찾을 수 없습니다.');
                }
            } catch (err) {
                reject(err);
            }
        });
    },

    list: (offset, count) => {
        const filter = {};
        const project = {};
        const option = {};
        return Employee.find(filter, project, option);
    },

    modify: (id, body) => {
        const filter = {_id: id};
        const update = {
            $set: body
        };
        const option = {};
        return Employee.updateOne(filter, update, option);
    },

    delete: (id) => {
        const filter = {_id: id};
        const option = {};
        return Employee.deleteOne(filter, option);
    },

}