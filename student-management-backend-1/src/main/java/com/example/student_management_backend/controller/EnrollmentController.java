package com.example.student_management_backend.controller;

import com.example.student_management_backend.model.Enrollment;
import com.example.student_management_backend.repositories.EnrollmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/enrollment")
public class EnrollmentController {

    @Autowired
    private EnrollmentRepository enrollmentRepository;

    @GetMapping
    public List<Enrollment> getAllStudents() {
        return enrollmentRepository.findAll();
    }

    @PostMapping
    public Enrollment createStudent(@RequestBody Enrollment enrollment) {
        return enrollmentRepository.save(enrollment);
    }

    // Add other CRUD endpoints
}