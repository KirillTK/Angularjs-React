export const AppNavComponent = {
  selector: 'appNav',
  bindings: {
    user: '<',
    onLogout: '&',
    buttonTitle: '@'
  },
  template: `
        <store-provider></store-provider>
        <home-component/>
  `,
  controller: class AppNavComponent {
    constructor() {
    }
  }
};
