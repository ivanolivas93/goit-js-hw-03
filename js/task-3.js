const findBestEmployee = function (employees) {
  let max = 0;
  let maxTasks = null;

  for (const [name, tasks] of Object.entries(employees)) {
    if (max < tasks) {
      max = tasks;
      maxTasks = name;
    }
  }

  return maxTasks;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);
