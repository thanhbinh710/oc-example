export const data = (context, callback) => {
  const { name, test } = context.params;
  const { staticPath } = context;

  let dynamicValue = 'Hello';

  callback(null, {
    name,
    test,
    dynamicValue,
    staticPath
  });
};
