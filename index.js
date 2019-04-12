// Code your solution here:
function driversWithRevenueOver(drivers, amt) {
  let findByRevenue = drivers.filter(function(driver) { return driver.revenue > amt });
  return findByRevenue;
}
function driversWithRevenueOver(drivers, amt) {
  let matchyBois = drivers.filter(function(matches) {
    return matches.revenue > amt;
  });
  return matchyBois;
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