import { HOST, SERVICE_IDENTIFIERS } from '../constants/api';
import { getCookie } from './auth';
import { USER_ID } from '../constants/auth';

const URL = {
  get login() {
    return `/${SERVICE_IDENTIFIERS.authService}/OAuth/token`;
  },

  get userProfile() {
    return `${HOST.cxaOne}/api/3/clients/${process.env.CLIENT_ID}/users/${getCookie(
      USER_ID,
    )}/profile`;
  },

  get claimItems() {
    return `${HOST.cxaOne}/api/3/clients/${process.env.CLIENT_ID}/users/${getCookie(
      USER_ID,
    )}/claimitems`;
  },

  get submitClaim() {
    return `${HOST.cxaOne}/api/3/clients/${process.env.CLIENT_ID}/users/${getCookie(
      USER_ID,
    )}/claims`;
  },

  claimFields: (planId, claimId) =>
    `${HOST.cxaOne}/api/3/clients/${process.env.CLIENT_ID}/users/${getCookie(
      USER_ID,
    )}/plans/${planId}/claimItems/${claimId}/fields`,
};

export default URL;
