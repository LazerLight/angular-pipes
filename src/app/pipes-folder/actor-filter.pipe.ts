import { Pipe, PipeTransform } from '@angular/core';

import { Actor } from '../benicio/benicio-data';

@Pipe({
  name: 'actorFilter'
})
export class ActorFilterPipe implements PipeTransform {

  transform(value: Array<Actor>, searchTerm: string): Array<Actor> {
    if (!value) {
      return [];
    }

    if (!searchTerm) {
      // return the original array if there's no search term
      return value;
    }

    searchTerm = searchTerm.toLowerCase();

    const filteredArray: Array<Actor> = [];

    value.forEach((oneActor) => {
      const lowerActorName = oneActor.actorName.toLowerCase();

      if (lowerActorName.includes(searchTerm)) {
        filteredArray.push(oneActor);
      }
    });

    return filteredArray;
  }

    // Pro way
    // return value.filter(oneActor => {
    //     const lowerActorName = oneActor.actorName.toLowerCase();
    //     return lowerActorName.includes(searchTerm);
    //   });

}
