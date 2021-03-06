/* Copyright (c) 2011 by Björn Harrtell.
 * Published under the GNU Lesser GPL 2.1 license.
 * See https://github.com/bjornharrtell/jsts/blob/master/license.txt for the
 * full text of the license.
 */

/**
 * Supplies a set of utility methods for building Geometry objects from lists
 * of Coordinates.
 *
 * Note that the factory constructor methods do <b>not</b> change the input
 * coordinates in any way.
 *
 * In particular, they are not rounded to the supplied <tt>PrecisionModel</tt>.
 * It is assumed that input Coordinates meet the given precision.
 */


/**
 * Constructs a GeometryFactory that generates Geometries having a floating
 * PrecisionModel and a spatial-reference ID of 0.
 */
jsts.geom.GeometryFactory = function() {

};


/**
 * The ID of the Spatial Reference System used by this
 * <code>GeometryFactory</code>
 */
jsts.geom.GeometryFactory.prototype.SRID = null;


/**
 * @return {int} The ID of the Spatial Reference System used by this
 *         <code>GeometryFactory.</code>
 */
jsts.geom.GeometryFactory.prototype.getSRID = function() {
  return this.SRID;
};


/**
 * Creates a Point using the given Coordinate; a null Coordinate will create an
 * empty Geometry.
 *
 * @param {Coordinate}
 *          coordinate Coordinate to base this Point on.
 * @return {Point} A new Point.
 */
jsts.geom.GeometryFactory.prototype.createPoint = function(coordinate) {
  return new jsts.geom.Point(coordinate, this);
};


/**
 * Creates a LineString using the given Coordinates; a null or empty array will
 * create an empty LineString. Consecutive points must not be equal.
 *
 * @param {Coordinate[]}
 *          coordinates an array without null elements, or an empty array, or
 *          null.
 * @return {LineString} A new LineString.
 */
jsts.geom.GeometryFactory.prototype.createLineString = function(coordinates) {
  return new jsts.geom.LineString(coordinates, this);
};


/**
 * Creates a LinearRing using the given Coordinates; a null or empty array will
 * create an empty LinearRing. The points must form a closed and simple
 * linestring. Consecutive points must not be equal.
 *
 * @param {Coordinate[]} coordinates
 *          an array without null elements, or an empty array, or null.
 * @return {LinearRing} A new LinearRing.
 */
jsts.geom.GeometryFactory.prototype.createLinearRing = function(coordinates) {
  return new jsts.geom.LinearRing(coordinates, this);
};
