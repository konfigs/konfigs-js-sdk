import {executeFetch} from './fetcher.js';
import {flattenEnkiConfigs} from './utils/object-utils.js';

const getHydratedConfigurationsBuilder = (nodeId, applicationId, profile) => {
  return JSON.stringify({
    query: `{getHydratedConfigurations(nodeId:
     "${nodeId}",applicationId:"${applicationId}", profile:"${profile}")
      {nodeId \n data{key \n value {value \n datatype}}}}`,
  });
};

export const pullHydratedConfigurations = (
    apiKey,
    endpoint,
    nodeId,
    applicationId,
    profile,
) => {
  const method = 'POST';
  const headers = {
    'Content-Type': 'application/json',
    'realm': 'enki',
    'x-api-key': apiKey,
  };
  const body = getHydratedConfigurationsBuilder(
      nodeId,
      applicationId,
      profile,
  );
  return executeFetch(endpoint, method, headers, body);
};

export const pullFlattenedConfigurations = (
    apiKey,
    endpoint,
    nodeId,
    applicationId,
    profile,
) => {
  return pullHydratedConfigurations(
      apiKey,
      endpoint,
      nodeId,
      applicationId,
      profile,
  ).then((response) => {
    return flattenEnkiConfigs(response?.data);
  });
};
