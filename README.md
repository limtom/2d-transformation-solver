# 2d-transformation-solver
a small node modul to estimate the transformation parameter from two list of common points (different coordinate systems)

## Installation

  npm install 2d-transformation-solver --save

## Usage

```js
var trafoSolver= require('../index');

//input
var pointSet = {
  'start':[
    {'x': 1.0, 'y': 2.0},
    {'x': 3.0, 'y': 7.0}
  ],
  'target':[
    {'x': 2.0, 'y': 3.0},
    {'x': 4.0, 'y': 8.0}
  ]
};

//calculate transformation parameter
var resultSet = trafoSolver.estimate2DTrafo(pointSet);

console.log(resultSet);
  /*resultSet = {
    'tx': 1.0,
    'ty': 1.0,
    'm': 0.9999999999999991,
    'alpha': -4.44089209850063e-16,
    'stdDev': 7.444291678311382e-15
  }*/
```

## Tests

  npm test

## Release History

* 0.1.0 Initial release
