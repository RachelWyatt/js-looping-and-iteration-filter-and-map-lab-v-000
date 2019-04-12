// Code your solution here:
function driversWithRevenueOver(drivers, amt) {
  let findByRevenue = drivers.filter(function(driver) { return driver.revenue > amt });
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