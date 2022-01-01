import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { map, Observable } from "rxjs";

/*
* Serializes outgoing data
*/

export class SerializeTo implements NestInterceptor {
    constructor(private dto: any) { }

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(
            map((data) => plainToInstance(this.dto, data, { excludeExtraneousValues: true }))
        );
    }
}