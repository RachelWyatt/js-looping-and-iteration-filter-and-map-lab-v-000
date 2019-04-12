// Code your solution here:
function driversWithRevenueOver(drivers, amt) {
  let findByRevenue = drivers.filter(function(driver) { return driver.revenue > amt });
  return findByRevenue;
}


function driverNamesWithRevenueOver(driver, revenue) {
  let findNameByRevenue = driversWithRevenueOver(driver,revenue).map(function (driver) {return driver.name});
  return findNameByRevenue;
}

function exactMatch(driver, obj) {
    const matchDriversArr = [];
  const key = Object.keys(obj)[0];
  drivers.filter(function (driver) {if (driver[key] === obj[key]) {matchDriversArr.push(driver)}});
  return matchDriversArr;
}

function exactMatchToList(driver, object) {
  
}

function deepIterator (target) {
  if (typeof target === 'object') {
    for (const key in target) {
      deepIterator(target[key]);
    }
  } else {
    console.log(target);
  }
}