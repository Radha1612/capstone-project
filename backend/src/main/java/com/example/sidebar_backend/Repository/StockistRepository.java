package com.example.sidebar_backend.Repository;

import com.example.sidebar_backend.Model.Stockist;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface StockistRepository extends MongoRepository<Stockist, String> {
    // Custom query methods if needed
    Optional<Stockist> findById(String id);
}
