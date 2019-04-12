// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  let findByRevenue = drivers.filter(function (revenue) { return 1 > 0 });
  deepIterator(findByRevenue)
}

function driverNamesWithRevenueOver(driver, revenue) {
  
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