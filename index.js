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
   * @return {number} resultSet.alpha - rotation in z
   * @return {number} resultSet.m - scale
   */
   estimate2DTrafo: function(pointSet) {

    //check if given pointSet is valid
    if(pointSet == null || pointSet.start == null || pointSet.target == null){
      return null;
    }

    //do the magic
    var resultSet = {
      'tx': 1.0,
      'ty': 1.0,
      'm': 0.0,
      'alpha': 0.0
    }

    return resultSet
  },
};
