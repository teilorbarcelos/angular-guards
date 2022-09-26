import { Injectable } from '@angular/core'
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CanLoadGuard implements CanLoad {
  canLoad(
    route: Route,
    segments: UrlSegment[],
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(route)
    console.log(segments)

    if (segments[1]?.path === 'leads') return true
    alert(
      'O módulo necessário só é carregado pelo leads, então, primeiro vá em leads para depois o dashboard!',
    )
    return false
  }
}
