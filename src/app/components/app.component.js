export const AppComponent = {
  selector: 'app',
  template: `
    <div class="app">
      <app-nav
        user="$ctrl.user"
        on-logout="$ctrl.logout($event);"
        button-title="{{$ctrl.button}}">
      </app-nav>
      <storeProvider/>
        <ui-view></ui-view> 
    </div>
  `,
  controller: class AppComponent {
    constructor() {
      'ngInject';
    }
  }
};
