import {
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query
} from "@angular/animations";

/* Routable animations
 * Here we export a `slideInAnimation` constant set to an animation trigger `routeAnimation`
 * We define one transition when switching back and forth from the `heroes` route and `hero` route
 * to ease the component in from the left of the screen as it enters the application view (:enter),
 * the other animation to animate the component to the right as it leaves the application view (:leave)
 */
export const slideInAnimation = trigger(
  'routeAnimation',
  [
    transition('heroes <=> hero',
    [
      style({ position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter',  [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild())
    ]),
  ]
);
