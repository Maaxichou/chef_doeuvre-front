import { AsyncValidator, AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable, of } from 'rxjs';
import { AuthServiceService } from '../../repository/auth-service.service';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserExistsValidator implements AsyncValidator {

    constructor(private authService:AuthServiceService){}

    validate(control:AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
        
        return this.authService.emailExists(control.value).pipe(
            map(() => ({alreadyExists: true})),
            catchError(() => of(null))
        );
        
    }


}
