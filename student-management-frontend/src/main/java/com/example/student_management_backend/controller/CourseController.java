package com.example.student_management_backend.controller;

import com.example.student_management_backend.model.Course;
import com.example.student_management_backend.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/course")
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    @GetMapping
    public List<Course> getAllStudents() {
        return courseRepository.findAll();
    }

    @PostMapping
    public Course createStudent(@RequestBody Course course) {
        return courseRepository.save(course);
    }

    // Add other CRUD endpoints
}