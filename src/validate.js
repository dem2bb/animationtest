const regExpDic = {
  name: /([^\\s*]+)$/,
  email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
  phone: /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12,14}(\s*)?/,
  message: /([^\\s*]+)$/,
};

function validate(el) {
  const regExpName = el?.dataset?.required;
  if (!regExpDic[regExpName]) return true;
  return regExpDic[regExpName].test(el.value);
}

export default validate;
