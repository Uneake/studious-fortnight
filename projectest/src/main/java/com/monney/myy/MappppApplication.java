package com.monney.myy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@SpringBootApplication
public class MappppApplication {
    public static void main(String[] args) {
        SpringApplication.run(MappppApplication.class, args);
    }
}

@RestController
class PammController {

        @GetMapping("/options")
        public String[] getOptions() {
            return pamm.op;
        }

        @GetMapping("/mahas")
        public String[] getMahas() {
            return pamm.maha;
        }

        @GetMapping("/colleges")
        public HashMap<String, Integer>[] getColleges() {
            return pamm.sett();
        }
    }

