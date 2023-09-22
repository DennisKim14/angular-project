const User = require('../models/Employee');

module.exports = {
    
    create: (body) => {
        return User.create(body);
    },

    getByUserId: (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const filter = {_id: id};
                const project = {};
                const user = await User.findOne(filter, project);
                if (user) {
                    resolve(user);
                } else {
                    throw Error('사용자 정보를 찾을 수 없습니다.');
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
        return User.findMany(filter, project, option);
    },

    modify: (id, body) => {
        const filter = {_id: id};
        const update = {
            $set: body
        };
        const option = {};
        return User.updateOne(filter, update, option);
    },

    delete: (id) => {
        const filter = {_id: id};
        const option = {};
        return User.deleteOne(filter, option);
    },

}