# How to run AvatarBazzar and BrowserQuest localy

## Repo Setup
### Step 1: Navigate to project directory in terminal
### Step 2: Get lastest version of repo
For first time:
	git clone https://github.com/SamuelLJackson/AvatarBazaar.git
Every time after initial clone 
	git pull
### Step 3: Download MarketPlace dependencies:
	Step 3a: Install yarn if not installed already
	https://yarnpkg.com/lang/en/docs/install/#mac-stable

	Step 3b: Download dependencies:
	cd MarketPlace
	yarn install
### Step 4: Download BrowswerQuest dependencies:
Change directories to BrowserQuest
	
	cd ../BrowserQuest
	npm install -d
	
## Running MarketPlace and BrowserQuest
#### Step 1: From project directory move into BrowserQuest:
	cd BrowserQuest
#### Step 2: Run game engine server:
	node server/js/main.js
#### Step 3: Run game client:
Change to client directory in BrowserQuest then run client server
	cd client
	http-server
#### Step 4: Change to MarketPlace directory:
	cd ../../MarketPlace
#### Step 5: Run MarketPlace server:
	npm start 
## Monitoring
The server has a status URL which can be used as a health check or simply as a way to monitor player population.
Send a GET request to: http://[host]:[port]/status
It will return a JSON array containing the number of players in all instanced worlds on this game server.



