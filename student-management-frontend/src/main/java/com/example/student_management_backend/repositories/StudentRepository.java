package com.example.student_management_backend.repositories;



import com.example.student_management_backend.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepository extends MongoRepository<Student, String> {
}