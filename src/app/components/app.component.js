export const AppComponent = {
  selector: 'app',
  template: `
    <div class="app">
      <app-nav
        user="$ctrl.user"
        on-logout="$ctrl.logout($event);"
        button-title="{{$ctrl.button}}">
      </app-nav>
         <store-provider store="$ctrl.store"></store-provider>
        <ui-view></ui-view> 
    </div>
  `,
  controller: class AppComponent {
    constructor($ngRedux) {
      'ngInject';
      this.$ngRedux = $ngRedux;
    }

    $onInit() {
      this.store = this.$ngRedux;
    }
  }
};
