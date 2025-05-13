package com.example.student_management_backend.repositories;



import com.example.student_management_backend.model.Course;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CourseRepository extends MongoRepository<Course, String> {
}