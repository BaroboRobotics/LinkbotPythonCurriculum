/**
 * Created by Adam on 3/2/2015.
 */
chapter3.controller('driversEdPart1', ['$scope', '$timeout', 'robotFactory', function($scope, $timeout, robotFactory) {
    function setRobot(robots) {
        $scope.m.robot = robots[0];
        $scope.m.robot.stop();
    }
    $scope.m = {
        displayAllCode: false,
        robot: null,
        running: false
    };
    $scope.toggle = function() {
        $scope.m.displayAllCode = !$scope.m.displayAllCode;
    };
    $scope.stopAcquisition = function() {
        if ($scope.m.robot !== null) {
            $scope.m.robot.stop();
        }
        robotFactory.unregister();
    };
    $scope.run = function() {
        if ($scope.m.robot === null) {
            return;
        }
        $scope.m.running = true;
        $scope.m.robot.angularSpeed(90,90,90);
        $scope.m.robot.move(360, 0, 0);
        $scope.m.running = false;
    };
    robotFactory.getRobots(setRobot, 1);
    Linkbots.setNavigationTitle('Driver\'s Ed Part 1');
    Linkbots.setNavigationItems([{title:'Introductory Python', url:'/introductory-python/index.html'},
        {title:'Chapter 3', url:'#/'}, {title:'Driver\'s Ed Part 1', url:'#/'}]);
    // 1/11 since it's the first of 11 lessons.
    $('.radial-progress').attr('data-progress', Math.floor((1 / 11) * 100));
}]).controller('driversEdPart2', ['$scope', '$timeout', 'robotFactory', function($scope, $timeout, robotFactory) {
    function setRobot(robots) {
        $scope.m.robot = robots[0];
        $scope.m.robot.stop();
    }
    $scope.m = {
        displayAllCode: false,
        robot: null,
        running: false
    };
    $scope.toggle = function() {
        $scope.m.displayAllCode = !$scope.m.displayAllCode;
    };
    $scope.stopAcquisition = function() {
        if ($scope.m.robot !== null) {
            $scope.m.robot.stop();
        }
        robotFactory.unregister();
    };
    $scope.run = function() {
        if ($scope.m.robot === null) {
            return;
        }
        $scope.m.running = true;
        $scope.m.robot.angularSpeed(90,90,90);
        $scope.m.robot.move(0, 0, -360);
        $scope.m.running = false;
    };
    robotFactory.getRobots(setRobot, 1);
    Linkbots.setNavigationTitle('Driver\'s Ed Part 2');
    Linkbots.setNavigationItems([{title:'Introductory Python', url:'/introductory-python/index.html'},
        {title:'Chapter 3', url:'#/'}, {title:'Driver\'s Ed Part 2', url:'#/drivers-ed-part2'}]);
    $('.radial-progress').attr('data-progress', Math.floor((2 / 11) * 100));
}]).controller('driversEdExplore', ['$scope', '$timeout', 'robotFactory', function($scope, $timeout, robotFactory) {
    function setRobot(robots) {
        $scope.m.robot = robots[0];
        $scope.m.robot.stop();
    }
    $scope.m = {
        displayAllCode: false,
        pos: [0, 0, 0],
        robot: null,
        running: false
    };
    $scope.toggle = function() {
        $scope.m.displayAllCode = !$scope.m.displayAllCode;
    };
    $scope.stopAcquisition = function() {
        if ($scope.m.robot !== null) {
            $scope.m.robot.stop();
        }
        robotFactory.unregister();
    };
    $scope.stop = function() {
        if ($scope.m.robot === null) {
            return;
        }
        $scope.m.robot.stop();
    };
    $scope.run = function() {
        if ($scope.m.robot === null) {
            return;
        }
        var pos = $scope.m.pos.map(function(num) { return parseInt(num, 10); });
        $scope.m.running = true;
        $scope.m.robot.angularSpeed(90,90,90);
        $scope.m.robot.move(pos[0], pos[1], pos[2]);
        $scope.m.running = false;
    };
    robotFactory.getRobots(setRobot, 1);
    Linkbots.setNavigationTitle('Driver\'s Ed: Explore');
    Linkbots.setNavigationItems([{title:'Introductory Python', url:'/introductory-python/index.html'},
        {title:'Chapter 3', url:'#/'}, {title:'Driver\'s Ed: Explore', url:'#/drivers-ed-explore'}]);
    $('.radial-progress').attr('data-progress', Math.floor((3 / 11) * 100));
}]).controller('driversEdChallenge', ['$scope', '$timeout', 'robotFactory', function($scope, $timeout, robotFactory) {
    function setRobot(robots) {
        $scope.m.robot = robots[0];
        $scope.m.robot.stop();
    }
    $scope.m = {
        displayAllCode: false,
        pos: [0, 0, 0],
        robot: null,
        running: false,
        alt1: 'box unchecked',
        alt2: 'box unchecked',
        src1: 'img/box.svg',
        src2: 'img/box.svg'
    };
    $scope.toggle = function() {
        $scope.m.displayAllCode = !$scope.m.displayAllCode;
    };
    $scope.stopAcquisition = function() {
        if ($scope.m.robot !== null) {
            $scope.m.robot.stop();
        }
        robotFactory.unregister();
    };
    $scope.stop = function() {
        if ($scope.m.robot === null) {
            return;
        }
        $scope.m.robot.stop();
    };
    $scope.run = function() {
        if ($scope.m.robot === null) {
            return;
        }
        var pos = $scope.m.pos.map(function(num) { return parseInt(num, 10); });
        $scope.m.running = true;
        $scope.m.robot.angularSpeed(90,90,90);
        $scope.m.robot.move(pos[0], pos[1], pos[2]);
        $scope.m.running = false;
        if (pos[0] < 0 && pos[2] < 0 && pos[0] == pos[2] ) {
            $scope.m.src2 = 'img/check.svg';
            $scope.m.alt2 = 'box checked';
        } else if (pos[0] > 0 && pos[2] < 0 && (pos[0] === (pos[2] * - 1) )) {
            $scope.m.src1 = 'img/check.svg';
            $scope.m.alt1 = 'box checked';
        } else {
            if ($scope.m.alt1 !== 'box checked') {
                $scope.m.src1 = 'img/cross.svg';
                $scope.m.alt1 = 'box error';
            }
            if ($scope.m.alt2 !== 'box checked') {
                $scope.m.src2 = 'img/cross.svg';
                $scope.m.alt2 = 'box error';
            }
        }
    };
    robotFactory.getRobots(setRobot, 1);
    Linkbots.setNavigationTitle('Driver\'s Ed: Challenge');
    Linkbots.setNavigationItems([{title:'Introductory Python', url:'/introductory-python/index.html'},
        {title:'Chapter 3', url:'#/'}, {title:'Driver\'s Ed: Challenge', url:'#/drivers-ed-challenge'}]);
    $('.radial-progress').attr('data-progress', Math.floor((4 / 11) * 100));
}]).controller('lessonOneController', ['$scope', '$timeout', 'robotFactory', function($scope, $timeout, robotFactory) {
    function setRobot(robots) {
        $scope.m.robot = robots[0];
        $scope.m.robot.stop();
    }
    $scope.m = {
        displayAllCode: false,
        robot: null,
        running: false
    };
    $scope.toggle = function() {
        $scope.m.displayAllCode = !$scope.m.displayAllCode;
    };
    $scope.stopAcquisition = function() {
        if ($scope.m.robot !== null) {
            $scope.m.robot.stop();
        }
        robotFactory.unregister();
    };
    $scope.run = function() {
        if ($scope.m.robot === null) {
            return;
        }
        $scope.m.running = true;
        $scope.m.robot.angularSpeed(90,0,90);
        $scope.m.robot.move(0, 0, -190);
        $scope.m.running = false;
    };
    robotFactory.getRobots(setRobot, 1);
    Linkbots.setNavigationTitle('Lesson One');
    Linkbots.setNavigationItems([{title:'Introductory Python', url:'/introductory-python/index.html'},
        {title:'Chapter 3', url:'#/'}, {title:'Lesson One', url:'#/lesson-one'}]);
    $('.radial-progress').attr('data-progress', Math.floor((5 / 11) * 100));
}]).controller('lessonTwoController', ['$scope', '$timeout', 'robotFactory', function($scope, $timeout, robotFactory) {
    function setRobot(robots) {
        $scope.m.robot = robots[0];
        $scope.m.robot.stop();
    }
    $scope.m = {
        displayAllCode: false,
        robot: null,
        running: false,
        speed: [90, 90, 90]
    };
    $scope.toggle = function() {
        $scope.m.displayAllCode = !$scope.m.displayAllCode;
    };
    $scope.stopAcquisition = function() {
        if ($scope.m.robot !== null) {
            $scope.m.robot.stop();
        }
        robotFactory.unregister();
    };
    $scope.run = function() {
        if ($scope.m.robot === null) {
            return;
        }
        $scope.m.running = true;
        var speeds = $scope.m.speed.map(function(num) { return Math.abs(parseInt(num, 10)) % 241; });
        $scope.m.robot.angularSpeed(speeds[0],speeds[1],speeds[2]);
        $scope.m.robot.move(0, 0, -190);
        $scope.m.running = false;
    };
    robotFactory.getRobots(setRobot, 1);
    Linkbots.setNavigationTitle('Lesson Two');
    Linkbots.setNavigationItems([{title:'Introductory Python', url:'/introductory-python/index.html'},
        {title:'Chapter 3', url:'#/'}, {title:'Lesson Two', url:'#/lesson-two'}]);
    $('.radial-progress').attr('data-progress', Math.floor((6 / 11) * 100));
}]).controller('lessonThreeController', ['$scope', '$timeout', 'robotFactory', function($scope, $timeout, robotFactory) {
    function setRobot(robots) {
        $scope.m.robot = robots[0];
        $scope.m.robot.stop();
    }
    $scope.m = {
        displayAllCode: false,
        robot: null,
        running: false,
        speed: [90, 90, 90],
        move: [190, 0, 0]
    };
    $scope.toggle = function() {
        $scope.m.displayAllCode = !$scope.m.displayAllCode;
    };
    $scope.stopAcquisition = function() {
        if ($scope.m.robot !== null) {
            $scope.m.robot.stop();
        }
        robotFactory.unregister();
    };
    $scope.run = function() {
        if ($scope.m.robot === null) {
            return;
        }
        $scope.m.running = true;
        var speeds = $scope.m.speed.map(function(num) { return Math.abs(parseInt(num, 10)) % 241; });
        var movement = $scope.m.move.map(function(num) { return parseFloat(num) % 361; });
        $scope.m.robot.angularSpeed(speeds[0],speeds[1],speeds[2]);
        $scope.m.robot.move(movement[0], movement[1], movement[2]);
        $scope.m.running = false;
    };
    robotFactory.getRobots(setRobot, 1);
    Linkbots.setNavigationTitle('Lesson Three');
    Linkbots.setNavigationItems([{title:'Introductory Python', url:'/introductory-python/index.html'},
        {title:'Chapter 3', url:'#/'}, {title:'Lesson Three', url:'#/lesson-three'}]);
    $('.radial-progress').attr('data-progress', Math.floor((7 / 11) * 100));
}]).controller('lessonFourController', ['$scope', '$timeout', 'robotFactory', function($scope, $timeout, robotFactory) {
    function setRobot(robots) {
        $scope.m.robot = robots[0];
        $scope.m.robot.stop();
    }
    $scope.m = {
        displayAllCode: false,
        robot: null,
        running: false,
        speed: [45, 0, 45],
        move: [-190, 0, 190]
    };
    $scope.toggle = function() {
        $scope.m.displayAllCode = !$scope.m.displayAllCode;
    };
    $scope.stopAcquisition = function() {
        if ($scope.m.robot !== null) {
            $scope.m.robot.stop();
        }
        robotFactory.unregister();
    };
    $scope.run = function() {
        if ($scope.m.robot === null) {
            return;
        }
        $scope.m.running = true;
        var speeds = $scope.m.speed.map(function(num) { return Math.abs(parseInt(num, 10)) % 241; });
        var movement = $scope.m.move.map(function(num) { return parseFloat(num) % 361; });
        $scope.m.robot.angularSpeed(speeds[0],speeds[1],speeds[2]);
        $scope.m.robot.move(movement[0], movement[1], movement[2]);
        $scope.m.running = false;
    };
    robotFactory.getRobots(setRobot, 1);
    Linkbots.setNavigationTitle('Lesson Four');
    Linkbots.setNavigationItems([{title:'Introductory Python', url:'/introductory-python/index.html'},
        {title:'Chapter 3', url:'#/'}, {title:'Lesson Four', url:'#/lesson-four'}]);
    $('.radial-progress').attr('data-progress', Math.floor((8 / 11) * 100));
}]).controller('lessonFiveController', ['$scope', '$timeout', 'robotFactory', function($scope, $timeout, robotFactory) {
    function setRobot(robots) {
        $scope.m.robot = robots[0];
        $scope.m.robot.stop();
    }
    $scope.m = {
        displayAllCode: false,
        robot: null,
        running: false,
        speed: [90, 0, 90],
        move: [190, 0, 190]
    };
    $scope.toggle = function() {
        $scope.m.displayAllCode = !$scope.m.displayAllCode;
    };
    $scope.stopAcquisition = function() {
        if ($scope.m.robot !== null) {
            $scope.m.robot.stop();
        }
        robotFactory.unregister();
    };
    $scope.run = function() {
        if ($scope.m.robot === null) {
            return;
        }
        $scope.m.running = true;
        var speeds = $scope.m.speed.map(function(num) { return Math.abs(parseInt(num, 10)) % 241; });
        var movement = $scope.m.move.map(function(num) { return parseFloat(num) % 361; });
        $scope.m.robot.angularSpeed(speeds[0],speeds[1],speeds[2]);
        $scope.m.robot.move(movement[0], movement[1], movement[2]);
        $scope.m.running = false;
    };
    robotFactory.getRobots(setRobot, 1);
    Linkbots.setNavigationTitle('Lesson Five');
    Linkbots.setNavigationItems([{title:'Introductory Python', url:'/introductory-python/index.html'},
        {title:'Chapter 3', url:'#/'}, {title:'Lesson Five', url:'#/lesson-five'}]);
    $('.radial-progress').attr('data-progress', Math.floor((9 / 11) * 100));
}]).controller('lessonSixController', ['$scope', '$timeout', 'robotFactory', function($scope, $timeout, robotFactory) {
    function setRobot(robots) {
        $scope.m.robot = robots[0];
        $scope.m.robot.stop();
    }
    $scope.m = {
        displayAllCode: false,
        robot: null,
        running: false,
        speed: [90, 0, 1.89, 90],
        move: [240, 0, -1.89, 240]
    };
    $scope.toggle = function() {
        $scope.m.displayAllCode = !$scope.m.displayAllCode;
    };
    $scope.stopAcquisition = function() {
        if ($scope.m.robot !== null) {
            $scope.m.robot.stop();
        }
        robotFactory.unregister();
    };
    $scope.run = function() {
        if ($scope.m.robot === null) {
            return;
        }
        $scope.m.running = true;
        var speeds = $scope.m.speed.map(function(num) { return Math.abs(parseFloat(num)) % 240; });
        var movement = $scope.m.move.map(function(num) { return parseFloat(num); });
        $scope.m.robot.angularSpeed(speeds[0],speeds[1], (speeds[2] * speeds[3]));
        $scope.m.robot.move(movement[0], movement[1], (movement[2] *  movement[3]));
        $scope.m.running = false;
    };
    robotFactory.getRobots(setRobot, 1);
    Linkbots.setNavigationTitle('Lesson Six');
    Linkbots.setNavigationItems([{title:'Introductory Python', url:'/introductory-python/index.html'},
        {title:'Chapter 3', url:'#/'}, {title:'Lesson Six', url:'#/lesson-six'}]);
    $('.radial-progress').attr('data-progress', Math.floor((10 / 11) * 100));
}]).controller('lessonSevenController', ['$scope', '$timeout', 'robotFactory', function($scope, $timeout, robotFactory) {
    function setRobot(robots) {
        $scope.m.robot = robots[0];
        $scope.m.robot.stop();
    }
    $scope.m = {
        displayAllCode: false,
        robot: null,
        running: false,
        radius: 0,
        ratio: 0,
        outsideDegrees: 0,
        insideDegrees: 0
    };
    $scope.toggle = function() {
        $scope.m.displayAllCode = !$scope.m.displayAllCode;
    };
    $scope.stopAcquisition = function() {
        if ($scope.m.robot !== null) {
            $scope.m.robot.stop();
        }
        robotFactory.unregister();
    };
    $scope.run = function() {
        if ($scope.m.robot === null) {
            return;
        }
        $scope.m.running = true;
        $scope.m.robot.angularSpeed(90, 0, parseInt(90*$scope.m.ratio, 10));
        $scope.m.robot.move($scope.m.insideDegrees, movement[1], $scope.m.outsideDegrees);
        $scope.m.running = false;
    };
    $scope.radiusChange = function() {
        var radius = parseFloat($scope.m.radius);
        $scope.m.ratio = ((radius + (3.6975/2)) / (radius-(3.6975 / 2)));
        $scope.m.outsideDegrees = -((((radius + (3.6975)/2)/1.69)) *360);
        $scope.m.insideDegrees = ((((radius - (3.6975)/2)/1.69)) *360);
    };
    robotFactory.getRobots(setRobot, 1);
    $scope.radiusChange();
    Linkbots.setNavigationTitle('Lesson Seven');
    Linkbots.setNavigationItems([{title:'Introductory Python', url:'/introductory-python/index.html'},
        {title:'Chapter 3', url:'#/'}, {title:'Lesson Seven', url:'#/lesson-seven'}]);
    $('.radial-progress').attr('data-progress', Math.floor((11 / 11) * 100));
}]);