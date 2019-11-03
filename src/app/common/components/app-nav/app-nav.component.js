export const AppNavComponent = {
  selector: 'appNav',
  bindings: {
    user: '<',
    onLogout: '&',
    buttonTitle: '@'
  },
  template: `
   <section>
        <react-test name-test="$ctrl.nameTest">
   </section>
     <button ng-click="$ctrl.onClick()">On Click1231231232</button>
 
  `,
  controller: class AppNavComponent {
    constructor(EventEmitter) {
      'ngInject';

      this.EventEmitter = EventEmitter;
    }

    $onInit() {
      console.log('>>>One way data flow', this.user);
      this.user = Object.assign({}, this.user);
      this.nameTest = 'Kirill';
    }

    onClick() {
      this.nameTest += this.nameTest;
      console.log('click!')
    }

    logoutUser() {
      this.onLogout(
        this.EventEmitter({
          userEmail: this.user.email,
        })
      );
    }
  }
};
