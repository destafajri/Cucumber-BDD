package stepdefs;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginDef {
	WebDriver driver;
	String baseURL;
	

	@Given("User sedang berada di halaman login")
	public void user_sedang_berada_di_halaman_login() {
		System.setProperty("webdriver.chrome.driver","C:\\webdriver\\chromedriver.exe");

		this.driver = new ChromeDriver();
		driver.get("https://demo.guru99.com/V1/index.php");
		
	}

	@When("User memasukan userID {string}")
	public void user_memasukan_userID(String string) {
		driver.findElement(By.name("uid")).sendKeys(string);;

	}

	@When("User memasukan password {string}")
	public void user_memasukan_password(String string) {
		driver.findElement(By.name("password")).sendKeys(string);

	}

	@When("User menekan tombol login")
	public void user_menekan_tombol_login() {
		driver.findElement(By.name("btnLogin")).click();

	}

	@Then("User harus berada di halaman {string}")
	public void user_harus_berada_di_halaman(String string) {
		String actual = driver.findElement(By.className("heading3")).getText();
		assertEquals(actual,string);
		driver.close();

	}

	@Then("User harus mendapatkan notifikasi {string}")
	public void user_harus_mendapatkan_notifikasi(String string) {
		Alert alert = driver.switchTo().alert();
		String actual = alert.getText();
		assertEquals(actual,string);
		alert.accept();
		driver.close();

	}

}
