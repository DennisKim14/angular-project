export const RESPONSE_CODE = {
    FAILED                  : 0,
    SUCCESS                 : 1,
    INVALID_PARAMETER       : 2, // 잘못된 파라미터 입니다.
    NOT_AUTHENTICATION      : 3, // 로그인 후 이용해 주세요.
    NOT_GRANTED             : 4, // 권한이 없습니다.
    DATABASE_ERROR          : 5, // 데이터베이스 오류
    INTERNAL_ERROR          : 99, // 서버 오류
    NOT_SUPPORT             : 100 // 지원하지 않는 프로토콜 입니다.
}

export class IResponse<T> {
    code: number;
    msg: string;
    data: T | T[] | any;
}