package com.example.sidebar_backend.Repository;

import com.example.sidebar_backend.Model.Invoice;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface InvoiceRepository extends MongoRepository<Invoice, String> {
    // Define any custom query methods if needed
}

