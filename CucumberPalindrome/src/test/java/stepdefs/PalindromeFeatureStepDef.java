package stepdefs;

import org.testng.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class PalindromeFeatureStepDef {
	String kata = "";
	String hasilCek = "";

	@Given("saya memasukan kata {string}")
	public void saya_memasukan_kata(String string) {
		this.kata = string;
	}

	@When("saya test formatnya")
	public void saya_test_formatnya() {

		String str = this.kata;
		String reverseStr = "";

		int strLength = str.length();

		for (int i = (strLength - 1); i >= 0; --i) {
			reverseStr = reverseStr + str.charAt(i);
		}
		if (this.kata.toLowerCase().equals(reverseStr.toLowerCase())) {
			System.out.println(kata + " is a Palindrome String.");
			this.hasilCek = "benar";
		} else {
			System.out.println(kata + " is not a Palindrome String.");
			this.hasilCek = "salah";
		}

	}

	@Then("hasilnya harus {string}")
	public void hasilnya_harus(String string) {
		Assert.assertTrue(this.hasilCek.equals(string));
	}

}
