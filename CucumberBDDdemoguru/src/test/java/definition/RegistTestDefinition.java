package definition;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertNull;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class RegistTestDefinition {
	WebDriver driver;

	@Given("User sedang berada di halaman register")
	public void user_sedang_berada_di_halaman_register() {
		System.setProperty("webdriver.chrome.driver", "C:\\webdriver\\chromedriver.exe");

		this.driver = new ChromeDriver();
		driver.get("https://demo.guru99.com/");
	}

	@When("User memasukan email {string}")
	public void user_memasukan_email(String string) {
		driver.findElement(By.xpath("//input[@name='emailid']")).sendKeys(string);
	}

	@When("User menekan tombol submit")
	public void user_menekan_tombol_submit() {
		driver.findElement(By.xpath("//input[@name='btnLogin']")).click();
	}

	@Then("User akan melihat kredensial yang diberikan {string}")
	public void user_akan_melihat_kredensial_yang_diberikan(String string) {
		
		String actual = driver.findElement(By.xpath(" //h2[normalize-space()='Access details to demo site.']"))
				.getText();
		assertEquals(actual, string);

		driver.close();

	}

	@Then("User akan melihat pesan validasi {string}")
	public void user_akan_melihat_pesan_validasi(String string) {
		String msg = driver.findElement(By.xpath("//label[@id='message9']")).getText();
		assertEquals(msg, string);
		driver.close();
	}

}
