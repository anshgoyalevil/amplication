/* eslint-disable @typescript-eslint/naming-convention */
export class Env {
  static readonly CLIENT_HOST = "CLIENT_HOST";

  static readonly BITBUCKET_CLIENT_ID = "BITBUCKET_CLIENT_ID";
  static readonly BITBUCKET_CLIENT_SECRET = "BITBUCKET_CLIENT_SECRET";

  static readonly GITHUB_APP_CLIENT_ID = "GITHUB_APP_CLIENT_ID";
  static readonly GITHUB_APP_CLIENT_SECRET = "GITHUB_APP_CLIENT_SECRET";
  static readonly GITHUB_APP_APP_ID = "GITHUB_APP_APP_ID";
  static readonly GITHUB_APP_INSTALLATION_URL = "GITHUB_APP_INSTALLATION_URL";
  static readonly GITHUB_APP_PRIVATE_KEY = "GITHUB_APP_PRIVATE_KEY";

  static readonly CODE_GENERATION_REQUEST_TOPIC =
    "CODE_GENERATION_REQUEST_TOPIC";
  static readonly CODE_GENERATION_SUCCESS_TOPIC =
    "CODE_GENERATION_SUCCESS_TOPIC";
  static readonly CODE_GENERATION_FAILURE_TOPIC =
    "CODE_GENERATION_FAILURE_TOPIC";

  static readonly CREATE_PR_REQUEST_TOPIC = "CREATE_PR_REQUEST_TOPIC";
  static readonly CREATE_PR_SUCCESS_TOPIC = "CREATE_PR_SUCCESS_TOPIC";
  static readonly CREATE_PR_FAILURE_TOPIC = "CREATE_PR_FAILURE_TOPIC";

  static readonly DSG_LOG_TOPIC = "DSG_LOG_TOPIC";

  static readonly BILLING_ENABLED = "BILLING_ENABLED";
  static readonly BILLING_API_KEY = "BILLING_API_KEY";

  static readonly STIGG_WEBHOOKS_SECRET = "STIGG_WEBHOOKS_SECRET";
}
