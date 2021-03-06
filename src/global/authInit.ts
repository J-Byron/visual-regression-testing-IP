import {
  CrdsAuthenticationService,
  CrdsAuthConfig,
  CrdsOktaConfig,
  CrdsMpConfig,
  CrdsAuthenticationProviders,
  CrdsTokens
} from '@crds_npm/crds-client-auth';
import { InitApollo } from './apollo';
import { ReplaySubject } from 'rxjs';

export function authInit(testAuthToken?: string, ) {
  if (testAuthToken) {
    window['crdsAuthenticated'] = !!testAuthToken;
    InitApollo(testAuthToken);
    return;
  }

  const oktaConfig: CrdsOktaConfig = {
    clientId: process.env.OKTA_CLIENT_ID,
    issuer: process.env.OKTA_OAUTH_BASE_URL,
    tokenManager: {
      storage: 'localStorage'
    }
  };

  const mpConfig: CrdsMpConfig = {
    accessTokenCookie: `${process.env.ENV_SUBDOMAIN}sessionId`,
    refreshTokenCookie: `${process.env.ENV_SUBDOMAIN}refreshToken`,
    issuer: `${process.env.CRDS_GATEWAY_SERVER_ENDPOINT}api/authenticated`
  };

  const authConfig: CrdsAuthConfig = {
    oktaConfig: oktaConfig,
    mpConfig: mpConfig,
    logging: false,
    providerPreference: [CrdsAuthenticationProviders.Okta, CrdsAuthenticationProviders.Mp],
    env: process.env.ENV_SUBDOMAIN ? process.env.ENV_SUBDOMAIN : 'www'
  };

  const authService: CrdsAuthenticationService = new CrdsAuthenticationService(authConfig);

  window['crdsAuthenticated'] = false;
  window['CrdsAuthenticationService'] = authService;

  authService.authenticated().subscribe(token => {
    window['crdsAuthenticated'] = !!token;
    InitApollo(token && token.access_token.accessToken);
  });
}

export function isAuthenticated() {
  return window['crdsAuthenticated'];
}

export function getAuthService(): CrdsAuthenticationService {
  return window['CrdsAuthenticationService'];
}
