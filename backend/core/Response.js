module.exports = {
    type: {
        FAILED                  : { code: 0, msg: '요청에 실패하였습니다.'},
        SUCCESS                 : { code: 1, msg: '완료되었습니다.'},
        INVALID_PARAMETER       : { code: 2, msg: '잘못된 파라미터 입니다.'},
        NOT_AUTHENTICATION      : { code: 3, msg: '로그인 후 이용해 주세요.'},
        NOT_GRANTED             : { code: 4, msg: '권한이 없습니다.'},
        DATABASE_ERROR          : { code: 5, msg: '데이터베이스 오류'},
        
        INTERNAL_ERROR          : { code: 99, msg: '서버 오류'},
        NOT_SUPPORT             : { code: 100, msg: '지원하지 않는 프로토콜 입니다.'}
    },
    
    get: (response, data, msg) => {
        const rs = Object.assign({}, response);
        rs.data = (typeof data !== 'undefined') ? data : {};
        if (typeof msg !== 'undefined') {
            rs.msg = msg;
        }
        return rs;
    }
}