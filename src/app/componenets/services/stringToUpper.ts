const getCapitalizeString = (str: string) => {
  let splitter = str.split(" ");
  for (let i = 0; i < splitter.length; i++) {
    splitter[i] = splitter[i][0].toUpperCase() + splitter[i].substr(1);
  }
  return splitter.join(" ");
};

export default getCapitalizeString;
