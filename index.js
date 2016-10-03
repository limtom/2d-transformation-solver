var math = require('mathjs');

module.exports = {
  /**
   * Estimates the transformation parameter from a given pointSet.
   * pointSet.start = Array of points (x,y) with coordinates in start system
   * pointSet.target = Array of points (x,y) with coordinates in target system
   *
   * @param  {Object} pointSet
   * @param  {Object[]} pointSet.start - points with coordinates in start system
   * @param  {Object[]} pointSet.target - points with coordinates in target system
   * @param  {number} pointSet[].x - x-coordinate
   * @param  {number} pointSet[].y - y-coordinate
   * @return {Object} resultSet
   * @return {number} resultSet.tx - translation in x
   * @return {number} resultSet.ty - translation in y
   * @return {number} resultSet.alpha - rotation
   * @return {number} resultSet.m - scale
   * @return {number} resultSet.stdDev - standard deviation
   */
   estimate2DTrafo: function(pointSet) {

    //check if given pointSet is valid
    if(pointSet == null || pointSet.start == null || pointSet.target == null){
      return null;
    }
    if(pointSet.start.length != pointSet.target.length){
      console.log(
        "point count ist not vaild. length of start and target is not the same "
      );
      return null;
    }

    //init matrix a and l vector
    var a = [];
    var l = [];

    //build up a-matrix and l-vector
    for (i = 0; i < pointSet.start.length; i++) {

        a.push([pointSet.start[i].x, -pointSet.start[i].y, 1.0, 0.0]);
        l.push(pointSet.target[i].x);

        a.push([pointSet.start[i].y, pointSet.start[i].x, 0.0, 1.0]);
        l.push(pointSet.target[i].y);

    }

    //solve normal eq-system
    var atMatrix = math.transpose(a);
    var nMatrix = math.multiply(atMatrix, a);
    var qMatrix = math.inv(nMatrix);
    var uVector = math.multiply(qMatrix, math.multiply(atMatrix,l));
    var vVector = math.subtract(math.multiply(a, uVector), l);

    //calc rotation
    var rotation = math.atan2(uVector[1],uVector[0]);

    //calc scale
    var scale = uVector[0] / math.cos(rotation);

    //calc standard deviation
    var sumVv = 0.0;
    for (var i = 0; i < vVector.length; i++) {
      sumVv += vVector[i]*vVector[i];
    }
    var stdDev = math.sqrt(sumVv/(pointSet.start.length * 2.0 - 3.0));

    //setup result
    var resultSet = {
      'tx': uVector[2],
      'ty': uVector[3],
      'm': scale,
      'alpha': rotation,
      'stdDev': stdDev
    }

    return resultSet
  },
};
