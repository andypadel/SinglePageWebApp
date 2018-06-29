//VUE
var app = new Vue({
	el: '#locationListDiv',
	data: {
		fixtures: {},
		teams: {},
		stadiums: {},
	},
});

var data;

$(document).ready(function () {
	$.ajax({
		type: 'GET',
		url: "https://api.myjson.com/bins/q133n",
		success: OnDataReady,

		error: function (json) {
			console.log(data);
		}
	})
});

function OnDataReady(json) {
	data = json;
	console.log("info", data)
	createHome();
	createStadArray();
	createNextGames();
	createChat();
	app.fixtures = data.fixtures;
	console.log(app.fixtures);
	app.stadiums = data.stadiums;
	console.log(app.stadiums);
}

var title = document.getElementById("head-title-div");
var homeDiv = document.getElementById("home-div");
var nextGamesBodyDiv = document.getElementById("next-games-div");
var locationBodyDiv = document.getElementById("locationBodyDiv");
var locationListDiv = document.getElementById("locationListDiv");
var chatBody = document.getElementById("chatBody");

var stadiumArray = [];

var divArray = [nextGamesBodyDiv, locationBodyDiv, locationListDiv, chatBody];

function createStadArray() {
	for (i = 0; i < data.stadiums.length; i++) {
		stadiumArray.push(data.stadiums[i]);
	}
}

function createHome() {

	//	document.getElementById("back-div").addEventListener("click", showNextGames);

	var homeIcon = document.getElementById("home-img");
	homeIcon.addEventListener("click", buttonClick);
	var chatIcon = document.getElementById("chat-img");
	chatIcon.addEventListener("click", buttonClick);
	var stadIcon = document.getElementById("stad-img");
	stadIcon.addEventListener("click", buttonClick);
}

function createNextGames() {

	var nextGamesDiv = document.createElement("div");
	nextGamesDiv.setAttribute("class", "nextGamesDiv");

	var instructionsDiv2 = document.createElement("div");
	instructionsDiv2.setAttribute("class", "instructionsDiv");
	instructionsDiv2.innerHTML = "Click on the stadium  name for more info";

	nextGamesBodyDiv.append(instructionsDiv2);


	for (i = 0; i < 8; i++) {
		var homeTeam = (data.fixtures.september[i]["home-team"]);
		var gameTime = (data.fixtures.september[i]["time"]);
		var gameDate = (data.fixtures.september[i]["date"]);
		var awayTeam = (data.fixtures.september[i]["away-team"]);
		var gameLocation = (data.fixtures.september[i]["location"]);

		var matchDiv = document.createElement("div");
		matchDiv.setAttribute("class", "matchDiv");

		var infoDiv = document.createElement("div");
		infoDiv.setAttribute("class", "infoDiv");

		var locSpan = document.createElement("span");
		locSpan.setAttribute("class", "locSpan");
		locSpan.setAttribute("data-stadname", gameLocation);
		locSpan.setAttribute("data-className", "locationBodyDiv");
		locSpan.addEventListener("click", createLocation);
		locSpan.addEventListener("click", buttonClick);
		locSpan.innerHTML = gameLocation;

		var dateSpan = document.createElement("span");
		dateSpan.setAttribute("class", "dateSpan");
		dateSpan.innerHTML = gameDate;

		var gameDiv = document.createElement("div");
		gameDiv.setAttribute("class", "gameDiv");

		var hTDiv = document.createElement("div");
		hTDiv.setAttribute("class", "hTDiv");
		hTDiv.innerHTML = homeTeam;

		var gTDiv = document.createElement("div");
		gTDiv.setAttribute("class", "gTDiv");
		gTDiv.innerHTML = gameTime;

		var aTDiv = document.createElement("div");
		aTDiv.setAttribute("class", "aTDiv");
		aTDiv.innerHTML = awayTeam;

		nextGamesBodyDiv.append(nextGamesDiv);
		nextGamesDiv.append(matchDiv);
		matchDiv.append(infoDiv);
		infoDiv.append(dateSpan);
		infoDiv.append(locSpan);
		matchDiv.append(gameDiv);
		gameDiv.append(hTDiv);
		gameDiv.append(gTDiv);
		gameDiv.append(aTDiv);
	}
};

function createLocation() {

	locationBodyDiv.innerHTML = " ";

	var locationDiv = document.createElement("div");
	locationDiv.setAttribute("class", "locationDiv");

	var clicked = this.getAttribute("data-stadname");
	console.log(clicked);

	for (i = 0; i < stadiumArray.length; i++) {

		if (clicked === stadiumArray[i]["name"]) {

			var stadiumName = (stadiumArray[i]["name"]);
			var stadiumAddress = (stadiumArray[i]["address"]);
			var iframeURL = (stadiumArray[i]["maps_url"]);
			var picURL = (stadiumArray[i]["picture"]);

			var locSpan = document.getElementById("locSpan");

			var mapHeader = document.createElement("div");
			mapHeader.setAttribute("class", "mapHeader");

			var locationNameSpan = document.createElement("span");
			locationNameSpan.setAttribute("class", "locNameSpan")
			locationNameSpan.innerHTML = stadiumName;

			var iframeDiv = document.createElement("div");
			iframeDiv.setAttribute("class", "iframeDiv");

			var iframe = document.createElement("iframe");
			iframe.setAttribute("src", iframeURL);
			iframe.setAttribute("class", "iframe");

			var locationAddressSpan = document.createElement("span");
			locationAddressSpan.setAttribute("class", "locAddressSpan");
			locationAddressSpan.innerHTML = stadiumAddress;

			var picDiv = document.createElement("div");
			picDiv.setAttribute("class", "stadPicDiv");

			var pic = document.createElement("img");
			pic.setAttribute("src", picURL);
			pic.setAttribute("class", "stadPic");

			locationBodyDiv.append(locationDiv);
			locationDiv.append(mapHeader);
			mapHeader.append(locationNameSpan);
			locationDiv.append(iframeDiv);
			iframeDiv.append(iframe);
			locationDiv.append(picDiv);
			picDiv.append(pic);
			locationDiv.append(locationAddressSpan);
		}
	}
}

function createLocation2(e) {

	locationBodyDiv.innerHTML = " ";

	var locationDiv = document.createElement("div");
	locationDiv.setAttribute("class", "locationDiv");

	var clicked = e.getAttribute("data-stadname");
	console.log(clicked);

	for (i = 0; i < stadiumArray.length; i++) {

		if (clicked === stadiumArray[i]["name"]) {

			var stadiumName = (stadiumArray[i]["name"]);
			var stadiumAddress = (stadiumArray[i]["address"]);
			var iframeURL = (stadiumArray[i]["maps_url"]);
			var picURL = (stadiumArray[i]["picture"]);

			var locSpan = document.getElementById("locSpan");

			var mapHeader = document.createElement("div");
			mapHeader.setAttribute("class", "mapHeader");

			var locationNameSpan = document.createElement("span");
			locationNameSpan.setAttribute("class", "locNameSpan")
			locationNameSpan.innerHTML = stadiumName;

			var iframeDiv = document.createElement("div");
			iframeDiv.setAttribute("class", "iframeDiv");

			var iframe = document.createElement("iframe");
			iframe.setAttribute("src", iframeURL);
			iframe.setAttribute("class", "iframe");

			var locationAddressSpan = document.createElement("span");
			locationAddressSpan.setAttribute("class", "locAddressSpan");
			locationAddressSpan.innerHTML = stadiumAddress;

			var picDiv = document.createElement("div");
			picDiv.setAttribute("class", "stadPicDiv");

			var pic = document.createElement("img");
			pic.setAttribute("src", picURL);
			pic.setAttribute("class", "stadPic");

			locationBodyDiv.append(locationDiv);
			locationDiv.append(mapHeader);
			mapHeader.append(locationNameSpan);
			locationDiv.append(iframeDiv);
			iframeDiv.append(iframe);
			locationDiv.append(picDiv);
			picDiv.append(pic);
			locationDiv.append(locationAddressSpan);
		}
	}
}

function createChat() {
	var chatLoginDiv = document.createElement("div");
	chatLoginDiv.setAttribute("id", "chatLoginDiv");
	chatLoginDiv.setAttribute("class", "container chatLoginDiv");

	var signInHeader = document.createElement("h3");
	signInHeader.setAttribute("class", "signInHeader");
	signInHeader.innerHTML = "Please sign in to chat";

	var chatImageDiv = document.createElement("div");
	chatImageDiv.setAttribute("class", "chatImageDiv");

	var chatImage = document.createElement("img");
	chatImage.setAttribute("src", "assets/chat.png");
	chatImage.setAttribute("class", "chatImage");

	var googleDiv = document.createElement("div");
	googleDiv.setAttribute("class", "googleDiv");

	var googleSignInP = document.createElement("p");
	googleSignInP.setAttribute("class", "googleSignInP");
	googleSignInP.innerHTML = "Sign in with:";

	var googleButton = document.createElement("button");
	googleButton.setAttribute("type", "button");
	googleButton.setAttribute("class", "googleButton");
	googleButton.setAttribute("id", "googleLogin");
	googleButton.innerHTML = "Google";
	googleButton.addEventListener("click", login);

	chatBody.append(chatLoginDiv);

	chatLoginDiv.append(signInHeader);
	chatLoginDiv.append(chatImageDiv);
	chatImageDiv.append(chatImage);
	chatLoginDiv.append(googleDiv);
	googleDiv.append(googleSignInP);
	googleDiv.append(googleButton);

	var chatDiv = document.createElement("div");
	chatDiv.setAttribute("id", "chatDiv");
	chatDiv.setAttribute("class", "chatDiv");

	var signOutDiv = document.createElement("div");
	signOutDiv.setAttribute("class", "signOutDiv container");

	var signOutButton = document.createElement("button");
	signOutButton.setAttribute("class", "signOutButton btn");
	signOutButton.setAttribute("id", "signOutButton");
	signOutButton.innerHTML = "Sign out";
	signOutButton.addEventListener("click", signOut);

	var chatContainer = document.createElement("div");
	chatContainer.setAttribute("id", "posts");
	chatContainer.setAttribute("class", "chatContainer");

	var sendDiv = document.createElement("div");
	sendDiv.setAttribute("class", "sendDiv container");

	var messageInput = document.createElement("input");
	messageInput.setAttribute("id", "textInput");
	messageInput.setAttribute("class", "form-control messageInput");
	messageInput.setAttribute("type", "text");
	messageInput.setAttribute("placeholder", "Your message...");
	messageInput.addEventListener("keyup", function (event) {
		if (event.which == 13) {
			writeNewPost();
			document.getElementById("textInput").value = "";
			scrollAfterSend();
		}
	});

	var sendButton = document.createElement("button");
	sendButton.setAttribute("id", "create-post");
	sendButton.setAttribute("class", "btn");
	sendButton.innerHTML = "Send";
	sendButton.addEventListener("click", writeNewPost);
	sendButton.addEventListener("click", clearInput);
	sendButton.addEventListener("click", scrollAfterSend);

	chatBody.append(chatDiv);
	chatDiv.append(signOutDiv);
	signOutDiv.append(signOutButton);
	chatDiv.append(chatContainer);
	chatDiv.append(sendDiv);
	sendDiv.append(messageInput);
	sendDiv.append(sendButton);

	function scrollAfterSend() {
		$("div.chatContainer").animate({
			scrollTop: (chatContainer.scrollHeight)
		}, 500);
		console.log(chatContainer.scrollHeight);
	}
	

	firebase.auth().onAuthStateChanged(function (user) {
		if (user != null) {
			console.log("we are logged in");
			chatLoginDiv.classList.add("hideMe");
			chatDiv.classList.remove("hideMe");
			getPosts();
			scrollAfterSend();
			$("div.chatContainer").scrollTop(posts.scrollHeight);

		} else {
			console.log("we are logged out");
			chatLoginDiv.classList.remove("hideMe");
			chatDiv.classList.add("hideMe");
		}
	});

	function writeNewPost() {

		var text = document.getElementById("textInput").value;
		var userName = firebase.auth().currentUser.displayName;

		if (text != "") {

			var postData = {
				name: userName,
				body: text
			};
			//get a new key for a new post.
			console.log(postData);
			var newPostKey = firebase.database().ref().child('posts').push().key;

			console.log(newPostKey);

			var updates = {};
			updates[newPostKey] = postData;

			console.log(updates);
			firebase.database().ref().child('posts').update(updates);
		} else {
			alert("Can't send a blank message");
		}
	}

	function getPosts() {
		var userName = firebase.auth().currentUser.displayName;
		firebase.database().ref().child('posts').on('value',
			function (data) {
				console.log(data);
				var posts = data.val();
				console.log(posts);

				var logs = document.getElementById("posts");
				logs.innerHTML = "";

				for (var key in posts) {
					var text = document.createElement("div");
					text.setAttribute("class", "message");
					var textName = document.createElement("div");
					textName.setAttribute("class", "textName");
					var textMsg = document.createElement("div");
					textMsg.setAttribute("class", "textMsg");
					var element = posts[key];

					textName.textContent = element.name + ": ";
					textMsg.textContent = element.body;

					logs.append(text);
					text.append(textName, textMsg);

					if (userName == element.name) {
						text.classList.add("messageRight");
					} else {
						text.classList.add("messageLeft");
					}
				}

			}
		)
	}

	function clearInput() {
		document.getElementById("textInput").value = "";
	}

}

function login() {
	console.log("Login!!");

	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider);
}

function buttonClick() {
	var clicked = this.getAttribute("data-className");
	var posts = document.getElementById("posts");

	for (i = 0; i < divArray.length; i++) {

		if (clicked === divArray[i].getAttribute("data-className")) {
			divArray[i].classList.remove("hideMe");
			title.innerHTML = divArray[i].getAttribute("data-title");
			} 
		else {
			divArray[i].classList.add("hideMe");
		}
	}
	$("div.chatContainer").scrollTop(posts.scrollHeight);
}

function buttonClick2(e) {
	var clicked = e.getAttribute("data-className");
	var posts = document.getElementById("posts");

	for (i = 0; i < divArray.length; i++) {

		if (clicked === divArray[i].getAttribute("data-className")) {
			divArray[i].classList.remove("hideMe");
			title.innerHTML = divArray[i].getAttribute("data-title");

		} else {
			divArray[i].classList.add("hideMe");
		}
	}
	$("div.chatContainer").scrollTop(posts.scrollHeight);
}

function signOut() {
	firebase.auth().signOut()
}

//CREATE LOCATION LIST OLD FUNCTION
//function createLocationList() {
//
//	var picListDiv = document.createElement("div");
//	picListDiv.setAttribute("class", "picListDiv");
//
//
//	var instructionsDiv = document.createElement("div");
//	instructionsDiv.setAttribute("class", "instructionsDiv");
//	instructionsDiv.innerHTML = "Click on the stadium  name or image for more info";
//
//	locationListDiv.append(instructionsDiv);
//
//	for (i = 0; i < stadiumArray.length; i++) {
//
//		var stadiumName = (stadiumArray[i]["name"]);
//
//		var picURL = (stadiumArray[i]["picture"]);
//
//		var picHeader = document.createElement("div");
//		picHeader.setAttribute("class", "picHeader");
//
//
//		var locationNameDiv = document.createElement("div");
//		locationNameDiv.innerHTML = stadiumName;
//		locationNameDiv.setAttribute("class", "locNameDiv");
//		locationNameDiv.setAttribute("data-stadname", stadiumName);
//		locationNameDiv.addEventListener("click", buttonClick);
//		locationNameDiv.addEventListener("click", createLocation);
//		locationNameDiv.setAttribute("data-className", "locationBodyDiv");
//
//		var picDiv = document.createElement("div");
//		picDiv.setAttribute("class", "picDiv locationListElement");
//
//		var pic = document.createElement("img");
//		pic.setAttribute("src", picURL);
//		pic.setAttribute("class", "pic");
//		pic.setAttribute("data-stadname", stadiumName);
//		pic.addEventListener("click", buttonClick);
//		pic.addEventListener("click", createLocation);
//		pic.setAttribute("data-className", "locationBodyDiv");
//
//		locationListDiv.append(picListDiv);
//		picListDiv.append(picHeader);
//		picHeader.append(locationNameDiv);
//		picHeader.append(picDiv);
//		picDiv.append(pic);
//	}
//}

//VUE NOTES
//data
//
//created 
//
//methods
//
//html: <th v-for header in headers - makes a th for every data thing headers>


//OLD CREATE HOME FUNCTION	
//	var homeContainer = document.createElement("div");
//	homeContainer.setAttribute("class", "homeContainer");
//
//	var nyslImg = document.createElement("img");
//	nyslImg.setAttribute("src", "assets/nysl_logo.png");
//	nyslImg.setAttribute("class", "logo");
//
//	var homeButtonsDiv = document.createElement("div");
//	homeButtonsDiv.setAttribute("class", "homeButtonsDiv");
//
//	var nextGamesButton = document.createElement("button");
//	nextGamesButton.innerHTML = "Next Games";
//	nextGamesButton.setAttribute("class", "btn");
//	nextGamesButton.setAttribute("class", "homeBTN");
//	nextGamesButton.setAttribute("data-className", "next-games-div");
//	nextGamesButton.addEventListener("click", buttonClick);
//
//	var locInfoButton = document.createElement("button");
//	locInfoButton.innerHTML = "Stadium List";
//	locInfoButton.setAttribute("class", "btn");
//	locInfoButton.setAttribute("class", "homeBTN");
//	locInfoButton.setAttribute("data-className", "locationListDiv");
//	locInfoButton.addEventListener("click", buttonClick);
//
//	var chatButton = document.createElement("button");
//	chatButton.innerHTML = "Chat";
//	chatButton.setAttribute("class", "btn");
//	chatButton.setAttribute("class", "homeBTN");
//	chatButton.setAttribute("data-className", "chatBody");
//	chatButton.addEventListener("click", buttonClick);
//
//	var teamInfoButton = document.createElement("button");
//	teamInfoButton.innerHTML = "Team Info";
//	teamInfoButton.setAttribute("class", "btn");
//
//	var nextGamesLink = document.createElement("a");
//
//	document.getElementById("head-title-div").innerHTML = "Welcome to NYSL";
//	homeDiv.append(homeContainer);
//	homeContainer.append(nyslImg);
//	homeContainer.append(homeButtonsDiv);
//	homeButtonsDiv.append(nextGamesButton);
//	homeButtonsDiv.append(locInfoButton);
//	homeButtonsDiv.append(chatButton);
//	homeDiv.append(teamInfoButton);

//OLD SHOW DIVS FUNCTIONS
//function showHome() {
//	document.getElementById("head-title-div").innerHTML = "Welcome to NYSL";
//	homeDiv.classList.remove("hideMe");
//	nextGamesBodyDiv.classList.add("hideMe");
//	locationBodyDiv.classList.add("hideMe");
//	locationListDiv.classList.add("hideMe");
//	chatBody.classList.add("hideMe");
//};

//function showNextGames() {
//	document.getElementById("head-title-div").innerHTML = "Next Games";
//	homeDiv.classList.add("hideMe");
//	nextGamesBodyDiv.classList.remove("hideMe");
//	locationBodyDiv.classList.add("hideMe");
//	locationListDiv.classList.add("hideMe");
//	chatBody.classList.add("hideMe");
//};

//function showLocation() {
//	document.getElementById("head-title-div").innerHTML = "Location Info";
//	homeDiv.classList.add("hideMe");
//	locationListDiv.classList.add("hideMe");
//	nextGamesBodyDiv.classList.add("hideMe");
//	locationBodyDiv.classList.remove("hideMe");
//	chatBody.classList.add("hideMe");
//};

//function showLocationList() {
//	document.getElementById("head-title-div").innerHTML = "Stadium List";
//	homeDiv.classList.add("hideMe");
//	nextGamesBodyDiv.classList.add("hideMe");
//	locationBodyDiv.classList.add("hideMe");
//	chatBody.classList.add("hideMe");
//	locationListDiv.classList.remove("hidden");
//}
//function showChat() {
//	document.getElementById("head-title-div").innerHTML = "Chat";
//	homeDiv.classList.add("hideMe");
//	nextGamesBodyDiv.classList.add("hideMe");
//	locationBodyDiv.classList.add("hideMe");
//	locationListDiv.classList.add("hideMe");
//	chatBody.classList.remove("hideMe");
//	var posts = document.getElementById("posts");
//	$("div.chatContainer").scrollTop(posts.scrollHeight);
//}
