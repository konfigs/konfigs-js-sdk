import fetch from 'cross-fetch';

export const executeFetch = async (url, method, headers, body) => {
  try {
    const fetchedConfigs = await fetch(url, {
      method: method,
      headers: headers,
      body: body,
    });
    const data = await fetchedConfigs.json();
    return data?.data?.getHydratedConfigurations;
  } catch (exc) {
    console.log(exc);
    return null;
  }
};
