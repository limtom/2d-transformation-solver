var should = require('chai').should(),
    trafoSolver= require('../index'),
    estimate2DTrafo = trafoSolver.estimate2DTrafo;

describe('#estimate2DTrafo', function() {
  it('solves the transformation with minimum config', function() {
    //test data
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
    //reference resultSet
    var resultSet = {
      'tx': 1.0,
      'ty': 1.0,
      'scale': 0.9999999999999991,
      'rotation': -4.44089209850063e-16,
      'stdDev': 7.444291678311382e-15
    }
    estimate2DTrafo(pointSet).should.deep.equal(resultSet);
  });

  it('solves the transformation with more then two points', function() {
    //test data
    var pointSet = {
      'start':[
        {'x': 1.0, 'y': 2.0},
        {'x': 3.0, 'y': 7.0},
        {'x': 12.0, 'y': -8.0}
      ],
      'target':[
        {'x': 2.0, 'y': 3.0},
        {'x': 4.0, 'y': 8.0},
        {'x': 13.2, 'y': -7.3}
      ]
    };
    //reference resultSet
    var resultSet = {
      "rotation": -0.0017621127136318178,
      "scale": 1.020685037871555,
      "stdDev": 0.047541475014168125,
      "tx": 0.9557553956834557,
      "ty": 0.902697841726619
    }
    estimate2DTrafo(pointSet).should.deep.equal(resultSet);
  });
});
