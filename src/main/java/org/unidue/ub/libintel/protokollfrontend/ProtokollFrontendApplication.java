package org.unidue.ub.libintel.protokollfrontend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class ProtokollFrontendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProtokollFrontendApplication.class, args);
	}

}
