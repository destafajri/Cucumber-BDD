package runner;
import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(features = "src/test/resources/featureFiles",
glue = "definition",
plugin={
	"pretty",
	"html:target/cucumber-reports",
	"json:target/cucumber-reports/Cucumber2022.json"
})
public class Runner extends AbstractTestNGCucumberTests {

}
