export interface RegisterSettings {
  pageHeading: string;
  heading: string;
  submitText: string;
  loginText: string;
  loginLinkText: string;
}

export default {
  label: 'Register',
  name: 'register',
  component: 'group',
  fields: [
    {
      label: 'Page Heading',
      name: 'pageHeading',
      component: 'text',
    },
    {
      label: 'Register Heading',
      name: 'heading',
      component: 'text',
    },
    {
      label: 'Submit Text',
      name: 'submitText',
      component: 'text',
    },
    {
      label: 'Login Text (mobile)',
      name: 'loginText',
      component: 'text',
    },
    {
      label: 'Login Link Text (mobile)',
      name: 'loginLinkText',
      component: 'text',
    },
  ],
  defaultValue: {
    pageHeading: 'Welcome!',
    heading: 'Create Account',
    submitText: 'Create Account',
    loginText: 'Already have an account?',
    loginLinkText: 'Sign In',
  },
};
