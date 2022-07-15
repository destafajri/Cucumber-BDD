package stepdefs;

import org.testng.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class EmailFeatureStepDef {
	String email = "";

	String hasilCek = "";

	@Given("saya memasukan email {string}")
	public void saya_memasukan_email(String string) {
		this.email = string;
	}

	@When("saya test formatnya")
	public void saya_test_formatnya() {
		if (this.email.contains("@")) {
			this.hasilCek = "benar";
		} else {
			this.hasilCek = "salah";
		}
	}

	@Then("hasilnya harus {string}")
	public void hasilnya_harus(String string) {
		Assert.assertTrue(this.hasilCek.equals(string));
	}

}
