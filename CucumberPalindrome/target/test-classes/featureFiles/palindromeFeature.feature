Feature: Tentukan kata palindrome.

	Scenario: Valid palindrome
		Given saya memasukan kata "katak"
		Given saya memasukan kata "aba"
		Given saya memasukan kata "a"
		Given saya memasukan kata ""
		Given saya memasukan kata "MadamimAdam"
		When saya test formatnya
		Then hasilnya harus "benar"
		
	Scenario: Invalid palindrome
		Given saya memasukan kata "abad"
		Given saya memasukan kata "mama"
		Given saya memasukan kata "ab"
		Given saya memasukan kata "katcak"
		When saya test formatnya
		Then hasilnya harus "salah"
			