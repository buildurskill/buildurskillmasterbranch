package com.buildurkill.buildurskillbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = "com.buildurskill.buildurskillbackend")
@EnableJpaRepositories(basePackages = "com.buildurskill.buildurskillbackend.repositories")
@EntityScan(basePackages = "com.buildurskill.buildurskillbackend.entities")
public class BuildurskillbackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BuildurskillbackendApplication.class, args);
	}

}
