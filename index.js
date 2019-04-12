// Code your solution here:
function driversWithRevenueOver(drivers, amt) {
  let findByRevenue = drivers.filter(function(driver) { return driver.revenue > amt });
  return findByRevenue;
}


function driverNamesWithRevenueOver(driver, revenue) {
  let findNameByRevenue = driversWithRevenueOver(driver,revenue).map(function (driver) {return driver.name});
}

function exactMatch(driver, object) {
  
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