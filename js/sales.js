'use strict';

//Stores the min/max hourly customers, and the average cookies per customer, in object properties

//Create object tree with parent object = shop

var shopHour = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var shop = {
  location: [    //define properties for each location
    {
      address: '1st and Pike', //key = address; value = 1st and pike
      minCust: 23,
      maxCust: 65,
      avgCookieSale: 6.3,
      totalCookies: 0,
      hourlyCookies: [],

      cookiesPerHour: function() {
        for(var i = 0; i < shopHour.length; i++) {
          this.hourlyCookies.push(shop.numRandomCust(this.minCust, this.maxCust));
        }
      },
      totalCookiesGenerator: function() {
        for(var i = 0; i < this.hourlyCookies.length; i++) {
          this.totalCookies += this.hourlyCookies[i];
        }
      }
    },
    {
      address: 'SeaTac Airport',
      minCust: 3,
      maxCust: 24,
      avgCookieSale: 1.2,
      totalCookies: 0,
      hourlyCookies: [],

      cookiesPerHour: function() {
        for(var i = 0; i < shopHour.length; i++) {
          this.hourlyCookies.push(shop.numRandomCust(this.minCust, this.maxCust));
        }
      },
      totalCookiesGenerator: function() {
        for(var i = 0; i < this.hourlyCookies.length; i++) {
          this.totalCookies += this.hourlyCookies[i];
        }
      }
    },
    {
      address: 'Seattle Center',
      minCust: 11,
      maxCust: 38,
      avgCookieSale: 3.7,
      totalCookies: 0,
      hourlyCookies: [],

      cookiesPerHour: function() {
        for(var i = 0; i < shopHour.length; i++) {
          this.hourlyCookies.push(shop.numRandomCust(this.minCust, this.maxCust));
        }
      },
      totalCookiesGenerator: function() {
        for(var i = 0; i < this.hourlyCookies.length; i++) {
          this.totalCookies += this.hourlyCookies[i];
        }
      }
    },
    {
      address: 'Capitol Hill',
      minCust: 20,
      maxCust: 38,
      avgCookieSale: 2.3,
      totalCookies: 0,
      hourlyCookies: [],

      cookiesPerHour: function() {
        for(var i = 0; i < shopHour.length; i++) {
          this.hourlyCookies.push(shop.numRandomCust(this.minCust, this.maxCust));
        }
      },
      totalCookiesGenerator: function() {
        for(var i = 0; i < this.hourlyCookies.length; i++) {
          this.totalCookies += this.hourlyCookies[i];
        }
      }
    },
    {
      address: 'Alki',
      minCust: 2,
      maxCust: 16,
      avgCookieSale: 4.6,
      totalCookies: 0,
      hourlyCookies: [],

      cookiesPerHour: function() {
        for(var i = 0; i < shopHour.length; i++) {
          this.hourlyCookies.push(shop.numRandomCust(this.minCust, this.maxCust));
        }
      },
      totalCookiesGenerator: function() {
        for(var i = 0; i < this.hourlyCookies.length; i++) {
          this.totalCookies += this.hourlyCookies[i];
        }
      }
    },
  ],

  numRandomCust: function(min, max) {
    return Math.random() * (max-min) + min;
  },


};

console.log(shop.numRandomCust(shop.location[1].minCust, shop.location[1].maxCust));


// Create a new element and store it in a variable.
var newEl = document.createElement('li');
//Create a text node and store it in a variable.
var newText = document.createTextNode('shopHour');
//Attach the new text node to the new element.
newEl.appendChild(newText);
//Find the position where the new element should be added.
var position = document.getElementByTagsName('ul')[0];
//Insert the new element into its position
position.appendChild(newEl);


//-----Unused Code---------
// var total = 0;
// for(var i = 0; i < cookiesPurchased; i++) {
//   total += cookiesPurchased[i];
// }
// var avg = total/cookiesPurchased.length;


// function getAvg(cookiesPurchased {
// return cookiesPurchased.reduce(function (a, b) {
//   return a + b;
// })

// }
// getAvg(cookiesPurchased); //result =



// var address = ['1st and Pike', 'SeaTac Airport'];
// var globalTime = [6, 7, 8, 9, 10, 11, 12, 13, 1 ];

// shop.location[0];


// }
