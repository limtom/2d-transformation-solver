var should = require('chai').should(),
    trafoSolver= require('../index'),
    estimate2DTrafo = trafoSolver.estimate2DTrafo;

describe('#estimate2DTrafo', function() {
  it('solves the transformation', function() {
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
      'm': 0.0,
      'alpha': 0.0
    }
    estimate2DTrafo(pointSet).should.deep.equal(resultSet);
  });
});
