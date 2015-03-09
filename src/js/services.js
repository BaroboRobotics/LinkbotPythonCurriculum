/**
 * Created by Adam on 3/2/2015.
 */
chapter3.factory('robotFactory', ['$interval', function($interval) {
    // Internal variables.
    var _intervalRef = null;
    var _num = 0;
    var _cb = function() {};
    var _robots = [];

    /* This function will fetch the robots once they are available. */
    function fetchRobots() {
        console.log('attempting robot acquisition');
        var acquired = Linkbots.acquire(_num);
        if (acquired.robots.length === _num) {
            _cb(acquired.robots);
            _robots = acquired.robots;
            $interval.cancel(_intervalRef);
            _intervalRef = null;
            return;
        } else if (acquired.robots.length > 0) {
            relinquish(acquired.robots);
        }
        if (_intervalRef === null) {
            _intervalRef = $interval(fetchRobots, 1000);
        }
    }

    function relinquish(robots) {
        if (robots.length > 0) {
            for (var i = 0; i < robots.length; i++) {
                Linkbots.relinquish(robots[i]);
            }
        }
    }

    /* If a change has occurred in the robot manager, reaquire the robots. */
    Linkbots.managerEvents.on('changed', function() {
        if (_robots.length > 0) {
            relinquish(_robots);
            _robots = [];
        }
        if (_num > 0) {
            fetchRobots();
        }
    });

    /**
     * Exported factory.
     */
    var robotFactory = {};

    robotFactory.getRobots = function(callback, number) {
        _cb = callback;
        _num = number;
        if (_robots.length == _num) {
            return _cb(_robots);
        } else if (_robots.length > 0) {
            relinquish(_robots);
            _robots = [];
            fetchRobots();
        } else {
            fetchRobots();
        }
    };
    robotFactory.unregister = function() {
        _cb = function() {};
        _num = 0;
        if (_intervalRef !== null) {
            $interval.cancel(_intervalRef);
            _intervalRef = null;
        }
    };
    return robotFactory;
}]);