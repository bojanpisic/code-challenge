import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { InteractionService } from '../http/interaction.service';
import { environment } from '../../environments/environment';
import { map, tap } from 'rxjs/operators';
import { Emergency } from '../models/emergency.model';

@Injectable({ 
  providedIn: 'root'
})
export class EmergencyService {

  constructor(private interactionService: InteractionService) { }

  public getAllEmergencies(): Observable<Emergency[]> {
    return this.interactionService.get(environment.EMERGENCIES_API).pipe(
      map((response: {content: Emergency[]}) => {
        return response.content;
      }),
      tap((response: Emergency[]) => {
        console.log(response);
      })
    );
  }
}
