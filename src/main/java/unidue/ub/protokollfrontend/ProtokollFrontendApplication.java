package unidue.ub.protokollfrontend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.core.annotation.Order;

@SpringBootApplication
@EnableEurekaClient
@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
public class ProtokollFrontendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProtokollFrontendApplication.class, args);
	}
}
