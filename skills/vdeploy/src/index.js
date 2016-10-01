/**
    Copyright 2016 Vantiv. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/**
 * App ID for the skill
 */
var APP_ID = undefined;//replace with 'amzn1.echo-sdk-ams.app.[your-unique-value-here]';

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

/**
 * VdeploySkill is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var VdeploySkill = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
VdeploySkill.prototype = Object.create(AlexaSkill.prototype);
VdeploySkill.prototype.constructor = VdeploySkill;

/**
 * Overriden to show that a subclass can override this function to initialize session state.
 */
VdeploySkill.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);

    // Any session init logic would go here.
};

/**
 * If the user launches without specifying an intent, route to the correct function.
 */
VdeploySkill.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("VdeploySkill onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);

    handleDeploySiteIntent(session, response);
};

/**
 * Overriden to show that a subclass can override this function to teardown session state.
 */
VdeploySkill.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);

    //Any session cleanup logic would go here.
};

VdeploySkill.prototype.intentHandlers = {
    "DeploySiteIntent": function (intent, session, response) {
        handleDeploySiteIntent(session, response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        var speechText = "";

        var speechOutput = {
            speech: speechText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        var repromptOutput = {
            speech: speechText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        // For the repromptText, play the speechOutput again
        response.ask(speechOutput, repromptOutput);
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

/**
 * 
 */
function handleDeploySiteIntent(session, response) {
    var speechText = "No problem. Now deploying the vauction site to AWS.";
    
    httpGetAsync("http://ec2-54-86-6-122.compute-1.amazonaws.com/deploy.php", 
        function(){
            console.log("GET complete");
        }
    );

    var speechOutput = {
        speech: speechText,
        type: AlexaSkill.speechOutputType.PLAIN_TEXT
    };
    response.tellWithCard(speechOutput, "Vauction", speechText);
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("POST", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the WiseGuy Skill.
    var skill = new VdeploySkill();
    skill.execute(event, context);
};
