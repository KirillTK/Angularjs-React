export const AppNavComponent = {
  selector: 'appNav',
  bindings: {
    user: '<',
    onLogout: '&',
    buttonTitle: '@'
  },
  template: `
        <home-component/>
  `,
  controller: class AppNavComponent {
    constructor() {
    }
  }
};
