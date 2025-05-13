package com.example.student_management_backend.repositories;



import com.example.student_management_backend.model.Enrollment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EnrollmentRepository extends MongoRepository<Enrollment, String> {
}