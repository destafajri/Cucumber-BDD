Feature: Login Apps GTPL Bank

Scenario: Login with valid user
	Given User sedang berada di halaman login
	When User memasukan userID "mngr422858"
	And User memasukan password "tatUper"
	And User menekan tombol login
	Then User harus berada di halaman "Welcome To Manager's Page of GTPL Bank"
	
Scenario: Login with invalid user
	Given User sedang berada di halaman login
	When User memasukan userID "xxxxxxxxx"
	And User memasukan password "yyyyyyy"
	And User menekan tombol login
	Then User harus mendapatkan notifikasi "User is not valid"