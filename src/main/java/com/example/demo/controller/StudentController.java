package com.example.demo.controller;

import com.example.demo.model.Student;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/students")
public class StudentController {

    List<Student> list = new ArrayList<>();

    // GET API
    @GetMapping
    public List<Student> getStudents() {

        if(list.isEmpty()) {
            list.add(new Student(1, "Rahul", "CSE"));
            list.add(new Student(2, "Priya", "AI"));
            list.add(new Student(3, "Arjun", "DS"));
        }

        return list;
    }

    // ✅ POST API (add this)
    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        list.add(student);
        return student;
    }
}
