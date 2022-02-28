// config.js

/*obtain the following missing data from the twitter developer section, i.e., on your twitter account,

go to more;
--> settings and privacy
--> additional resources
--> under miscellaneous, developers
--> developer protal
--> create account
--> create project
--> create app
--> under Keys & tokens
	--> save api key == consumer_key below
	--> save api secret == consumer_secret below
--> Under setting
	-->User authentication setting, select turn OAuth 1.0
	--> Assign 'Read and write and Direct' message permissions
--> Go back to Keys and tokens
	--> Generate Access Token and Secret
	--> Replace them below as access_token_key and access_token_secret respectivel
*/

module.exports = {
  consumer_key: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  consumer_secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  access_token_key: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  access_token_secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
}
