package com.example.sidebar_backend.Repository;

import com.example.sidebar_backend.Model.Medicine;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MedicineRepository extends MongoRepository<Medicine, Long> {
}