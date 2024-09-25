const str = `
acclaim,noun,讚賞
be committed with,phrase,專注於
narrowly,adverb,勉強地
`;
str
  .split("\n")
  .filter((el) => el !== "")
  .map((el) => el.split(","))
  .map((el) => ({ title: el[0], group: el[1], trans: el[2], time: new Date().toLocaleString().split(" ")[0] }));
