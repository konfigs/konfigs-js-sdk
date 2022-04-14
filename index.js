import {
  pullHydratedConfigurations,
  pullFlattenedConfigurations,
} from './src/configurations.js';
import {DEFAULT_PROFILE, DEFAULT_ENDPOINT} from './src/constants.js';

/**
 * This is used if you have a specific
 * node that you want to pull, and
 * you don't care about pulling different configurations
 * @function getHydratedConfigurations
 * @param {string} apiKey - The api key for the api
 * @param {string} nodeId - The id of the node to be pulled from Konfigs
 * @param {string} applicationId - Id of the application which contains
 * the requested node
 * @param {string} profile - Profile of published configs
 * @param {string} endpoint - Endpoint of the konfigs api
 * @return {Promise<*|null|undefined>}
 * @example
 * const configs = await pullHydratedConfigurations(
 * "myApiKey",
 * "myNodeId",
 * "myApplicationId")
 * console.log(configs)
 *    // {
 *    //   "configurations": [
 *    //     {
 *    //       "nodeId": "5e9f8f8f-f8f8-f8f8-f8f8-f8f8f8f8f8f8",
 *    //       "data": [
 *        //       {
 *        //         "key": "key1",
 *        //         "value": {
 *            //           "value": "value1"
 *            //           "datatype:"ARRAY |
 *            //            OBJECT | STRING | NUMBER | BOOLEAN"
 *            //         }
 *            //       },
 *        //}
 *    //]
 *    // }
 *    //
 */
export function getHydratedConfigs(
    apiKey,
    nodeId,
    applicationId,
    profile = DEFAULT_PROFILE,
    endpoint = DEFAULT_ENDPOINT,
) {
  return pullHydratedConfigurations(
      apiKey,
      endpoint,
      nodeId,
      applicationId,
      profile,
  );
}

/**
 * Use class if you intend to initialize once and use it for multiple nodes
 * @class KonfigsSdk
 * @public
 * @property {string} apiKey - Konfigs API key
 * @property {string} nodeId - Konfigs node id
 * @property {string} applicationId - Konfigs application id
 * @property {string} profile - Konfigs profile
 * @property {string} endpoint - Konfigs endpoint
 * @return {KonfigsSdk} - Konfigs SDK instance
 * @example
 * const konfigs = new KonfigsSdk(apiKey, nodeId, applicationId, profile, endpoint)
 * const configs = await konfigs.getHydratedConfigs()
 * console.log(configs)
 *    // {
 *    //   "configurations": [
 *    //     {
 *    //       "nodeId": "5e9f8f8f-f8f8-f8f8-f8f8-f8f8f8f8f8f8",
 *    //       "data": [
 *        //       {
 *        //         "key": "key1",
 *        //         "value": {
 *            //           "value": "value1"
 *            //           "datatype:"ARRAY |
 *            //             OBJECT | STRING | NUMBER | BOOLEAN"
 *            //         }
 *            //       },
 *        //}
 *    //]
 *    // }
 *    //
 */
export default class KonfigsSdk {
  /**
     * @param {string} applicationId
     */
  set ApplicationId(applicationId) {
    this.applicationId = applicationId;
  }
  /**
     * @param {string} endpoint
     */
  set Endpoint(endpoint) {
    this.endpoint = endpoint;
  }
  /**
     * @param {string} profile
     */
  set Profile(profile) {
    this.profile = profile;
  }
  /**
     * @param {string} apiKey
     */
  set ApiKey(apiKey) {
    this.apiKey = apiKey;
  }
  /**
     * @param {string} nodeId
     */
  set NodeId(nodeId) {
    this.nodeId = nodeId;
  }
  /**
     * Initializes Konfigs SDK instance
     * @function KonfigsSdk#constructor
     * @param {string} apiKey - API Key which is generated for your organization
     * @param {string} applicationId - Application
     * id where the node is part of
     * @param {string} profile - Publish Profile of the node item
     * @param {string} endpoint - Endpoint of the Konfigs service
     */
  constructor(
      apiKey,
      applicationId,
      profile = DEFAULT_PROFILE,
      endpoint = DEFAULT_ENDPOINT,
  ) {
    this.apiKey = apiKey;
    this.applicationId = applicationId;
    this.profile = profile;
    this.endpoint = endpoint;
  }
  /**
     * This function is called to retrieve your published configurations
     * @function KonfigsSdk#getHydratedConfigs
     * @param {string} nodeId - Konfigs node id
     * @return {Promise} - Promise containing hydrated configurations
     */
  getHydratedConfigs(nodeId) {
    return pullHydratedConfigurations(
        this.apiKey,
        this.endpoint,
        nodeId,
        this.applicationId,
        this.profile,
    );
  }

  /**
     * This function is called to retrieve your flattened
     * published configurations
     * @function KonfigsSdk#getFlattenedConfigs
     * @param {string} nodeId - Konfigs node id
     * @return {Promise} - Promise containing
     * flattened configurations
     */
  getFlattenedConfigs(nodeId) {
    return pullFlattenedConfigurations(
        this.apiKey,
        this.endpoint,
        nodeId,
        this.applicationId,
        this.profile,
    );
  }
}
