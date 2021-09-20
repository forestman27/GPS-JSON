'use strict'

const util = require('util') // for promisifying some callbacks
const fs = require('fs')
const readFile = util.promisify(fs.readFile) 

const xml2js = require('xml2js') // for parsing gpx file
const xmlParser = new xml2js.Parser()
const parseString = util.promisify(xmlParser.parseString)

// in project
const Geo = require('./Geo'); 


/**
 * 
 * @param {}
 * 
 * @param {*} type 
 * @returns {
 *   name: String, 
 *   times {start Date(), end Date()}, 
 *   created: Date(),
 *   creator: String,
 *   link {href, text},
 *   type:{Route or activity}
 * 
 *   // anything associated with a specific coordinate in the sequence. 
 *   // Why would anyone want to use gpx? Super geeky nerds.
 *   points:[
 *     { 
 *      coord:[lat, lng] 
 *      elev: m
 *      time: Date()
 *      dist: m (bonus);
 *      hr: bpm
 *      watts: power (metric)
 *      cad: rpm
 *      temp: celsius
 *      ... just getting started...
 *     }
 *   ... ]
 * }
 */
export function parse(filepath, type, distance = true) {
    try {
        switch(type) {
            case('gpx'): return gpx(filepath);
            case('fit'): return fit(filepath);
            case('tcx'): return tcx(filepath);
            default: throw new Error('type parameter invalid');
        }
    } catch(e) {
        console.error(e)
    }
}

/**
 * 
 * Wiki information of gpx
 
 * wptType is an individual waypoint among a collection of points with no sequential relationship. 
   It consists of the WGS 84 (GPS) coordinates of a point and possibly other descriptive information.

 * rteType is a route, an ordered list of routepoint (waypoints representing a series of significant turn or stage points) 
   leading to a destination.[3]

 * trkType is a track, made of at least one segment containing waypoints, that is, an ordered list of points describing a path.
   [3] A Track Segment holds a list of Track Points which are logically connected in order. To represent a single GPS track where 
   GPS reception was lost, or the GPS receiver was turned off, start a new Track Segment for each continuous span of track data.

 */
function gpx(filepath) {

}

function fit(filepath) {

}

function tcx(filepath) {

}