import { Observable } from "rxjs";
import { IIdAble } from "../models/IIdAble";

export interface ICrudService<T extends IIdAble> {
      fetchAll(): Observable<T[]>;
    
      fetchById(id: number): Observable<T>;
    
      create(payload: T): Observable<T>;
    
      update(id: number, payload: T): Observable<T>;
    
      delete(id: number): Observable<void>;
}