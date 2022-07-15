Feature: Tentukan email valid atau tidak.

	Scenario: Valid email
		Given saya memasukan email "budi@gmail.com"
		When saya test formatnya
		Then hasilnya harus "benar"
		
	Scenario: Invalid email
		Given saya memasukan email "budi"
		When saya test formatnya
		Then hasilnya harus "salah"
			