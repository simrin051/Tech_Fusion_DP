var arr=["simrin","simrn","joshi","sigi","john"];

const groupBy = <T, K extends keyof any>(list: T[], getKey: (item: T) => K) =>
  list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    if (!previous[group]) previous[group] = [];
    previous[group].push(currentItem);
    return previous;
  }, {} as Record<K, T[]>);

  const results = groupBy(arr, i => i.substring(0,1));
  console.log(results);