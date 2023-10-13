import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class SessionService {

    public isLogin$: Subject<any> = new Subject<any>();

    constructor() {
    }

    setItem(id: string): void {
        localStorage.setItem('id', id);
        this.isLogin$.next(true);
    }

    getItem(): string {
        return localStorage.getItem('id');
    }

    removeItem(): void {
        localStorage.removeItem('id');
        this.isLogin$.next(false);
    }
}