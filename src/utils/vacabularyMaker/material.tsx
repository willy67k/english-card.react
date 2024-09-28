const str = `
sanitary,adjective,衛生的
regardless,adverb,不管怎樣
merchandise,noun,商品
comply with,phrase,響應
as a token of,phrase,為了表達
goodwill,noun,善意
pest,noun,害蟲
apply a to b,phrase,讓a適用於b
carry out,phrase,實踐
in brief,phrase,簡而言之
appealing(to),adjective,吸引力的
intergrated,adjective,整合的
patented,adjective,取得專利的
warranty,noun,保固
accommodate,verb,收容
acquire,verb,收購
municipal,adjective,市政的
conserve,verb,節約
conprehensive,adjective,包羅萬象的
concise,adjective,精簡的
on track,phrase,按部就班
refferal,noun,推薦
appropriate,adjective,適合的
renovation,noun,整修
relocation,noun,搬遷
explict,adjective,明確的
overdue,adjective,逾期的
exceptional,adjective,卓越的
distinctive,adjective,獨特的
confidential,adjective,機密的
`;
str
  .split("\n")
  .filter((el) => el !== "")
  .map((el) => el.split(","))
  .map((el) => ({ title: el[0], group: el[1], trans: el[2], time: new Date().toLocaleString().split(" ")[0] }));
