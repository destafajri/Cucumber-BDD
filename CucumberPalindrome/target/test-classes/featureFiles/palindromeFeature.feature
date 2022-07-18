Feature: Tentukan kata palindrome.

	Scenario Outline: Palindrome Test
		Given saya memasukan kata <input>
		When saya test formatnya
		Then hasilnya harus <output>
	
	Examples:
	| input | output	|
	|""			| "true"	|
	|"bebeb"|	"true"	|


	Scenario: Valid palindrome
		Given saya memasukan kata "MadamimAdam"
		When saya test formatnya
		Then hasilnya harus "benar"
	Scenario: Valid palindrome
		Given saya memasukan kata ""
		When saya test formatnya
		Then hasilnya harus "benar"
	Scenario: Valid palindrome
		Given saya memasukan kata "a"
		When saya test formatnya
		Then hasilnya harus "benar"
	Scenario: Valid palindrome
		Given saya memasukan kata "katak"
		When saya test formatnya
		Then hasilnya harus "benar"
	Scenario: Valid palindrome
		Given saya memasukan kata "mimiM"
		When saya test formatnya
		Then hasilnya harus "benar"
	Scenario: Valid palindrome
		Given saya memasukan kata "mim"
		When saya test formatnya
		Then hasilnya harus "benar"
		
		
		
	Scenario: Invalid palindrome
		Given saya memasukan kata "katcak"
		When saya test formatnya
		Then hasilnya harus "salah"
	Scenario: Invalid palindrome
		Given saya memasukan kata "ab"
		When saya test formatnya
		Then hasilnya harus "salah"		
	Scenario: Invalid palindrome
		Given saya memasukan kata "mama"
		When saya test formatnya
		Then hasilnya harus "salah"		
	Scenario: Invalid palindrome
		Given saya memasukan kata "abad"
		When saya test formatnya
		Then hasilnya harus "salah"		
	Scenario: Invalid palindrome
		Given saya memasukan kata "salah"
		When saya test formatnya
		Then hasilnya harus "salah"