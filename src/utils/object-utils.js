// Flatten json objects
export const flattenEnkiConfigs = (obj) => {
  const flattenedInnerObjects = obj?.map((item) => {
    const key = item?.key;
    return {[key]: item?.value?.value};
  });
  return flattenToArray(flattenedInnerObjects);
};

export const flattenToArray = (obj) => {
  return Object?.keys(obj)?.reduce((acc, key) => {
    if (typeof obj[key] === 'object') {
      return {...acc, ...flattenToArray(obj[key])};
    }
    return {...acc, [key]: obj[key]};
  }, {});
};
